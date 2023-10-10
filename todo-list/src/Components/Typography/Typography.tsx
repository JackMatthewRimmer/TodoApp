import { type FC, type HTMLProps } from "react";
import type * as CSS from "csstype";

interface TypographyProps {
  text: string;
  fontSize: CSS.Property.FontSize;
  fontColour?: CSS.Property.Color;
}

export const Typography: FC<
  TypographyProps & HTMLProps<HTMLParagraphElement>
> = ({ text, fontSize, fontColour, ...otherProps }) => {
  const css = {
    "font-size": fontSize,
    color: fontColour,
  };
  return (
    <p style={css} {...otherProps}>
      {text}
    </p>
  );
};
