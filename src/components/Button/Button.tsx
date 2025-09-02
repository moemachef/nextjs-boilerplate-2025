import React from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = 'primary',
  disabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], disabled ? styles.disabled : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
