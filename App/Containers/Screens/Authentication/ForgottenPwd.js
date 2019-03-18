import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class ForgottenPwdScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Mot de passe oublié ? </Text>
            <Text>Entrez votre adresse e-mail pour recevoir le lien de réinitialisation de votre mot de passe.</Text>

            <Text>E-mail </Text>
            <TextInput 
                style={{borderColor: 'red', borderWidth: 5}} 
                placeholder="nom@example.com" />
 
            <Button
            title="Envoyer"
            color="#841584"
            />
        </View>
      )
    }
  }