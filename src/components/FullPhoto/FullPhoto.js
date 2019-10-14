import React, {Component} from 'react';
import {ScrollView, Image, Dimensions} from 'react-native';

class FullPhoto extends Component {
  state = {
    width: null,
    height: null,
  };
  componentDidMount() {
    const {navigation} = this.props;
    const {state} = navigation;
    const {params} = state;
    const {height} = Dimensions.get('window');
    Image.getSize(params.img, width => {
      this.setState({width: width, height: height});
    });
  }
  render() {
    console.log(this.state);
    const {navigation} = this.props;
    const {state} = navigation;
    const {params} = state;
    return (
      <ScrollView horizontal>
        <Image source={{uri: params.img}} style={this.state} />
      </ScrollView>
    );
  }
}

export default FullPhoto;
