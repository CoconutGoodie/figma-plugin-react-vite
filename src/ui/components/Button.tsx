import React from "react";
import { classes } from "@ui/utils/classes.util";
import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  return (
    <button {...props} className={classes(props.className, styles.button)} />
  );
};
