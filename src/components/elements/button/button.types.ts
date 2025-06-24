export type ButtonData = Partial<HTMLButtonElement> & {
  label: string;
};

export type ButtonAction = {
  handleClick?: () => void;
};

export type ButtonProps = ButtonData & ButtonAction;
