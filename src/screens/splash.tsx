import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Mic} from '../constants/images';

const Splash = () => {
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
