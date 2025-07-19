import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import * as Constands from "../../../../consts";
import { basketIcon, clockIcon, fireIcon } from "../../../../assets";
import { router } from "expo-router";

type RecoCardProps = {
  title: string;
  img: string;
  time: string;
  itemSize: number;
};

type DetailData = {
  icon: number;
  value: string | number | undefined;
};

const RecoCard = ({ title, img, time, itemSize }: RecoCardProps) => {

  const DETAIL_DATA: DetailData[] = [
    { icon: clockIcon, value: time + " min" },
    { icon: basketIcon, value: "X " + itemSize },
  ];

  const goMealDetail = () => {
        router.push("/")  
  }

  return (
    <Pressable style={styles.cardWrapper} onPress={goMealDetail}>
      <Image
        source={{ uri: img }}
        style={styles.mealImg}
      />
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <View style={styles.cardTitleContentWrapper}>
            <Text
              numberOfLines={5}
              style={{ ...Constands.TYPOGRAPHY.detailTitle }}
            >
              {title}
            </Text>
          </View>
          <View style={styles.cardIconItemContentWrapper}>
            {DETAIL_DATA.map((item, index) => {
              const { icon, value } = item;
              return (
                <View style={styles.iconItemWrapper}>
                  <Image source={icon} style={styles.iconItem} />
                  <Text style={Constands.TYPOGRAPHY.contentText}>{value}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RecoCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: 240,
    height: 380,
    backgroundColor: "transparent",
    paddingRight: Constands.SPACING["2xl"],
  },
  mealImg: {
    position: "absolute",
    top: 50,
    right: Constands.SPACING.sm,
    zIndex: 1,
    width: 140,
    height: 140,
    borderRadius: Constands.BORDER_RADIUS.circle,
  },
  cardContent: {
    flex: 1,
    paddingTop: 190 + Constands.SPACING.md,
    paddingHorizontal: Constands.SPACING.md,
    paddingBottom: Constands.SPACING.md,
    backgroundColor: "white",
    borderRadius: Constands.BORDER_RADIUS.md,
  },
  cardTitleContentWrapper: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardIconItemContentWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: Constands.SPACING.sm,
  },
  iconItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Constands.SPACING.sm,
  },
  iconItem: {
    width: 40,
    height: 40,
  },
});
