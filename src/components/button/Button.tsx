import React, { forwardRef } from "react";
import styles from "./Button.module.scss";
import Badge from "../badge/Badge"; 

interface ButtonProps {
  id: string;
  ariaControls?: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
  selected?: boolean;
  variant?: 'pill' | 'underline';
  badgeVariant?: 'neutral' | 'positive' | 'negative';
  badgeLabel: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ariaControls, label, onClick, disabled, badgeLabel, badgeVariant, variant, selected }, ref) => {
  return (
    <button
      id={`tab__${label}`}
      aria-controls={ariaControls}
      onClick={onClick}
      disabled={disabled}
      aria-selected={selected ? "true" : "false"}
      tabIndex={selected ? 0 : -1}
      className={`${styles.button} 
        ${disabled ? styles['button--disabled'] : ''} 
        ${styles[`button__${variant}`]} 
        ${selected ? styles[`button__${variant}--selected`] : styles[`button__${variant}--unselected`]}`}
      ref={ref}
    >
      {label}
      {badgeVariant && <Badge label={badgeLabel} variant={badgeVariant} />}
    </button>
  );
});

export default Button;
