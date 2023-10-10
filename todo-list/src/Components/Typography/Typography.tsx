import { type FC, type HTMLProps } from "react";
import type * as CSS from "csstype";

interface TypographyProps {
  text: string;
  fontSize: CSS.Property.FontSize;
  fontColour?: CSS.Property.Color;
  fontWeight?: CSS.Property.FontWeight;
}

export const Typography: FC<
  TypographyProps & HTMLProps<HTMLParagraphElement>
> = ({ text, fontSize, fontColour, fontWeight, ...otherProps }) => {
  const css = {
    "font-weight": fontWeight,
    "font-size": fontSize,
    color: fontColour,
  };
  return (
    <p style={css} {...otherProps}>
      {text}
    </p>
  );
};
