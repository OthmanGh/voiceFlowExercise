import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import NavigateButton from '../components/NavigateButton';
import {ROUTES} from '../constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnBoardingStackParamList} from '../types';

type PickVoiceScreenProps = NativeStackScreenProps<OnBoardingStackParamList>;

const PickVoice = ({navigation}: PickVoiceScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pick Voice Screen</Text>
      <NavigateButton
        label="Dismiss"
        onPress={() => navigation.navigate(ROUTES.MAIN_STACK)}
      />
    </View>
  );
};

export default PickVoice;
