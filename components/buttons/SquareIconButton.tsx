
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Constands from "../../consts"

type SquareIconButtonProps = {
    icon : number,
    wrapperStyle?:object,
    iconStyle?:object
}

const SquareIconButton = ({icon,wrapperStyle,iconStyle} : SquareIconButtonProps) => {
  return (
    <View style={[styles.iconWrapper,wrapperStyle]}>
       <Image source={icon} style={[styles.icon,iconStyle]} />
    </View>
  )
}

export default SquareIconButton

const styles = StyleSheet.create({
    iconWrapper : {
        width:50,
        height:50,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        borderRadius:Constands.BORDER_RADIUS.md
    },
    icon : {
      width:30,
      height:30,
    }
})