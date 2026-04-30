const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
<<<<<<< HEAD
    databaseUrl: process.env.DATABASE_URL,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_REST_URL,
      redisToken: process.env.UPSTASH_REDIS_REST_TOKEN,
      qstashUrl: process.env.QSTASH_URL,
      qstashToken: process.env.QSTASH_TOKEN,
    },
=======
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
  },
};

export default config;
