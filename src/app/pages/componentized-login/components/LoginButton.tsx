import React, { forwardRef } from "react";

interface LoginButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  children: React.ReactNode;
}

const LoginButton = forwardRef<HTMLButtonElement, LoginButtonProps>(
  (props, ref) => {
    return (
      <button ref={ref} type={props.type} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
);

export default LoginButton;
