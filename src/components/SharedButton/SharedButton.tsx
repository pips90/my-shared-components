import { SmallButton, MediumButton, LargeButton } from "./StyledSharedButton";

export interface SharedButtonProps {
  buttonText: string;
  size: "small" | "medium" | "large";
  onClick: () => void;
}

export const SharedButton = ({
  buttonText,
  size,
  onClick,
}: SharedButtonProps) => {
  if (size === "small") {
    return <SmallButton onClick={onClick}>{buttonText}</SmallButton>;
  } else if (size === "medium") {
    return <MediumButton onClick={onClick}>{buttonText}</MediumButton>;
  }
  return <LargeButton onClick={onClick}>{buttonText}</LargeButton>;
};
