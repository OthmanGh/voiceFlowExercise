import {ROUTES} from '../constants/routes';

export type RootStackParamList = {
  [ROUTES.ON_BOARDING_STACK]: undefined;
  [ROUTES.SETTINGS_STACK]: undefined;
  [ROUTES.MAIN_STACK]: undefined;
};

//******************/

export type OnBoardingStackParamList = {
  [ROUTES.WELCOME]: undefined;
  [ROUTES.ENTER_COMPANY_ID]: undefined;
  [ROUTES.PICK_VOICE]: undefined;
  [ROUTES.MAIN_STACK]: undefined;
};

export type MainStackParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.VOICE_BOT]: undefined;
};

export type SettingsStackParamList = {
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.SET_COMPANY_ID]: undefined;
  [ROUTES.ENTER_COMPANY_ID]: undefined;
  [ROUTES.PICK_VOICE]: undefined;
};
