import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  value?: string;
  onPickerChange: (color: string) => void;
  id?: string;
}

const ColorPicker = ({ value, onPickerChange, id }: Props) => {
  return (
    <div className="relative" aria-label={id}>
      <div className="flex flex-row items-center">
        <p>#</p>
        <HexColorInput
          className="hex-input"
          color={value}
          onChange={onPickerChange}
        />
      </div>
      <HexColorPicker color={value} onChange={onPickerChange} />
    </div>
  );
};

export default ColorPicker;
