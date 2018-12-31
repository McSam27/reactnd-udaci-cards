import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import AddNewQuizScreen from './components/AddNewQuizScreen';
import QuestionScreen from './components/QuestionScreen';
import AddQuestionScreen from './components/AddQuestionScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Quiz: QuizScreen,
  AddNewQuiz: AddNewQuizScreen,
  AddQuestion: AddQuestionScreen,
  Question: QuestionScreen,
});

export default createAppContainer(AppNavigator);