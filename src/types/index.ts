import {ROUTES} from '../constants/routes';

export type RootStackParamList = {
  [ROUTES.ON_BOARDING_STACK]: undefined;
  [ROUTES.MAIN]: undefined;
  [ROUTES.VOICE_BOT]: undefined;
  [ROUTES.SETTINGS_STACK]: undefined; // Add settings stack to RootStack
};

export type OnBoardingStackParamList = {
  [ROUTES.SPLASH]: undefined;
  [ROUTES.WELCOME]: undefined;
  [ROUTES.ENTER_COMPANY_ID]: undefined;
  [ROUTES.PICK_VOICE]: undefined;
  [ROUTES.MAIN]: undefined;
};

export type VoicebotParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.VOICE_BOT]: undefined;
};

export type SettingsStackParamList = {
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.SET_COMPANY_ID]: undefined;
  [ROUTES.ENTER_COMPANY_ID]: undefined;
  [ROUTES.PICK_VOICE]: undefined;
};
