import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './SongCard'
import { fontSizes, spacing } from '../constants/dimensions'
import { colors } from '../constants/color'
import { fontFamilies } from '../constants/fonts'
import { songWithCategory } from './../data/SongsWithCategory';
import TrackPlayer from 'react-native-track-player'

const SongCardWithCategory = ({item}) => {

// create a function that will play a song in queue
const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
  // make a que and play the songWithCategory
  
const trackIndex = songs.findIndex(

  (track) => track.url === selectedTrack.url );
  // if track does not exist
  if(trackIndex ===-1) {
    return;
  }
  const beforeTracks = songs.slice(0, trackIndex );
  const afterTracks = songs.slice(trackIndex + 1);
  console.log("beforeTracks", beforeTracks);
  console.log("afterTracks", afterTracks);
  // what we had done 
  await TrackPlayer.reset();
  await TrackPlayer.add(selectedTrack);
  await TrackPlayer.add(afterTracks);
  await TrackPlayer.add(beforeTracks);

  await TrackPlayer.play();

};

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{item.title}</Text>
     <FlatList data={item.songs}
      renderItem={({item})=> <SongCard item={item} handlePlay = {(selectedTrack)=>{
       handlePlayTrack(selectedTrack, item.songs)
      }}/> } horizontal={true} ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}}/>} contentContainerStyle={{
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