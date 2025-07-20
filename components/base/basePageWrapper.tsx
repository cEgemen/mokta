import { StyleSheet, Text, View } from 'react-native'
import React, {ReactNode}from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type BasePageWrapperProps = {
    children?: React.ReactNode ,
    contentStyle?:object
}

const BasePageWrapper = ({children,contentStyle={}}:BasePageWrapperProps) => {
  
  const {bottom,left,top,right} = useSafeAreaInsets()  

  return (
    <View style={{...styles.basePageWrapper,paddingBottom:bottom,paddingRight:right,paddingTop:top,paddingLeft:left}}>
      <View style={{flex:1,...contentStyle}}>
        {children}
      </View>
    </View>
  )
}

export default BasePageWrapper

const styles = StyleSheet.create({

   basePageWrapper : {
      width:"100%",
      height:"100%",
   },
   basePageContentContainer : {
     flex:1,
    }

})