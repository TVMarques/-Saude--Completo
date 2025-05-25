import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type Props = {
  onPress: () => void;
  imageSource: ImageSourcePropType;
  estiloImagem?: object;
};

export default function BotaoImagemComponent({ onPress, imageSource, estiloImagem }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={[styles.imageButton, estiloImagem]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});