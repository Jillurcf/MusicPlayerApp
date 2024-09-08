import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/color';

import Header from '../../component/Header';
import {fontFamilies} from '../../constants/fonts';
import {fontSizes, spacing} from '../../constants/dimensions';
import SongCard from '../../component/SongCard';
import SongCardWithCategory from '../../component/SongCardWithCategory';
import FloatingPlayer from '../../component/FloatingPlayer';
import { songWithCategory } from '../../data/SongsWithCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList  data={songWithCategory} renderItem={SongCardWithCategory}
      contentContainerStyle={{
        paddingBottom: 400,
      }}
      />
      <FloatingPlayer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    color: colors.textPrimary,
  },

});
