import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { fontSizes, spacing } from '../constants/dimensions'
import TrackPlayer from 'react-native-track-player'
const imgUrl = 
"https://linkstorage.linkfire.com/medialinks/images/374fc4ba-fe39-4bcf-9cf0-74c87c879ed0/artwork-440x440.jpg"

const SongCard = ({item, containerStyle, imageStyle, handlePlay}) => {

    // const handlePlay = async (item) => {
    //     // console.log("item", item);
    //     await TrackPlayer.add(item);
    //     await TrackPlayer.play();
    // }

  return (
    <TouchableOpacity
    onPress={() => handlePlay(item)}
    style={[styles.container, containerStyle]}>
     <Image source={{uri: item.artwork}} style={[styles.coverImg, imageStyle]}/>
     <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
     <Text style={styles.artist}>{item.artist}</Text>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({
    container: {
        width: 270,
        height: 330,
    },
    coverImg: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        textAlign: 'center',
        fontSize: fontSizes.lg,
        paddingVertical: spacing.sm,
    },
    artist: {
        color: colors.textSecondary,
        textAlign: 'center',
        fontSize: fontSizes.md,
        fontFamily: fontFamilies.regular,
    }
})