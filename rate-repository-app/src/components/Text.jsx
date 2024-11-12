import { Text as NativeText } from "react-native";

import theme from "../theme";

const Text = ({
  color = "primary",
  size = "body",
  weight = "normal",
  family = "main",
  style,
  ...props
}) => {
  const textStyle = [
    {
      color: theme.colors[color],
      fontSize: theme.fontSizes[size],
      lineHeight: theme.lineHeights[size],
      fontWeight: theme.fontWeights[weight],
      fontFamily: theme.fonts[family],
    },
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
