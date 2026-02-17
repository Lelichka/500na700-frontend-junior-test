import * as React from "react";
import styles from"./TextInput.module.scss";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ ...props }: TextInputProps) => {
    return <input className={styles.input} {...props} />;
};

export default TextInput;