import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  label: string;
  variant?: "neutral" | "positive" | "negative";
}

const Badge: React.FC<BadgeProps> = ({ label, variant }) => {
  return (
    <span
      className={`${styles.badge} 
        ${styles[`badge__${variant}`]}`}
    >
      {label}
    </span>
  );
};

export default Badge;
