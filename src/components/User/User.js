import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './User.styles';

class User extends Component {
  render() {
    const {firstName, lastName, avatar} = this.props;
    const {container, text, userImage} = styles;

    return (
      <View style={container}>
        <Image style={userImage} source={{uri: avatar}} />
        <Text style={text}>{firstName}</Text>
        <Text style={text}>{lastName}</Text>
      </View>
    );
  }
}

export default User;
