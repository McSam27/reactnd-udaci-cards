import React from "react";
import { View, Text, Button } from "react-native";
import { RkButton } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";

class IndividualQuizScreen extends React.Component {
  render() {
    return (
      <View>
        <PageHeader>Details Screen</PageHeader>
        <RkButton
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <RkButton>
            Submit
        </RkButton>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default IndividualQuizScreen;