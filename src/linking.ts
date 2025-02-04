import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {ROUTES} from './constants/routes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['voiceflowexercise://', 'https://voiceflowexercise.com'],
  config: {
    screens: {
      [ROUTES.SETTINGS_STACK]: {
        screens: {
          [ROUTES.SET_COMPANY_ID]: 'setcompanyid',
        },
      },
    },
  },
  getInitialURL() {
    return null;
  },
};

export default linking;
