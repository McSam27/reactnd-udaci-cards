import React from "react";
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from "react-native";
import { RkButton, RkTextInput, RkText, } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";

class AddNewQuizScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <PageHeader>New Quiz</PageHeader>
        <View style={{flex: 1, marginTop: 24}}>
          <Text style={styles.text}>
            What would you like to call your new quiz?
          </Text>
          <KeyboardAvoidingView>
            <RkTextInput placeholder="New quiz name" style={styles.input} />
          </KeyboardAvoidingView>
        </View>
        <View style={{marginBottom: 24}}>
          <RkButton rkType="stretch" style={styles.button} >
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