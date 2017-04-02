// Index.ios.js - place code in here for IOS


// import a library to help create a Component

// ES6 is a new syntax

// step 1: Import react and react-native library
import React from 'react';
// import ReactNative from 'react-native';
// Destructuring imports
// not using this : import { Text, AppRegistry } from 'react-native';
import { AppRegistry, View } from 'react-native';
// import header component
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// step 2: create a Component

// component is an object that creates something that produces some amount of Text
// that we can render on a screen of a  mobile device


// A component is a javascript function that returns some kind/amount of JSX
// jsx is a dialect of a javascriot that tells what text or something to render on the screen

// App is a component name

// This says we want to render some text to the device

// Can do like this too:

// const App = () => {
//   return (
//     // here we are using JSX thart behaives like HTML
//     // JSX exists to make our life easier to code
//     <Text> Some Text</Text>
//   );
// };

const App = () => (
  // 'GOTCHA' S
  // imp thing to add AFTER ScrollView
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//step 3: Render it to a device

// Render means take a component and place it on the screen pof the mobile device

// For every React native application, we must need to register atleast one component

// only root component use AppRegistry, other component can use export statements ( export means make other files make use to it)

AppRegistry.registerComponent('albums', () => App);
