import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Constands from "../../../consts";
import SquareIconButton from "../../buttons/SquareIconButton";
import { basketIcon } from "../../../assets";

type IngredientCard_PROPS = {
  unit: string;
  amount: string;
  label: string;
  icon?: number;
};

const IngredientCard = ({
  unit,
  amount,
  label,
  icon,
}: IngredientCard_PROPS) => {
  return (
    <Pressable style={styles.cardWrapper}>
      <SquareIconButton
        icon={basketIcon}
        onClick={() => {}}
        wrapperStyle={{ backgroundColor: "lightgrey" }}
      />
      <View style={styles.detailWrapper}>
         <Text numberOfLines={1} style={Constands.TYPOGRAPHY.detailTitle}>{label}</Text>
         <Text numberOfLines={1} style={Constands.TYPOGRAPHY.detailText}>{amount} {unit}</Text>
      </View>
    </Pressable>
  );
};

export default IngredientCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    columnGap: Constands.SPACING.xl,
    paddingHorizontal: Constands.SPACING.md,
    borderRadius: Constands.BORDER_RADIUS.lg,
    backgroundColor: "white",
  },
  detailWrapper : {
      flex:1,
      justifyContent:"space-around",
  }
});
