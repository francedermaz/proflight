import logo from "../../assets/logo.svg";
import classes from "./Card.module.scss";

export const Card = ({ isSelected, onSelect }) => {
  const className = isSelected ? classes["card-selected"] : classes["card"];
  return (
    <div className={className} onClick={onSelect}>
      <img src={logo} className={classes["card-logo"]} alt="logo" />
    </div>
  );
};
