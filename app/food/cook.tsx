import { Linking, StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import { BasePageWrapper, SquareIconButton, StackHeader } from '../../components'
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

  return (
    <BasePageWrapper >
     <>
         <StackHeader
            isBack={true}
            wrapperStyle={styles.headerWrapper}
            backIconWrapperStyle={{ backgroundColor: "lightgrey" }}
            RightTemplate={
              <SquareIconButton
                onClick={handleWatchVideo}
                icon={youtubeIcon}
                wrapperStyle={{ backgroundColor: "lightgrey" }}
              />
            }
          />
          <View style={styles.contentWrapper}>
             <Text style={[Constands.TYPOGRAPHY.contentTitle,{textAlign:"center"}]}>Step {MOCHA_APP_DATA.recipe.steps[currentStep].step}/{MOCHA_APP_DATA.recipe.steps.length}</Text>
             <Text style={[Constands.TYPOGRAPHY.contentText,{textAlign:"center"}]}>
             "{MOCHA_APP_DATA.recipe.steps[currentStep].description}"
          </Text> 
          </View>
        
     </>
    </BasePageWrapper>
  )
}

export default Cook

const styles = StyleSheet.create({

   headerWrapper : { paddingHorizontal: Constands.SPACING.md},
   contentWrapper : {paddingHorizontal:Constands.SPACING['3xl'],rowGap:Constands.SPACING.md}

})