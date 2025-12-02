export interface SharedInputProps {
  type: string;
  placeholderText: string;
}
export const SharedInput = ({ type, placeholderText }: SharedInputProps) => {
  return <input type={type} placeholder={placeholderText} />;
};
