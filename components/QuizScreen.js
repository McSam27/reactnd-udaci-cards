import React from "react";
import { View, Text, Button } from "react-native";
import PageHeader from "./PageHeader";

class QuizScreen extends React.Component {
  render() {
    return (
      <View>
        <PageHeader>Details Screen</PageHeader>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
                    onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default QuizScreen;