export interface IButton {
  disabled?: boolean;
  children: string | JSX.Element;
  isActive?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
