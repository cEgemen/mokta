import { Linking, StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import { BasePageWrapper, SquareIconButton, StackHeader, StepCounter } from '../../components'
import * as Constands from "../../consts"
import { youtubeIcon } from '../../assets'
import { MOCHA_APP_DATA } from '../../consts'

const Cook = () => {
  
  const [currentStep,setCurrentStep] = useState(0)

  const handleWatchVideo = async () => {
      const query = encodeURIComponent(MOCHA_APP_DATA.recipe.name)
      const appUrl = `vnd.youtube://results?search_query=${query}`;
      const webUrl = `https://www.youtube.com/results?search_query=${query}`;

      const canOpenApp = await Linking.canOpenURL(appUrl)

      if(canOpenApp)
      {
         await Linking.openURL(appUrl)
      }
      else
      {
         await Linking.openURL(webUrl)
      }
  }

  const handleCurrentIndex = (index : number) => {
        setCurrentStep(oldState => index)
  }

  return (
    <BasePageWrapper >
     <>
         <StackHeader
            isBack={true}
            wrapperStyle={styles.headerWrapper}
            RightTemplate={
              <SquareIconButton
                onClick={handleWatchVideo}
                icon={youtubeIcon}
              />
            }
            CenterTemplate={<Text style={Constands.TYPOGRAPHY.heading}>Step {MOCHA_APP_DATA.recipe.steps[currentStep].step}/{MOCHA_APP_DATA.recipe.steps.length}</Text>}
          />
          <View style={styles.contentWrapper}>
             <Text style={[Constands.TYPOGRAPHY.contentTitle,{textAlign:"center"}]}>{MOCHA_APP_DATA.recipe.steps[currentStep].title}</Text>
             <Text style={[Constands.TYPOGRAPHY.contentText,{textAlign:"center"}]}>
             "{MOCHA_APP_DATA.recipe.steps[currentStep].description}"
          </Text> 
          </View>
          <View style={{flex:1}}>
            <View style={{marginVertical:"auto",paddingHorizontal:Constands.SPACING.md}}>
                <StepCounter currentIndex={currentStep} stepSize={MOCHA_APP_DATA.recipe.steps.length} cookTime={MOCHA_APP_DATA.recipe.steps[currentStep].time} setCurrentIndex={(index) => handleCurrentIndex(index) } />
            </View>
          </View>
     </>
    </BasePageWrapper>
  )
}

export default Cook

const styles = StyleSheet.create({

   headerWrapper :   {paddingHorizontal: Constands.SPACING.md},
   contentWrapper :  {marginTop:Constands.SPACING['3xl'],paddingHorizontal:Constands.SPACING['3xl'],rowGap:Constands.SPACING.md}

})