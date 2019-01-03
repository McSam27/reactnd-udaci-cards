import React from "react";
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from "react-native";
import { RkButton, RkTextInput, } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";
import { clearLocalNotification } from '../utils/notifications'

class AddNewQuizScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await clearLocalNotification();
  }

  render() {
    const { score, totalQuestions, quiz } = this.props.navigation.state.params;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <PageHeader>Score Page</PageHeader>
        <View style={styles.container}>
          <Text style={styles.text}>You got a {score} out of {totalQuestions}.</Text>
        </View>
        <View style={{marginBottom: 24}}>
          <RkButton rkType="stretch" style={styles.button} onPress={() => navigation.replace('Question', { quiz })}>
            Restart Quiz
          </RkButton>
          <RkButton rkType="outline stretch" style={styles.button} onPress={() => navigation.replace('Quiz', { title: quiz.title })} >Go to Deck</RkButton>
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
    fontSize: 24,
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