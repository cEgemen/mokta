import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SquareIconButton from '../../../buttons/SquareIconButton'
import { leftArrowIcon, pauseIcon, playIcon, rightArrowIcon } from '../../../../assets'
import * as Constands from "../../../../consts"

type STEP_COUNTER_PROPS = {
    currentIndex:number,
    stepSize : number,
    cookTime:string,
    setCurrentIndex:(index:number) => void
}

const StepCounter = ({currentIndex,cookTime,stepSize,setCurrentIndex} : STEP_COUNTER_PROPS) => {
  const [isPlay , setIsPlay] = useState(false) 

  const canPrev = currentIndex > 0 && stepSize > 1;
  const canNext = currentIndex < stepSize - 1    

  const handlePrevClick = () => {
      if(currentIndex > 0)
      {
         setCurrentIndex(currentIndex - 1)
      }
  }

  const handleNextClick = () => {
      if(currentIndex < stepSize -1)
      {
         setCurrentIndex(currentIndex + 1)
      }
  }

  const handleStopClik = () => {
      setIsPlay(oldState => !oldState )
  }

  return (
     <View style={{rowGap:Constands.SPACING.lg,alignItems:"center"}}>
       <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          {canPrev ? <SquareIconButton icon={leftArrowIcon} onClick={handlePrevClick} /> : <View></View> }
          <View>
            <Text></Text>
          </View>
          {canNext ? <SquareIconButton icon={rightArrowIcon} onClick={handleNextClick} /> : <View></View>}
       </View>
       <SquareIconButton icon={!isPlay ? playIcon : pauseIcon} onClick={handleStopClik} />
     </View>
  )
}

export default StepCounter

const styles = StyleSheet.create({})