import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class SigninScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenu ! </Text>

            <Text>Quel est votre e-mail ? </Text>
            <TextInput 
                style={{borderColor: 'red', borderWidth: 5}} 
                placeholder="nom@example.com"
                />

            <Text>Créer votre mot de passe </Text>
            <TextInput 
                style={{borderColor: 'red', borderWidth: 5}} 
                secureTextEntry='true' 
                placeholder="6 caractères minimum"
                />

            <Button
            title="Se connecter"
            color="#841584"
            />
        </View>
      )
    }
  }