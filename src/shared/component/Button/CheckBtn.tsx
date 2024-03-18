import styles from "./Checkbox.module.css";

interface CheckBoxProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ onChange, label }) => {
  return (
    <label className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        onChange={(e) => onChange(e)}
        className={styles.checkbox}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;