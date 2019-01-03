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
import { getDecks, clearData } from '../utils/api';


RkTheme.setType("RkText", "hero", {
  fontSize: 32,
});
RkTheme.setType("RkButton", "outline-warning", {
  borderColor: "#feb401",
  borderWidth: 1,
  color: "#feb401",
  backgroundColor: "#ffffff",
});

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = { decks: {} };
  }

  async componentDidMount () {
    console.log('called');
    let decks = await getDecks();
    this.setState({ decks });
  }

  render() {
    const { decks } = this.state;

    return (
      <View style={styles.container}>
        <PageHeader>FlashQuiz</PageHeader>
        <View style={styles.grid}>
        {
          Object.keys(decks).length === 0
          ? (
            <View style={{alignSelf: 'center',}}>
              <Text style={{fontSize: 14, textAlign: 'center',}}>No card decks to show, go create one!</Text>
            </View>
          )
          : Object.keys(decks).map(deck => {
            const {title, questions} = decks[deck];
            return (
              <DeckCard
                key={`${title}-quiz`}
                title={title}
                totalQuestions={questions.length}
                onPress={() => this.props.navigation.navigate("Quiz", {
                  title: title,
                })}
              />
            )
          })
        }
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
