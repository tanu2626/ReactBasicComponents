import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// FUNCTIONAL COMPONENT
// that is they are functions that returns some amount of JSX to be displayed on the device

// const AlbumList = () => {
//   return (
//     <View>
//       <Text>Album List!!!!</Text>
//     </View>
//   );
// };
//
// export default AlbumList;

// Refactor it to class based ES6 class ( Class based Component)

class AlbumList extends Component {
  // defining state
 // inside the component, we have empty list of albums

// *********  Step no 1 for state
 state = { albums: [] };

  // This method will automatically called this
  // It (componentWillMount) is a lifecycle method
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // it's asynchronous, we have no idea how much time it will take
      // It's a PROMISE
      // .then called when http request is

  // ******** step no 2 for state
      // setState is a function of class based component
       .then(response => this.setState({ albums: response.data }));
  }

// helper method
 //map is a array helper, we pass in a fat arrow function

 renderAlbums() {
   return this.state.albums.map(album =>
    //  <Text key={album.title}>{album.title}</Text>
    //we don;t want text anuone so we will use
    <AlbumDetail key={album.title} album={album} /> //name of prop is not mandatory to be same
    );
 }

  // we have to define render method
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
