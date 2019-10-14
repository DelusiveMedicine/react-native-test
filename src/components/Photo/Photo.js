import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './Photo.styles';

class Photo extends Component {
  state = {
    width: null,
    height: null,
  };
  componentDidMount() {
    const {urls} = this.props;
    Image.getSize(urls.small, (width, height) => {
      this.setState({width: width, height: height});
    });
  }
  render() {
    const {urls, navigate} = this.props;
    const {container} = styles;
    return (
      <View style={container}>
        <Image
          style={this.state}
          source={{uri: urls.small}}
          onTouchEnd={() => navigate('FullPhoto', {img: urls.full})}
        />
      </View>
    );
  }
}

export default Photo;
