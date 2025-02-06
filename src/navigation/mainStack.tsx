import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import React from 'react';
import Main from '../screens/main';
import VoiceBot from '../screens/voicebot';
import {MainStackParamList} from '../types';

const MainStackScreens = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <MainStackScreens.Navigator
      initialRouteName={ROUTES.MAIN}
      screenOptions={{headerShown: false}}>
      <MainStackScreens.Screen
        name={ROUTES.MAIN}
        component={Main}
        options={{}}
      />

      <MainStackScreens.Screen
        name={ROUTES.VOICE_BOT}
        component={VoiceBot}
        options={{
          fullScreenGestureEnabled: true,
          animation: 'slide_from_bottom',
        }}
      />
    </MainStackScreens.Navigator>
  );
};
export default MainStack;
