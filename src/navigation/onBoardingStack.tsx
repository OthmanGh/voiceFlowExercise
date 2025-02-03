import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/splash';
import {ROUTES} from '../constants/routes';
import Welcome from '../screens/welcome';
import EnterCompanyId from '../screens/enterCompanyId';
import PickVoice from '../screens/pickVoice';
import {OnBoardingStackParamList} from '../types';

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();

const onBoardingStack = () => {
  return (
    <OnBoardingStack.Navigator initialRouteName={ROUTES.SPLASH}>
      <OnBoardingStack.Screen
        name={ROUTES.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />

      <OnBoardingStack.Screen name={ROUTES.WELCOME} component={Welcome} />

      <OnBoardingStack.Screen
        name={ROUTES.ENTER_COMPANY_ID}
        component={EnterCompanyId}
      />

      <OnBoardingStack.Screen name={ROUTES.PICK_VOICE} component={PickVoice} />
    </OnBoardingStack.Navigator>
  );
};
export default onBoardingStack;
