import { SmallButton, MediumButton, LargeButton } from "./StyledSharedButton";

export interface SharedButtonProps {
  buttonText: string;
  size: "small" | "medium" | "large";
  // onClick: () => void;
}

export const SharedButton = ({ buttonText, size }: SharedButtonProps) => {
  if (size === "small") {
    return <SmallButton>{buttonText}</SmallButton>;
  } else if (size === "medium") {
    return <MediumButton>{buttonText}</MediumButton>;
  }
  return <LargeButton>{buttonText}</LargeButton>;
};
