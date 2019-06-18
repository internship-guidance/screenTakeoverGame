import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';

export default function Button({ onPress, style, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={style}>{title}</Text>
    </TouchableWithoutFeedback>
  );
}