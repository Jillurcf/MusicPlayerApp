import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './SongCard'
import { fontSizes, spacing } from '../constants/dimensions'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'

const SongCardWithCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Recomended for You</Text>
     <FlatList data={[1,2,3,4, 5]}
      renderItem={SongCard} horizontal={true} ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}}/>} contentContainerStyle={{
        paddingHorizontal: spacing.lg,
     }}/>
    </View>
  )
}

export default SongCardWithCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        color: colors.textPrimary,
      },
    
    headingText: {
        fontSize: fontSizes.lg,
        color: colors.textPrimary,
        fontFamily: fontFamilies.bold,
       paddingVertical: spacing.lg,
       paddingHorizontal: spacing.lg
      }
})