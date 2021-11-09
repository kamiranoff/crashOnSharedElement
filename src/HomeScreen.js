import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CachedImage} from '@georstat/react-native-image-cache';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('ItemDetailsScreen')}>
        <SharedElement id="xmen">
          <CachedImage
            source="https://upload.wikimedia.org/wikipedia/en/3/3b/Magnetodebut.png"
            style={{
              width: 200,
              height: 300,
            }}
            resizeMode="cover"
          />
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {HomeScreen};
