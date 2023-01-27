import React, { useCallback, useState } from "react";

export interface CheckboxNameProps {
  name: string;
}

const CheckboxName = (props: CheckboxNameProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <div>
      <p>{props.name}</p>
      <input type="checkbox" onChange={handleCheck} checked={isChecked} />
    </div>
  );
};

export default CheckboxName;
