import { serve } from "@upstash/workflow/nextjs";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { sendEmail } from "@/lib/workflow";

type UserState = "no-active" | "active" | "churned"; // ✅ adicionado "churned"
type InitialData = {
  email: string;
  fullName: string;
};

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const THREE_DAYS_IN_MS = 3 * ONE_DAY_IN_MS;
const THIRTY_DAYS_IN_MS = 30 * ONE_DAY_IN_MS;

const getUserState = async (email: string): Promise<UserState> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) return "no-active";

  const lastActivityDate = new Date(user[0].lastActivityDate!);
  const now = new Date();
  const timeDifference = now.getTime() - lastActivityDate.getTime();

  if (timeDifference > THIRTY_DAYS_IN_MS) {
    return "churned"; // ✅ inativo há mais de 30 dias
  }
  if (timeDifference > THREE_DAYS_IN_MS) {
    return "no-active"; // ✅ inativo entre 3 e 30 dias
  }
  return "active";
};

export const { POST } = serve<InitialData>(async (context) => {
  const { email, fullName } = context.requestPayload;

  // Welcome Email
  await context.run("new-signup", async () => {
    await sendEmail({
      email,
      subject: "Welcome to the Platform",
      message: `Welcome ${fullName}!`,
    });
  });

  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3);

  const MAX_MONTHS = 12; // ✅ limite de 12 meses
  let monthsElapsed = 0;

  while (monthsElapsed < MAX_MONTHS) {
    // ✅ substituído while(true)
    const state = await context.run("check-user-state", async () => {
      return await getUserState(email);
    });

    if (state === "no-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({
          email,
          subject: "Are you still there?",
          message: `Hey ${fullName}, we miss you!`,
        });
      });
    } else if (state === "churned") {
      // ✅ novo caso
      await context.run("send-email-churned", async () => {
        await sendEmail({
          email,
          subject: "We really miss you!",
          message: `Hey ${fullName}, it's been over a month! Come back and see what's new.`,
        });
      });
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({
          email,
          subject: "Welcome Back!",
          message: `Welcome back ${fullName}`,
        });
      });
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30);
    monthsElapsed++;

    // ✅ parar se o utilizador já não existir
    const userExists = await context.run("check-user-exists", async () => {
      const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);
      return user.length > 0;
    });

    if (!userExists) break;
  }
});
