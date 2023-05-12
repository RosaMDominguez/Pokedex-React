import { ReactElement } from "react";
import { ButtonProps } from "./Button.interface";
import './Button.scss';

const Button = (props: ButtonProps): ReactElement => {
  const { icon, iconPosition, onClickButton, title, isDisabled } = props;

  return (
    <>
      <button
        className="Button"
        onClick={() => onClickButton()}
        disabled={isDisabled}
      >
        {iconPosition === "left" && (
          <span>
            <i className={icon} />
          </span>
        )}
        {title}
        {iconPosition === "rigth" && (
          <span>
            <i className={icon} />
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
