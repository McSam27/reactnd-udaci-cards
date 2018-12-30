import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import DeckCard from "./components/DeckCard";
import { RkButton, RkTheme } from "react-native-ui-kitten";
import { DarkTheme } from './config/theme';

export default class App extends React.Component {
  render() {

    // StatusBar.setBarStyle('light-content', true);
    // if (Platform.OS === 'android') {
    //   StatusBar.setBackgroundColor(DarkTheme.colors.screen.base);
    // }
    // RkTheme.setTheme(DarkTheme);

    return (
      <View style={styles.container}>
        <DeckCard />
        <RkButton rk>Click me</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
