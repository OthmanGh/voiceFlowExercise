import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import Settings from '../screens/settings';
import SetCompanyId from '../screens/setCompanyId';
import PickVoice from '../screens/pickVoice';
import EnterCompanyId from '../screens/enterCompanyId';
import {SettingsStackParamList} from '../types';
import {COLORS} from '../styles/colors';

const SettingsStackScreens =
  createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <SettingsStackScreens.Navigator initialRouteName={ROUTES.SETTINGS}>
      <SettingsStackScreens.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
          presentation: 'modal',
          gestureDirection: 'vertical',
        }}
      />

      <SettingsStackScreens.Screen
        name={ROUTES.SET_COMPANY_ID}
        component={SetCompanyId}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: COLORS.dark_gray,
        }}
      />

      <SettingsStackScreens.Screen
        name={ROUTES.ENTER_COMPANY_ID}
        component={EnterCompanyId}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: COLORS.dark_gray,
        }}
      />

      <SettingsStackScreens.Screen
        name={ROUTES.PICK_VOICE}
        component={PickVoice}
        options={{
          title: '',
          headerShadowVisible: false,
          headerTintColor: COLORS.dark_gray,
        }}
      />
    </SettingsStackScreens.Navigator>
  );
};

export default SettingsStack;
