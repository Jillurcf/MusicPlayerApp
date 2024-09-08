import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/color';
import {fontFamilies} from '../constants/fonts';
import {fontSizes, spacing} from '../constants/dimensions';
import {Slider} from 'react-native-awesome-slider';
import {useSharedValue} from 'react-native-reanimated';

const PlayerProgressBar = () => {
  const progress = useSharedValue(0.25);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>00:50</Text>
        <Text style={styles.timeText}>{'-'}04:00</Text>
      </View>
      <Slider
        style={styles. sliderContainer}
        containerStyle={{
          height: 7,
          borderRadius: spacing.sm,
        }}
        theme={{
        //   disableMinTrackTintColor: '#fff',
          maximumTrackTintColor: colors.maximumTintcolor,
          minimumTrackTintColor: colors.minimumTintcolor,
        //   cacheTrackTintColor: '#333',
        //   bubbleBackgroundColor: '#666',
        //   heartbeatColor: '#999',
        }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={18}
        renderBubble={() => null}
      />
    </View>
  );
};

export default PlayerProgressBar;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.md,
    opacity: 0.75,
  },
  sliderContainer: {
    marginVertical: spacing.xl,
  }
});
