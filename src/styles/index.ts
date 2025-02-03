import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light_gray,
    position: 'relative',
  },

  screenText: {
    position: 'absolute',
    fontWeight: '500',
    color: COLORS.light_gray,
    bottom: 30,
    fontSize: 20,
  },

  splashContainer: {
    backgroundColor: COLORS.primary,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },

  logoText: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: 10,
    textAlign: 'center',
  },

  voiceText: {
    color: COLORS.dark,
  },

  descriptionText: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.primary_extra_light,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: '80%',
  },

  flowText: {
    color: COLORS.white,
  },

  text: {
    fontSize: 24,
    fontWeight: '700',
  },

  settingsImg: {
    width: 30,
    height: 30,
  },

  imageBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  settingsContentContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
});
