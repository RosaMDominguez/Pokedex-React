export interface ButtonProps {
    icon?: string;
    iconPosition?: IconPositionType;
    onClickButton: () => void;
    title: string;
    isDisabled?: boolean;
}

type IconPositionType = 'left' | 'rigth';