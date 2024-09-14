
import styles from "../Button.module.css";

const Button = (props) => {


  const {isOutline,text,icon ,...rest} =props;
  return (
     <button {...rest} className={isOutline  ? styles.ordinaryBtn : styles.primaryBtn}>
      {icon}
      {text}
     </button>
  )
}

export default Button