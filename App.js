import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import IndividualQuizScreen from './components/IndividualQuizScreen';
import AddNewQuiz from './components/AddNewQuizScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  QuizScreen: {
    screen: QuizScreen
  },
  IndividualQuiz: IndividualQuizScreen,
  AddNewQuiz: AddNewQuiz,
});

export default createAppContainer(AppNavigator);