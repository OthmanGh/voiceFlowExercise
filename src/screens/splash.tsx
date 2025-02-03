import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Mic} from '../constants/images';
import {ROUTES} from '../constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnBoardingStackParamList} from '../types';

type SplashScreenProps = NativeStackScreenProps<
  OnBoardingStackParamList,
  'splash'
>;

const Splash = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(ROUTES.WELCOME);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.container, styles.splashContainer]}>
      <Image source={Mic} style={styles.image} />
      <View>
        <Text style={styles.logoText}>
          <Text style={styles.voiceText}>Voice</Text>
          <Text style={styles.flowText}>Flow</Text>
        </Text>

        <Text style={styles.descriptionText}>
          Elevating Your Voice Experience with Advanced AI (dummy text)
        </Text>
      </View>

      <Text style={styles.screenText}>(Splash Screen)</Text>
    </SafeAreaView>
  );
};

export default Splash;
