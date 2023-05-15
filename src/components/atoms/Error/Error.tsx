import { ReactElement } from "react";
import { ErrorProps } from "./Error.interface";
import "./Error.scss";

const Error = (props: ErrorProps): ReactElement => {
  const { text } = props;

  return (
    <div className="ContainerError">
     <p>{text}</p>
    </div>
  );
};

export default Error;
