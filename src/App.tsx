import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {ROUTES} from './constants/routes';
import {COLORS} from './styles/colors';
import Main from './screens/main';
import VoiceBot from './screens/voicebot';
import {RootStackParamList} from './types';
import SettingsStack from './navigation/settingsStack';
import OnBoardingStack from './navigation/onBoardingStack';
import linking from './linking';
import {Linking} from 'react-native';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef();

const App = () => {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>(
    ROUTES.ON_BOARDING_STACK,
  );

  useEffect(() => {
    const checkInitialLink = async () => {
      const url = await Linking.getInitialURL();
      if (url?.includes('setcompanyid')) {
        setInitialRoute(ROUTES.SETTINGS_STACK);
      }
    };

    checkInitialLink();
  }, []);

  useEffect(() => {
    const handleDeepLink = (event: {url: string}) => {
      if (event.url.includes('setcompanyid')) {
        navigationRef.current?.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: ROUTES.SETTINGS_STACK,
                state: {
                  routes: [
                    {name: ROUTES.SETTINGS},
                    {name: ROUTES.SET_COMPANY_ID},
                  ],
                },
              },
            ],
          }),
        );
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef} linking={linking} fallback={null}>
      <RootStack.Navigator
        screenOptions={{
          statusBarAnimation: 'slide',
          statusBarBackgroundColor: COLORS.primary,
          headerShown: false,
        }}
        initialRouteName={initialRoute}>
        <RootStack.Screen
          name={ROUTES.ON_BOARDING_STACK}
          component={OnBoardingStack}
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

        <RootStack.Screen
          name={ROUTES.SETTINGS_STACK}
          component={SettingsStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
