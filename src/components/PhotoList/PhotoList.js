import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../../AC';
import {View, FlatList, StatusBar} from 'react-native';
import Loading from '../Loading';
import {transformFirstLetter} from '../helpers';
import User from '../User/User';
import Photo from '../Photo/Photo';

class PhotoList extends Component {
  componentDidMount() {
    const {fetchPhotos} = this.props;
    fetchPhotos();
  }
  render() {
    const {photos, navigation} = this.props;
    const {navigate} = navigation;
    if (photos.loading) return <Loading />;
    const {data} = photos;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={data}
          renderItem={({item}) => {
            const {user, urls} = item;
            const {first_name, last_name, profile_image} = user;
            const firstName = transformFirstLetter(first_name);
            const lastName = transformFirstLetter(last_name);
            return (
              <View style={{flex: 1}}>
                <User
                  firstName={firstName}
                  lastName={lastName}
                  avatar={profile_image.small}
                />
                <Photo urls={urls} navigate={navigate} />
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </>
    );
  }
}

export default connect(
  state => ({
    photos: state.photos,
  }),
  {fetchPhotos},
)(PhotoList);
