import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { use, useEffect, useState } from "react";
import {
  BasePageWrapper,
  IconButton,
  IngredientCard,
  SquareIconButton,
  StackHeader,
} from "../../components";
import * as Constands from "../../consts";
import {
  basketIcon,
  chartIcon,
  chefIcon,
  clockIcon,
  favIcon,
  fireIcon,
} from "../../assets";
import useSafeScreenSizes from "../../hooks/safeScreenSizes";
import { MOCHA_APP_DATA } from "../../consts";
import { GenerateRandomKey } from "../../utils";
import { router } from "expo-router";

type TopSideDetailITEMData = {
  icon: number;
  value: string;
};

type BUTTON_DATA_ITEM = {
  icon: number;
  label: string;
  onClick: () => void;
};

type TopSideDetailData = TopSideDetailITEMData[];

type BUTTON_DATA = BUTTON_DATA_ITEM[];

const MealDetail = () => {
  const [activeDetail, setActiveDetail] = useState(0);
  const { safeScreenWidth, safeScreenHeight } = useSafeScreenSizes();

  const TOP_SIDE_DETAIL_DATA: TopSideDetailData = [
    { icon: clockIcon, value: MOCHA_APP_DATA.recipe.total_time },
    {
      icon: fireIcon,
      value: MOCHA_APP_DATA.recipe.calories_info.total_calories + " cal",
    },
    {
      icon: basketIcon,
      value: "X " + MOCHA_APP_DATA.recipe.ingredients.length,
    },
  ];

  const BUTTON_DATA: BUTTON_DATA = [
    { icon: chartIcon, label: "Nutrition", onClick: () => router.push("/food/nutrition") },
    { icon: chefIcon, label: "Let's Cook", onClick: () => router.push("/food/cook") },
  ];

  const BOTTOM_SIDE_TITLE = "Ingredients";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetail((oldState) => {
        if (oldState + 1 === TOP_SIDE_DETAIL_DATA.length) {
          return 0;
        }
        return oldState + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

      <BasePageWrapper>
      <>
        <View style={styles.topSide}>
          <StackHeader
            isBack={true}
            wrapperStyle={{ paddingHorizontal: Constands.SPACING.md }}
            backIconWrapperStyle={{ backgroundColor: "lightgrey" }}
            CenterTemplate={
              <Text
                numberOfLines={1}
                style={[
                  Constands.TYPOGRAPHY.heading,
                  { flex: 1, textAlign: "center" },
                ]}
              >
                {MOCHA_APP_DATA.recipe.name}
              </Text>
            }
            RightTemplate={
              <SquareIconButton
                onClick={() => {}}
                icon={favIcon}
                wrapperStyle={{ backgroundColor: "lightgrey" }}
              />
            }
          />
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={[
              styles.topSideImage,
              {
                top: safeScreenHeight / 4 - 90,
                right: safeScreenWidth / 2 - 90,
              },
            ]}
          />
          <View style={styles.topSideDetailWrapper}>
            {TOP_SIDE_DETAIL_DATA.map((item, index) => {
              const { icon, value } = item;
              const isActiveItem = index === activeDetail;
              return (
                <View
                  key={GenerateRandomKey.generateKey()}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: Constands.SPACING.sm,
                  }}
                >
                  <Image
                    source={icon}
                    style={{
                      width: 40,
                      height: 40,
                      tintColor: isActiveItem
                        ? Constands.DETAIL_ITEM_COLOR[index]
                        : undefined,
                    }}
                  />
                  <Text
                    style={[
                      Constands.TYPOGRAPHY.contentText,
                      {
                        paddingTop: Constands.SPACING.sm,
                        color: isActiveItem
                          ? Constands.DETAIL_ITEM_COLOR[index]
                          : undefined,
                      },
                    ]}
                  >
                    {value}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.bottomSide}>
          <Text style={Constands.TYPOGRAPHY.contentTitle}>
            {BOTTOM_SIDE_TITLE}
          </Text>
          <FlatList
            data={MOCHA_APP_DATA.recipe.ingredients}
            keyExtractor={() => GenerateRandomKey.generateKey()}
            contentContainerStyle={{rowGap:Constands.SPACING.md}}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              const {amount,name,unit} = item;
              return <IngredientCard amount={amount} label={name} unit={unit}  />;
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          {BUTTON_DATA.map((item, index) => {
            const { icon, label, onClick } = item;
            return <IconButton icon={icon} label={label} onClick={onClick} iconWrapperStyle={{backgroundColor:"lightgrey"}} />;
          })}
        </View>
      </>
    </BasePageWrapper> 
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  topSide: {
    height: "50%",
    backgroundColor: "white",
    borderBottomLeftRadius: Constands.BORDER_RADIUS["3xl"],
    borderBottomRightRadius: Constands.BORDER_RADIUS["3xl"],
    overflow: "hidden",
    marginBottom: Constands.SPACING.lg,
  },
  topSideImage: {
    width: 180,
    height: 180,
    borderRadius: Constands.BORDER_RADIUS.circle,
    position: "absolute",
  },
  topSideDetailWrapper: {
    position: "absolute",
    bottom: Constands.SPACING.md,
    left: 0,
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomSide: {
    flex:1,
    rowGap:Constands.SPACING.md,
    marginBottom: Constands.SPACING.lg,
    paddingHorizontal: Constands.SPACING.md,
  },
    buttonWrapper: {
    height: 64,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"white"
  },
});
