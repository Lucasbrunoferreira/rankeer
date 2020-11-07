import React, { useState } from 'react';
import Styles from './styles';

const values = [5, 4, 3, 2, 1];

interface Props {
  onChange(value: number): void;
}

const Rater: React.FC<Props> = ({ onChange }) => {
  const [currentValue, setCurrentValue] = useState(0);

  const handleSelectedValue = (value: number) => {
    setCurrentValue(value)
    onChange(value)
  }

  return (
    <Styles.Wrapper>
      {values.map((value) => (
        <Styles.Option
          key={value}
          isActive={currentValue === value}
          onPress={() => handleSelectedValue(value)}
        >
          <Styles.Text>{value}</Styles.Text>
        </Styles.Option>
      ))}
    </Styles.Wrapper>
  );
}

export default Rater;
