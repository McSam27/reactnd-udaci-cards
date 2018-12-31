import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import AddNewQuiz from './components/AddNewQuizScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Quiz: {
    screen: QuizScreen
  },
  AddNewQuiz: AddNewQuiz,
});

export default createAppContainer(AppNavigator);