import { LargeInput, MediumInput, SmallInput } from "./StyledSharedInput";

export interface SharedInputProps {
  type: string;
  placeholderText: string;
  size: "small" | "medium" | "large";
}
export const SharedInput = ({
  type,
  placeholderText,
  size,
}: SharedInputProps) => {
  if (size === "small") {
    return <SmallInput type={type} placeholder={placeholderText} />;
  } else if (size === "medium") {
    return <MediumInput type={type} placeholder={placeholderText} />;
  }
  return <LargeInput type={type} placeholder={placeholderText} />;
};
