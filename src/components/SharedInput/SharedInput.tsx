import { LargeInput, MediumInput, SmallInput } from "./StyledSharedInput";

export interface SharedInputProps {
  type: string;
  placeholderText: string;
  size: "small" | "medium" | "large";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SharedInput = ({
  type,
  placeholderText,
  size,
  onChange,
}: SharedInputProps) => {
  if (size === "small") {
    return (
      <SmallInput
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
      />
    );
  } else if (size === "medium") {
    return (
      <MediumInput
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
      />
    );
  }
  return (
    <LargeInput type={type} placeholder={placeholderText} onChange={onChange} />
  );
};
