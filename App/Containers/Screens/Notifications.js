import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/RootContainerStyles'

export default class NotificationScreen extends React.Component {
  
    render() {
      return (
        <>
        <StatusBar backgroundColor="#c62726" barStyle="light-content"/>
        <Icon.ToolbarAndroid style={styles.toolbar} title="superglobals.net" titleColor="white"
        navIconName="md-menu"
        actions={[
        { title: 'Settings', iconName: 'md-save', iconSize: 30, show: 'always' },
        { title: 'About', iconName: 'md-help', iconSize:30, show: 'never' },
        ]}
        overflowIconName="md-more" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notification screen!</Text>
        </View>
        </>
      );
    }
  }
  