import React from 'react';
import { Text, View, Image, Button, 
         Alert, StyleSheet, AppRegistry, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class ProductScreen extends React.Component {
    render() {
      const { width, height } = Dimensions.get('window');
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const imageUrl = navigation.getParam('imageUrl', 'default-url-no-image-avatar')

      return (
        <HeaderImageScrollView
 
        headerImage={{ url:'http://placeimg.com/640/480/any'}}

        maxHeight={200}
        minHeight={20}
      >
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log("text hidden")}>

            <Text stye={{ fontWeight: 'bold' }}>Product A1 </Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>detail de produit </Text>
            <Button 
              onPress={ () => { Alert.alert('Facebook auth')} }
              title='Vendre un article similaire'
              color='#21007F'
            />
              <View style={circleStyle.CircleShapeView}>
              </View>
              
          </TriggeringView>
        </View>
      </HeaderImageScrollView>
      )
    }
  }



  const circleStyle = StyleSheet.create({
     
    CircleShapeView: {
      width: 150,
      height: 150,
      borderRadius: 150/2,
      backgroundColor: '#00BCD4'
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    }
  });

/* 
        <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <Image
            style={{ width: width, height: height}}
            resizeMode={'contain'}
            source={{ uri: imageUrl }}
          />
          <Text stye={{ fontWeight: 'bold' }}>Product A1 </Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>detail de produit </Text>
          <Button 
            onPress={ () => { Alert.alert('Facebook auth')} }
            title='Vendre un article similaire'
            color='#21007F'
          />
            <View style={circleStyle.CircleShapeView}>
            </View>
 

        </View>
        </ScrollView>

        */