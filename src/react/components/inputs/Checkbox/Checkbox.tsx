import * as React from 'react';
import styles from './Checkbox.module.scss';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: React.ReactNode; // добавляем свой label проп
};

const Checkbox: React.FC<CheckboxProps> = ({label, className, ...props}) => {
  return (
    <label className={`${styles.checkbox_wrapper} ${className ?? ''}`}>
      <input type="checkbox" {...props} />
      <span className={styles.checkbox_custom}>
        <svg viewBox="0 0 24 24"
          className={styles.checkmark}
        >
          <polyline points="2 12 9 19 22 5"/>
        </svg>
      </span>
      {label && <span className={styles.checkbox_label_text}>{label}</span>}
    </label>
  );
};

export default Checkbox;