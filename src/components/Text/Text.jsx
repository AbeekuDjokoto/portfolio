import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./Text.module.scss";

function Text(props) {
  const {
    as = "div",
    variant = "p",
    weight = "",
    asVariant = false,
    className = "",
    children,
    ...rest
  } = props;

  const fontWeights = {
    normal: "!font-normal",
    medium: "!font-medium",
    semibold: "!font-semibold",
    bold: "!font-bold",
    extrabold: "!font-extrabold",
    black: "!font-black",
  };

  const classNames = cx([
    className,
    styles[`text-${variant}`],
    { [fontWeights[weight]]: !!weight },
  ]);
  const evaluatedElement = asVariant ? variant : as;
  return React.createElement(
    evaluatedElement,
    { className: classNames, ...rest },
    children
  );
}

Text.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h6",
    "p",
    "span",
    "div",
    "label",
  ]),
  weight: PropTypes.oneOf([
    "",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
  ]),
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h6", "p", "span"]),
  asVariant: PropTypes.bool,
  className: PropTypes.string,
};

export { Text };
