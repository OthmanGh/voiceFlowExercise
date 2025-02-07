import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import NavigateButton from '../components/NavigateButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types';

type VoiceBotScreenProps = NativeStackScreenProps<MainStackParamList>;

const VoiceBot = ({navigation}: VoiceBotScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voice Bot Screen</Text>
      <NavigateButton label="Dismiss" onPress={() => navigation.pop()} />
    </View>
  );
};
export default VoiceBot;
