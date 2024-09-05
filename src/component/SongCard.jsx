import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { fontSizes, spacing } from '../constants/dimensions'
const imgUrl = 
"https://linkstorage.linkfire.com/medialinks/images/374fc4ba-fe39-4bcf-9cf0-74c87c879ed0/artwork-440x440.jpg"
const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
     <Image source={{uri: imgUrl}} style={styles.coverImg}/>
     <Text style={styles.title}>Monstar Go Home</Text>
     <Text style={styles.artist}>Alan Walker</Text>
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