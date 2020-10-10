import React, { useState, useEffect } from 'react';
import Styles from './styles';

interface Props {
  initialValue: boolean;
  disabled?: boolean;
  color: string;
  onChangeValue: (isChecked: boolean) => void;
}

const Checkbox: React.FC<Props> = ({
  initialValue,
  disabled,
  onChangeValue,
  color,
}) => {
  const [isChecked, setChecked] = useState(false);

  const handleChangeValue = () => {
    if (!disabled) {
      setChecked(!isChecked);
      onChangeValue(!isChecked);
    }
  };

  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  return (
    <Styles.Checkbox
      color={color}
      disabled={disabled}
      onClick={handleChangeValue}
      isChecked={isChecked}
    />
  );
};

export default Checkbox;
