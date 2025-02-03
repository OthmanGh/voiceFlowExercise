import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import NavigateButton from '../components/NavigateButton';
import {ROUTES} from '../constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnBoardingStackParamList} from '../types';

type WelcomeScreenProps = NativeStackScreenProps<
  OnBoardingStackParamList,
  'welcome'
>;

const Welcome = ({navigation}: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
      <NavigateButton
        label="Get Started"
        onPress={() => {
          navigation.push(ROUTES.ENTER_COMPANY_ID);
        }}
      />
    </View>
  );
};
export default Welcome;
