import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PhotoList from './PhotoList/PhotoList';
import FullPhoto from './FullPhoto/FullPhoto';

const MainNavigator = createStackNavigator({
  Gallery: PhotoList,
  FullPhoto: FullPhoto,
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
