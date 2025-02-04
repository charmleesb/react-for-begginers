import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text, onClick}) {
    return <button onClick={onClick} className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text: propTypes.string
}

export default Button;