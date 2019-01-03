import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import AddNewQuizScreen from './components/AddNewQuizScreen';
import QuestionScreen from './components/QuestionScreen';
import AddQuestionScreen from './components/AddQuestionScreen';
import QuizScoreScreen from './components/QuizScoreScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Quiz: {
    screen: QuizScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  AddNewQuiz: {
    screen: AddNewQuizScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  AddQuestion: {
    screen: AddQuestionScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Question: {
    screen: QuestionScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  QuizScore: {
    screen: QuizScoreScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
}, {
  headerMode: false,
});

export default createAppContainer(AppNavigator);