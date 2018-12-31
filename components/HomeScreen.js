import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import DeckCard from "./DeckCard";
import PageHeader from "./PageHeader";
import { RkButton, RkTheme } from "react-native-ui-kitten";
import { DarkTheme } from "../config/theme";

class HomeScreen extends React.Component {
  render() {
    RkTheme.setType("RkText", "hero", {
      fontSize: 32,
    });
    RkTheme.setType("RkButton", "outline-warning", {
      borderColor: "#feb401",
      borderWidth: 1,
      color: "#feb401",
      backgroundColor: "#ffffff",
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
          <DeckCard
            title={"Quiz One"}
            totalQuestions={5}
            onPress={() => this.props.navigation.navigate("Quiz")}
          />
          <DeckCard
            title={"Quiz Two"}
            totalQuestions={5}
            onPress={() => this.props.navigation.navigate("Quiz")}
          />
          <DeckCard
            title={"Long Quiz Name"}
            totalQuestions={5}
            onPress={() => this.props.navigation.navigate("Quiz")}
          />
          <DeckCard
            title={"Introduction to Math with Calculus II"}
            totalQuestions={5}
            onPress={() => this.props.navigation.navigate("Quiz")}
          />
        </View>
        <RkButton
          rkType="info stretch"
          style={styles.newQuizButton}
          onPress={() => this.props.navigation.navigate("AddNewQuiz")}
        >
          Add new quiz
        </RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  grid: {
    margin: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 2,
  },
  newQuizButton: {
    margin: 8,
    marginBottom: 24,
  },
});

export default HomeScreen;
