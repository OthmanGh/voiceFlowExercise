import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from '../styles';
import {settingsImg} from '../constants/images';
import NavigateButton from '../components/NavigateButton';
import {ROUTES} from '../constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'main'>;

const Main = ({navigation}: MainScreenProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageBtn}>
        <Image source={settingsImg} style={styles.settingsImg} />
      </TouchableOpacity>
      <Text style={styles.text}>Main Screen</Text>
      <NavigateButton
        label="Launch Voicebot screen"
        onPress={() => navigation.push(ROUTES.VOICE_BOT)}
      />
    </View>
  );
};

export default Main;
