import React from "react";
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from "react-native";
import { RkButton, RkTextInput, } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";
import { saveDeckTitle, getDecks } from '../utils/api';

class AddNewQuizScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <PageHeader>Score Page</PageHeader>
        <View style={{flex: 1, marginTop: 24}}>
          <View>
              <Text>You got a =347982 score.</Text>
          </View>
        </View>
        <View style={{marginBottom: 24}}>
          <RkButton rkType="stretch" style={styles.button} onPress={() => this.handleCreateDeck()}>
            Restart Quiz
          </RkButton>
          <RkButton rkType="outline stretch" style={styles.button} onPress={() => this.props.navigation.goBack()} >Go to Deck</RkButton>
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