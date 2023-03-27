import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Navigation } from './navigation/index.js';

import { UserContextProvider } from './context.js';

export default function App() {

  return (
    <UserContextProvider>
      <StatusBar
        hidden={false}
        transprent={true}
      />
      <View style={styles.container}>
        <View style={{ height: '100%', width: '100%' }}>
          <Navigation />
        </View>
      </View>
    </UserContextProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


