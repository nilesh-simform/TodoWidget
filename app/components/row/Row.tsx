import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RowProps} from './RowTypes';

export const Row = ({children, style = {}}: RowProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
