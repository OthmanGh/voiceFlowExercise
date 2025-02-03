import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import NavigateButton from '../components/NavigateButton';
import {VoicebotParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type VoiceBotScreenProps = NativeStackScreenProps<
  VoicebotParamList,
  'voicebot'
>;

const VoiceBot = ({navigation}: VoiceBotScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voice Bot Screen</Text>
      <NavigateButton label="Dismiss" onPress={() => navigation.pop()} />
    </View>
  );
};
export default VoiceBot;
