import React from 'react';
import styles from './index.module.css';

const Button = ({
  children,
  className,
  inverted,
  stroke = false,
  large = false,
  icon = false,
  ...other
}) => {
  return (
    <button
      className={[
        styles.button,
        className,
        inverted ? styles.buttonInverted : '',
        large ? styles.buttonLarge : '',
        stroke ? styles.buttonStroke : '',
        icon ? styles.buttonWithIcon : '',
      ].join(' ')}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
