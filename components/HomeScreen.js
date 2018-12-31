import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar, ScrollView } from "react-native";
import DeckCard from "./DeckCard";
import PageHeader from "./PageHeader";
import { RkButton, RkTheme } from "react-native-ui-kitten";
import { DarkTheme } from "../config/theme";

class HomeScreen extends React.Component {
  render() {
    RkTheme.setType("RkText", "hero", {
      fontSize: 32,
    });
    RkTheme.setType("RkText", "hero", {
      fontSize: 32,
    });

    // StatusBar.setBarStyle('light-content', true);
    // if (Platform.OS === 'android') {
    //   StatusBar.setBackgroundColor(DarkTheme.colors.screen.base);
    // }
    // RkTheme.setTheme(DarkTheme);

    return (
      <View style={styles.container}>
        <PageHeader>FlashQuiz</PageHeader>
        <View style={styles.grid}>
          <DeckCard title={"Quiz One"} totalQuestions={5} />
          <DeckCard title={"Quiz Two"} totalQuestions={5} />
          <DeckCard
            title={"Long Quiz Name"}
            totalQuestions={5}
          />
          <DeckCard
            title={"Introduction to Math with Calculus II"}
            totalQuestions={5}
          />
        </View>

        <RkButton
          rkType="stretch"
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Details")}
        >
          Quiz
        </RkButton>
        <RkButton
          rkType="stretch"
          style={styles.button}
          onPress={() => this.props.navigation.navigate("IndividualQuiz")}
        >
          IndividualQuizScreen
        </RkButton>
        <RkButton
          rkType="stretch"
          style={styles.button}
          onPress={() => this.props.navigation.navigate("AddNewQuiz")}
        >
          AddNewQuiz
        </RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  grid: {
    margin: 4,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    alignSelf: "center",
    margin: 8,
  },
});

export default HomeScreen;
