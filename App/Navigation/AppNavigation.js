import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import MainScreen from '../Containers/MainScreen'
//import CameraRoll from '../Containers/Screens/CameraRoll'
import ProductScreen from '../Containers/Screens/Product'

// authentication screens (3)
import SigninScreen from '../Containers/Screens/Authentication/Signin';
import SignupScreen from '../Containers/Screens/Authentication/Signup';
import ForgottenPwdScreen from '../Containers/Screens/Authentication/ForgottenPwd';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainScreen: { screen: MainScreen },
  //CameraRoll: { screen: CameraRoll },
  Product: { screen: ProductScreen },
  Signin: { screen: SigninScreen },
  Signup: { screen: SignupScreen },
  ForgottenPwd: { screen: ForgottenPwdScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
