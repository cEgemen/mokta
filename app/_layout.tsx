
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
    
  const inVisibleHeader = {headerShown:false} 
    
  return (
     
    <Stack>
       <Stack.Screen name='index' options={inVisibleHeader} />  
       <Stack.Screen name='food/detail' options={inVisibleHeader} />
       <Stack.Screen name='food/cook' options={inVisibleHeader} />  
       <Stack.Screen name='food/nutrition' options={inVisibleHeader} />
    </Stack>
     
  )
}

export default AppLayout