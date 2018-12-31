import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import AddNewQuizScreen from './components/AddNewQuizScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Quiz: {
    screen: QuizScreen
  },
  AddNewQuiz: AddNewQuizScreen,
});

export default createAppContainer(AppNavigator);