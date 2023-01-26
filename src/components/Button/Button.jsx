import arrow from "../../assets/arrow.svg";
import classes from "./Button.module.scss";

export const Button = ({ direction = "right", onChange }) => {
  const className =
    direction === "left"
      ? classes["button-arrow-left"]
      : classes["button-arrow-right"];
  return (
    <button className={classes["button"]} onClick={onChange}>
      <img src={arrow} className={className} alt="arrow" />
    </button>
  );
};
