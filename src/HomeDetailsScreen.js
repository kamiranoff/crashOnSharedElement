import React, {FC} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {CachedImage} from '@georstat/react-native-image-cache';
import {useNavigation} from '@react-navigation/native';

const HomeDetailsScreen = ({item}) => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <SharedElement id="xmen">
        <CachedImage
          source="https://upload.wikimedia.org/wikipedia/en/3/3b/Magnetodebut.png"
          style={{
            width: 300,
            height: 400,
          }}
          resizeMode="cover"
        />
      </SharedElement>
    </TouchableOpacity>
  );
};

export {HomeDetailsScreen};
