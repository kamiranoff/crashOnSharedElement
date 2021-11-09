import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {HomeScreen} from './HomeScreen';
import {HomeDetailsScreen} from './HomeDetailsScreen';
import {TransitionPresets} from '@react-navigation/stack';
// ...
// This Spec makes it so that the animation goes from 1000ms (very slow) to 500ms (acceptable) speed! You can also remove it if you want.
export const iosTransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};
// ...
const SharedElementStack = createSharedElementStackNavigator();
export function HomeSharedElementStackNavigator() {
  return (
    <SharedElementStack.Navigator
      mode="modal"
      screenOptions={{
        useNativeDriver: true,
        // Enable gestures if you want. I disabled them because of my card style interpolator opacity animation
        gestureEnabled: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        transitionSpec: {
          open: iosTransitionSpec,
          close: iosTransitionSpec,
        },
        // Opacity animation, you can also adjust this by playing with transform properties.
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      headerMode="none">
      <SharedElementStack.Screen name="HomeGridScreen" component={HomeScreen} />
      <SharedElementStack.Screen
        name="ItemDetailsScreen"
        component={HomeDetailsScreen}
        sharedElements={() => {
          return [
            {
              id: 'xmen',
            },
          ];
        }}
      />
    </SharedElementStack.Navigator>
  );
}
