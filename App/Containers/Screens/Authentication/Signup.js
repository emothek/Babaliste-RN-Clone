import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class SignupScreen extends React.Component {
    state = {
      email:'',
      password:'',
      name:'',
    }

    handleEmailChange = email => {
      this.setState({ email });
    }

    handlePasswordChange = password => {
      this.setState({ password });
    }

    handleNameChange = name => {
      this.setState({ name });
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Créer un compte ! </Text>

            <Text>Quel est votre e-mail ? </Text>
            <TextInput style={{borderColor: 'red', borderWidth: 5}} 
              value={this.state.email}
              onChangeText={this.handleEmailChange}
            />

            <Text>Créer votre mot de passe </Text>
            <TextInput style={{borderColor: 'red', borderWidth: 5}} 
              secureTextEntry='true'
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
            />

            <Text>Ajouter votre nom complet </Text>
            <Text>Vous pouvez le changer à n'importe quel moment! </Text>
            <TextInput style={{borderColor: 'red', borderWidth: 5}}
              value={this.state.name}
              onChangeText={this.handleNameChange}
            />

            <Button
            title="S'inscrire"
            color="#841584"
            />
        </View>
      )
    }
  }