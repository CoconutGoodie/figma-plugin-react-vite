import { classes } from "@ui/utils/classes.util";
import { ComponentProps } from "react";
import styles from "./Button.module.scss";

type Props = ComponentProps<"button">;

export const Button = (props: Props) => {
  return (
    <button {...props} className={classes(props.className, styles.button)} />
  );
};
