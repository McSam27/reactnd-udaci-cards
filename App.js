import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import DeckCard from "./components/DeckCard";
import PageHeader from "./components/PageHeader";
import { RkButton, RkTheme, } from "react-native-ui-kitten";
import { DarkTheme } from './config/theme';

export default class App extends React.Component {
  render() {
    RkTheme.setType('RkText','hero',{
      fontSize: 32
      });

    // StatusBar.setBarStyle('light-content', true);
    // if (Platform.OS === 'android') {
    //   StatusBar.setBackgroundColor(DarkTheme.colors.screen.base);
    // }
    // RkTheme.setTheme(DarkTheme);

    return (
      <View style={styles.container}>
        <PageHeader>
          FlashQuiz
        </PageHeader>
        <View style={styles.grid}>
          <DeckCard style={styles.quiz} title={"Quiz One"} totalQuestions={5}/>
          <DeckCard style={styles.quiz} title={"Quiz Two"} totalQuestions={5}/>
          <DeckCard style={styles.quiz} title={"Long Quiz Name"} totalQuestions={5}/>
          <DeckCard style={styles.quiz} title={"Quiz jfkdslajfkasdjfk;as"} totalQuestions={5}/>
        </View>
        <RkButton style={styles.btn}>Add New</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 100,
  },
  grid: {
    margin: 10,
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quiz: {
    margin: 8,
  },
  btn: {
    alignSelf:"center",
  }
});
