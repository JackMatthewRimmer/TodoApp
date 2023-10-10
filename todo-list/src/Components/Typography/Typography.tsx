import { type FC } from "react";
import type * as CSS from "csstype";

interface TypographyProps {
  text: string;
  fontSize: CSS.Property.FontSize;
  fontColour?: CSS.Property.Color;
}

export const Typography: FC<TypographyProps> = ({
  text,
  fontSize,
  fontColour,
}) => {
  const css = {
    "font-size": fontSize.toString() + "px",
    color: fontColour,
  };
  return <p style={css}>text</p>;
};
