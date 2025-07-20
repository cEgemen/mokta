import * as Constands from "../../consts";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type ICON_TYPE_BUTTON_PROPS = {
  label: string;
  icon: number;
  onClick: () => void;
  iconWrapperStyle?: object;
  iconStyle?: object;
  labelStyle?:object;
};

const İconButton = ({
  label,
  icon,
  onClick,
  iconWrapperStyle = {},
  iconStyle = {},
  labelStyle = {}
}: ICON_TYPE_BUTTON_PROPS) => {
  return (
    <Pressable onPress={onClick} style={[styles.button,iconWrapperStyle]}>
      <Image source={icon} style={[styles.icon,iconStyle]} />
      <Text style={[Constands.TYPOGRAPHY.contentText,labelStyle]}>{label}</Text>
    </Pressable>
  );
};

export default İconButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    columnGap: Constands.SPACING.sm,
    padding: Constands.SPACING.sm,
    borderRadius: Constands.BORDER_RADIUS.md,
  },
  icon: { width: 25, height: 25 },
});
