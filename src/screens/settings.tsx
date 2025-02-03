import React, {useMemo, useCallback} from 'react';
import {View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import type {SettingsStackParamList} from '../types';
import NavigateButton from '../components/NavigateButton';
import {styles} from '../styles';

type SettingsNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  typeof ROUTES.SETTINGS
>;

const Settings = () => {
  const navigation = useNavigation<SettingsNavigationProp>();
  const snapPoints = useMemo(() => ['100%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="none"
        {...props}
      />
    ),
    [],
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose={true}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        onChange={index => {
          if (index === -1) {
            navigation.pop();
          }
        }}>
        <BottomSheetView style={styles.settingsContentContainer}>
          <Text style={styles.settingsTitle}>Settings Screen</Text>

          <View>
            <NavigateButton
              label="Pick Voice"
              onPress={() => navigation.navigate(ROUTES.PICK_VOICE)}
            />

            <NavigateButton
              label="Set Company ID"
              onPress={() => navigation.navigate(ROUTES.SET_COMPANY_ID)}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Settings;
