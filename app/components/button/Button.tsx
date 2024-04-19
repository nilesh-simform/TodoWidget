import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, horizontalScale, verticalScale} from '../../constants';
import {ButtonProp} from './ButtonTypes';

export const Button = ({
  onPress = () => {},
  children,
  style = {},
}: ButtonProp) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    borderRadius: 5,
  },
});
