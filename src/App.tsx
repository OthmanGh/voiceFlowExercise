import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from './constants/routes';
import onBoardingStack from './navigation/onBoardingStack';
import {COLORS} from './styles/colors';
import Main from './screens/main';
import VoiceBot from './screens/voicebot';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={ROUTES.ON_BOARDING_STACK}
        screenOptions={{
          statusBarAnimation: 'slide',
          statusBarBackgroundColor: COLORS.primary,
          headerShown: false,
        }}>
        <RootStack.Screen
          name={ROUTES.ON_BOARDING_STACK}
          component={onBoardingStack}
        />

        <RootStack.Screen
          name={ROUTES.MAIN}
          component={Main}
          options={{animation: 'fade_from_bottom', gestureEnabled: true}}
        />

        <RootStack.Screen
          name={ROUTES.VOICE_BOT}
          component={VoiceBot}
          options={{
            fullScreenGestureEnabled: true,
            animation: 'slide_from_bottom',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
