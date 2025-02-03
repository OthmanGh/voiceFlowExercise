import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import NavigateButton from '../components/NavigateButton';
import {ROUTES} from '../constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SettingsStackParamList} from '../types';

type SetCompanyIdScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  'setcompanyid'
>;

const SetCompanyId = ({navigation}: SetCompanyIdScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Set Company Id Screen</Text>
      <NavigateButton
        label="Continue"
        onPress={() => navigation.push(ROUTES.ENTER_COMPANY_ID)}
      />
    </View>
  );
};
export default SetCompanyId;
