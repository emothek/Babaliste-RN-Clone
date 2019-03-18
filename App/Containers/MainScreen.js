import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
//import Icon from 'react-native-vector-icons/FontAwesome';

// import different screens
import BrowseProducts from './Screens/BrowseProducts.js';
import NotificationScreen from './Screens/Notifications';
import MessagesScreen from './Screens/Messages';
import ProfileScreen from './Screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';




const MainScreen = createBottomTabNavigator({
  HOME: {
      screen: BrowseProducts,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-home"
                  color={tintColor}
                  size={24}
              />
          )
      })
  },
  
  NOTIFICATION: {
      screen: NotificationScreen,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-notifications"
                  color={tintColor}
                  size={24}
              />
          )
      })
  },
  CAMERA: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
          tabBarIcon: () => (
              <Icon
                  name="md-camera"
                  color="#FFFFFF"
                  size={24}
              />
          ),
          tabBarOnPress: () => { navigation.navigate('CameraRoll') }
      })
  },
  MESSAGES: {
      screen: MessagesScreen,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-chatboxes"
                  color={tintColor}
                  size={24}
              />
          )
      })
  },
  PROFILE: {
      screen: ProfileScreen,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-person"
                  color={tintColor}
                  size={24}
              />
          )
      })
  }
}, {
  tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
          backgroundColor: '#171F33'
      },
      tabStyle: {}
  }
});



 

export default createAppContainer(MainScreen);