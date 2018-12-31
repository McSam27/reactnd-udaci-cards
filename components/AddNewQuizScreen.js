import React from "react";
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from "react-native";
import { RkButton, RkTextInput, } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";
import { saveDeckTitle, getDecks } from '../utils/api';

class AddNewQuizScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleText = (text) => {
    this.setState({text})
  }

  handleCreateDeck = () => {
    const { text } = this.state;
    if (text.length !== 0) {
      saveDeckTitle(text)
        .then(() => {
          this.props.navigation.navigate('Home');
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PageHeader>New Quiz</PageHeader>
        <View style={{flex: 1, marginTop: 24}}>
          <Text style={styles.text}>
            What would you like to call your new quiz?
          </Text>
          <KeyboardAvoidingView>
            <RkTextInput placeholder="New quiz name" style={styles.input} onChangeText={(text) => this.handleText(text)} />
          </KeyboardAvoidingView>
        </View>
        <View style={{marginBottom: 24}}>
          <RkButton rkType="stretch" style={styles.button} onPress={() => this.handleCreateDeck()}>
            Create Deck
          </RkButton>
          <RkButton rkType="outline stretch" style={styles.button} onPress={() => this.props.navigation.goBack()} >Go back</RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    margin: 24,
  },
  button: {
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 8,
  },
});

export default AddNewQuizScreen;