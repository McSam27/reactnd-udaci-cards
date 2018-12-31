import React from "react";
import { View, Text, Button } from "react-native";
import { RkButton } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";

class IndividualQuizScreen extends React.Component {
  render() {
    return (
      <View>
        <PageHeader>AddNewQuizScreen</PageHeader>
        <RkButton
          onPress={() => this.props.navigation.goBack()}
        >Go back</RkButton>
      </View>
    );
  }
}

export default IndividualQuizScreen;