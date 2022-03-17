export type ButtonType = 'primary' | 'secondary' | 'minimal';
export interface ButtonProps {
  name: string;
  variant: ButtonType;
  rounded: boolean;
}
