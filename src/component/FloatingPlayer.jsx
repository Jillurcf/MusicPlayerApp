import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/color';
import {fontSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import {
  GoToForwardButton,
  GoToPreviousButton,
  PlayPauseButton,
} from './playerControls';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import MovingText from './MovingText';
import { useNavigation } from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player';
const imgUrl =
  'https://linkstorage.linkfire.com/medialinks/images/711c0296-c883-4444-9bd4-341dcab24d0b/artwork-440x440.jpg';

const FloatingPlayer = () => {
  const navigation = useNavigation();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);
  const isLoading = useSharedValue(false);  // You can manage loading states
  const duration = 300; // Define the track duration
  const handleOpenPlayerScreen = () =>{
navigation.navigate("PLAYER_SCREEN")
  }
  return (
    <View>
      <View style={{zIndex: 1,}}>
        <Slider
          theme={{
            // disableMinTrackTintColor: '#fff',
            minimumTrackTintColor: colors.minimumTintcolor,
            maximumTrackTintColor: colors.maximumTintcolor,
            // cacheTrackTintColor: '#333',
            // bubbleBackgroundColor: '#666',
            // heartbeatColor: '#999',
          }}
          containerStyle={{
            height: 5,
          }}
        //   renderBubble={() => <View>
        //     <Text>This is bubble</Text>
        //   </View>
        //   }
          // renderBubble={() => <View />}
          renderBubble={() => null}
          onSlidingStart={() => (isSliding.value = true)}
          onValueChange={async (value) => {
            await TrackPlayer.seekTo(value * duration);
          }}
          onSlidingComplete={async (value) => {
            if(!isLoading.value) {
              return;
            }
            isLoading.value = false;
            await TrackPlayer.seekTo(value * duration);
          }}
          // thumbWidth={25}
        //   renderThumb={() => {
        //     <View style={{backgroundColor: 'red', height: 25, width: 25,}}></View>
        //   }}
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
        />
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.85}  onPress={handleOpenPlayerScreen}>
        <Image
          source={{uri: imgUrl}}
          style={styles.coverImg}
          width={300}
          height={300}
        />
        <View style={styles.titleContainer}>
          {/* <Text style={styles.title}>Chaff and Dust and Alan Walker</Text> */}
          <MovingText text={"Chaff and Dust and Alan Walker"} animationThreshold={20} style={styles.title}/>
          <Text style={styles.artist}>Alan Walker</Text>
        </View>
        <View style={styles.playerControlContainer}>
          <GoToPreviousButton />
          <PlayPauseButton />
          <GoToForwardButton />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImg: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    overflow: 'hidden',
    marginLeft: spacing.sm,
    marginRight: spacing.lg,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.medium,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSizes.md,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
