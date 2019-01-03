import React from "react";
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from "react-native";
import { RkButton, RkTextInput, RkText, } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";
import { addCardToDeck } from '../utils/api';

class AddQuestionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: '',
    };
  }

  handleText = (name, text) => {
    this.setState({
      [name]: text,
    });
  }

  handleSubmit = (e) => {
    const { question, answer } = this.state;
    if (question.length !== 0 && answer.length !== 0) {
      const title = this.props.navigation.getParam('title');
      const card = {
        question: question.trim(),
        answer: answer.trim(),
      };
      addCardToDeck(title, card)
    }
  }

  render() {
    const title = this.props.navigation.getParam('title');

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <PageHeader>New Question</PageHeader>
        <View style={{flex: 1, marginTop: 24}}>
          <Text style={styles.text}>
            Add a new question for the {title} quiz
          </Text>
          <KeyboardAvoidingView>
            <RkTextInput
              placeholder="Question"
              name="question"
              style={styles.input}
              onChangeText={(text) => this.handleText('question', text)}
            />
            <RkTextInput
              placeholder="Answer"
              name="answer"
              style={styles.input}
              onChangeText={(text) => this.handleText('answer', text)}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={{marginBottom: 24}}>
          <RkButton rkType="stretch" style={styles.button} onPress={() => this.handleSubmit()}>
            Add
          </RkButton>
          <RkButton rkType="outline stretch" style={styles.button} onPress={() => this.props.navigation.goBack()} >Go back</RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    flexWrap: 'wrap',
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

export default AddQuestionScreen;