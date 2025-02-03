import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import NavigateButton from '../components/NavigateButton';
import {ROUTES} from '../constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnBoardingStackParamList} from '../types';

type EnterCompanyIdScreenProps = NativeStackScreenProps<
  OnBoardingStackParamList,
  'entercompanyid'
>;

const EnterCompanyId = ({navigation}: EnterCompanyIdScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Company Id Screen</Text>
      <NavigateButton
        label="Continue"
        onPress={() => navigation.push(ROUTES.PICK_VOICE)}
      />
    </View>
  );
};
export default EnterCompanyId;
