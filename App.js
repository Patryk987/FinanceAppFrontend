import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Navigation } from './navigation/index.js';

import { UserContextProvider } from './context.js';

// Class
import { DataBase } from './class/SQLite.js'

export default function App() {

  const test = async () => {

    const db = new DataBase("FinanceApp9999");
    const usersDB = "create table if not exists user (token TEXT);";
    db.execute(usersDB);

    const insert = "insert into user (token) values (?)";
    const select = "select * from user";
    const data = ["TOKEN"];

    let z = await db.execute(insert, data);
    let x = await db.execute(select);
    console.log(z);
    console.log(x.rows);
  }


  // return (
  //   <>
  //     <TouchableOpacity style={{ width: 200, height: 200, backgroundColor: 'red' }} onPress={() => test()}>

  //     </TouchableOpacity>
  //   </>
  // );

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


