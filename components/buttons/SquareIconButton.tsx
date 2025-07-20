
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Constands from "../../consts"

type SquareIconButtonProps = {
    icon : number,
    wrapperStyle?:object,
    iconStyle?:object,
    onClick : () => void
}

const SquareIconButton = ({icon,wrapperStyle,iconStyle,onClick} : SquareIconButtonProps) => {
  return (
    <Pressable style={[styles.iconWrapper,wrapperStyle]} onPress={onClick} >
       <Image source={icon} style={[styles.icon,iconStyle]} />
    </Pressable>
  )
}

export default SquareIconButton

const styles = StyleSheet.create({
    iconWrapper : {
        width:40,
        height:40,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        borderRadius:Constands.BORDER_RADIUS.md
    },
    icon : {
      width:25,
      height:25,
    }
})