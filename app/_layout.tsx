
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
    
  const inVisibleHeader = {headerShown:false} 
    
  return (
     
    <Stack>
       <Stack.Screen name='index' options={inVisibleHeader} />  
    </Stack>
     
  )
}

export default AppLayout