import React from 'react';
import Styles from './styles';

const Footer: React.FC = () => {
  return (
    <Styles.Footer>
      <span>version: 1.0.0</span>

      <a href="https://github.com/lucasbrunoferreira">Develeoped by: Lucas Ferreira</a>
    </Styles.Footer>
  );
};

export default Footer;
