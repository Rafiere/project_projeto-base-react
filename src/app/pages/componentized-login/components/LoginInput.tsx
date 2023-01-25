import React, { forwardRef } from "react";

interface LoginInputProps {
  label: string;
  value: string;
  type?: string;
  onChange: (novoValor: string) => void;
  onPressEnter?: () => void;
}
const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  (props, ref) => {
    return (
      <label>
        <span>{props.label}</span>
        <input
          ref={ref}
          type={props.type}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
        />
      </label>
    );
  }
);

export default LoginInput;
