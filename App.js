import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Navigation } from './navigation/index.js';

import { PageContext } from './page-context.js';

export default function App() {
  const [auth, set_auth] = useState(3);

  return (
    <PageContext.Provider value={[auth, set_auth]}>
      <StatusBar
        // animated={false}
        // backgroundColor="red"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={true}
        transprent={true}
      />
      <View style={styles.container}>
        <View style={{ height: '100%', width: '100%' }}>
          <Navigation />
        </View>
      </View>
    </PageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


