import React from "react";
import { Text } from "../../../../components";
import classes from "./LeftLayout.module.scss";

export const LeftLayout = () => {
  return (
    <div className={classes.left}>
      <Text variant={"h3"} as="h3" weight={"bold"}>
        Abeeku Djokoto
      </Text>
      <Text variant={"h4"} weight={"medium"} as="h4">
        Frontend Engineer at Enyata
      </Text>
      <Text as="p" variant={"p"} className={"text-[var(--light-ash)]"}>
        I build accessible, inclusive products and digital experiences for the
        web
      </Text>
    </div>
  );
};
