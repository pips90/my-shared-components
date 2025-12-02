export interface SharedButtonProps {
  buttonText: string;
  //  size: 'small' | 'medium' | 'large';
  // onClick: () => void;
}

export const SharedButton = ({ buttonText }: SharedButtonProps) => {
  return <button>{buttonText}</button>;
};
