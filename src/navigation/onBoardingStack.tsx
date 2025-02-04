import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/splash';
import {ROUTES} from '../constants/routes';
import Welcome from '../screens/welcome';
import EnterCompanyId from '../screens/enterCompanyId';
import PickVoice from '../screens/pickVoice';
import {OnBoardingStackParamList} from '../types';
import {COLORS} from '../styles/colors';

const OnBoardingStackScreens =
  createNativeStackNavigator<OnBoardingStackParamList>();

const OnBoardingStack = () => {
  return (
    <OnBoardingStackScreens.Navigator initialRouteName={ROUTES.SPLASH}>
      <OnBoardingStackScreens.Screen
        name={ROUTES.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />

      <OnBoardingStackScreens.Screen
        name={ROUTES.WELCOME}
        component={Welcome}
        options={{headerShown: false}}
      />

      <OnBoardingStackScreens.Screen
        name={ROUTES.ENTER_COMPANY_ID}
        component={EnterCompanyId}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: COLORS.dark_gray,
        }}
      />

      <OnBoardingStackScreens.Screen
        name={ROUTES.PICK_VOICE}
        component={PickVoice}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: COLORS.dark_gray,
        }}
      />
    </OnBoardingStackScreens.Navigator>
  );
};

export default OnBoardingStack;
