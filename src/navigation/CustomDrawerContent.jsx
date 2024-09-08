import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../constants/color';
import {fontSizes, spacing} from '../constants/dimensions';
import {iconSizes} from './../constants/dimensions';

// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontFamilies} from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = props => {
    const navigation = useNavigation();
  const isDarkMode = true;
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerItemContainer}>
        <TouchableOpacity>
          <AntDesign
            name={'close'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name={isDarkMode ? 'sun' : 'moon'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
      </View>
      {/* menu item container */}
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label={'Profile'}
          icon={() => (
            <FontAwesome
              name={'user'}
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Liked Item'}
          icon={() => (
            <AntDesign
              name={'hearto'}
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate("LIKE_SCREEN")}
        />
        <DrawerItem
          label={'Language'}
          icon={() => (
            <FontAwesome
              name={'language'}
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate("LIKE_SCREEN")}
        />
        <DrawerItem
          label={'Contact Us'}
          icon={() => (
            <FontAwesome
              name={'envelope-o'}
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate("LIKE_SCREEN")}
        />
        <DrawerItem
          label={"FAQ"}
          icon={() => (
            <FontAwesome
              name={'question-circle-o'}
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate("LIKE_SCREEN")}
        />
        <DrawerItem
          label={"Settings"}
          icon={() => (
            <FontAwesome
              name={'cog'}
              size={iconSizes.md}
              color={colors.iconPrimary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate("LIKE_SCREEN")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  headerItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerItemContainer: {
    marginVertical: spacing.xl,
  },
  labelStyle: {
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
  },
  drawerItem: {
    marginVertical: spacing.sm,
  },
});
