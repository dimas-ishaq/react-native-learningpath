// [TEFA] src/components/MyButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export const MyButton = ({ title, onPress, type = 'primary', style }) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'secondary': return styles.btnSecondary;
      case 'danger': return styles.btnDanger;
      case 'outline': return styles.btnOutline;
      default: return styles.btnPrimary;
    }
  };

  const getTextStyle = () => {
    return type === 'outline' ? styles.textOutline : styles.textWhite;
  };

  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={[styles.btnBase, getButtonStyle(), style]} 
      onPress={onPress}
    >
      <Text style={[styles.textBase, getTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnBase: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  btnPrimary: { backgroundColor: COLORS.primary },
  btnSecondary: { backgroundColor: COLORS.secondary },
  btnDanger: { backgroundColor: COLORS.danger },
  btnOutline: { 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    borderColor: COLORS.primary 
  },
  textBase: { fontWeight: '600', fontSize: 16 },
  textWhite: { color: COLORS.white },
  textOutline: { color: COLORS.primary },
});
