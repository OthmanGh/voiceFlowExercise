import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import Settings from '../screens/settings';
import SetCompanyId from '../screens/setCompanyId';
import PickVoice from '../screens/pickVoice';
import EnterCompanyId from '../screens/enterCompanyId';
import {SettingsStackParamList} from '../types';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

const settingsStack = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <SettingsStack.Screen
        name={ROUTES.SET_COMPANY_ID}
        component={SetCompanyId}
      />
      <SettingsStack.Screen
        name={ROUTES.ENTER_COMPANY_ID}
        component={EnterCompanyId}
      />
      <SettingsStack.Screen name={ROUTES.PICK_VOICE} component={PickVoice} />
    </SettingsStack.Navigator>
  );
};

export default settingsStack;
