import React from "react";
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { RkButton, RkCard } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";

class AddNewQuizScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <PageHeader>Question</PageHeader>
        <View style={styles.questionContainer}>
          <RkCard rkType="shadowed">
            <View rkCardHeader>
              <Text>Question 2 of 5</Text>
            </View>
            <View rkCardContent>
              <Text>Some question text</Text>
            </View>
            <View rkCardFooter>
              <RkButton rkType="outline-warning">Show answer</RkButton>
            </View>
          </RkCard>
        </View>
        <View style={{ marginBottom: 24 }}>
          <RkButton rkType="success stretch" style={styles.button}>
            Correct
          </RkButton>
          <RkButton
            rkType="danger stretch"
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}
          >
            Incorrect
          </RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    margin: 16,
    justifyContent: "center",
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
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