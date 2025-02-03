import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../styles/colors';

interface NavigateButtonProps {
  label: string;
  onPress: () => void;
}

const NavigateButton = ({label, onPress}: NavigateButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navigateBtn}>
      <Text style={styles.navigateBtnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default NavigateButton;

const styles = StyleSheet.create({
  navigateBtn: {
    marginVertical: 20,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },

  navigateBtnText: {
    fontSize: 18,
    color: COLORS.light_gray,
    fontWeight: '500',
    textAlign: 'center',
  },
});
