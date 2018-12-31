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
import { getDecks, saveDeckTitle, clearData, getDeck } from '../utils/api';

class HomeScreen extends React.Component {

  componentDidMount = () => {
    // clearData();
  }


  render() {

    getDecks();
    getDeck("Test");

    RkTheme.setType("RkText", "hero", {
      fontSize: 32,
    });
    RkTheme.setType("RkButton", "outline-warning", {
      borderColor: "#feb401",
      borderWidth: 1,
      color: "#feb401",
      backgroundColor: "#ffffff",
    });

    return (
      <View style={styles.container}>
        <PageHeader>FlashQuiz</PageHeader>
        <View style={styles.grid}>
          <DeckCard
            title={"Quiz One"}
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
    margin: 24,
  },
});

export default HomeScreen;
