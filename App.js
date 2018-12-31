import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import IndividualQuizScreen from './components/IndividualQuizScreen';
import AddNewQuiz from './components/AddNewQuizScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: {
    screen: DetailScreen
  },
  IndividualQuizScreen: IndividualQuizScreen,
  AddNewQuiz: AddNewQuiz,
});

export default createAppContainer(AppNavigator);