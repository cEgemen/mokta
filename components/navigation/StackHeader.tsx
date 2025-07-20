
import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import SquareIconButton from '../buttons/SquareIconButton'
import { leftArrowIcon } from '../../assets'
import * as Constands from '../../consts'

type StackHeaderProps = {
    isBack? : boolean,
    backIconWrapperStyle?: object,
    backIconStyle?: object,
    wrapperStyle?: object, 
    CenterTemplate?: React.ReactElement,
    RightTemplate?: React.ReactElement,
    LeftTemplate?:React.ReactElement 
}

const StackHeader = ({isBack,backIconWrapperStyle,backIconStyle,LeftTemplate,CenterTemplate,RightTemplate,wrapperStyle}:StackHeaderProps) => {
  
  const [canBack , setCanBack] = useState(false)

  useEffect(() => {
  
     const canBack = ()  => {
         if(router.canGoBack()) {
            setCanBack(oldState => true)
         }
      }

      canBack() 

  },[])

  const goBack = () => {
    router.back()
                       }
  return (

    <View style={[styles.headerWrapper,wrapperStyle]}>
       {(isBack && canBack) ? <SquareIconButton icon={leftArrowIcon} wrapperStyle={backIconWrapperStyle} iconStyle={backIconStyle} onClick={goBack} /> : LeftTemplate || <View style={styles.emptyView}></View>}
       {CenterTemplate || <View style={styles.emptyView}></View>}
       {RightTemplate || <View style={styles.emptyView}></View>}
    </View>

  )
}

export default StackHeader

const styles = StyleSheet.create({
    headerWrapper : {
        width :"100%",
        height:64,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        columnGap:Constands.SPACING.sm
    },
    emptyView:{
        width:40,
        height:40,
        backgroundColor:"transparent"
    }
})