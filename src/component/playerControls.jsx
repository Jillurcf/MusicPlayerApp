import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconSizes} from '../constants/dimensions';
import {colors} from '../constants/color';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';

export const GoToPreviousButton = ({size = iconSizes.xl}) => {
  return (
    <TouchableOpacity activeOpacity={0.85} >
        <MaterialCommunityIcons
      name={'skip-previous'}
      size={size}
      color={colors.iconPrimary}
    />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = ({size = iconSizes.lg}) => {
    const isPlaying = true;
    return (
        <TouchableOpacity activeOpacity={0.85} >
            <FontAwesome6 name={isPlaying ? 'pause' : 'play'} size={size} color={colors.iconPrimary}/>
        </TouchableOpacity>
    )
}


export const GoToForwardButton = ({size = iconSizes.xl}) => {
    return (
      <TouchableOpacity activeOpacity={0.85}>
          <MaterialCommunityIcons
        name={'skip-next'}
        size={size}
        color={colors.iconPrimary}
      />
      </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({});
