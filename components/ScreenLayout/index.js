import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenLayout = ({
  children,
  backgroundImage,
  title = 'MyTender',
  noCenter = false,
}) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={title} />
      </Appbar.Header>

      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.background}
          blurRadius={5}
        >
          <View style={styles.overlay} />
          <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
        </ImageBackground>
      ) : (
        <>
          {noCenter ? (
            children
          ) : (
            <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 32,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
  },
});

export default ScreenLayout;
