import React from "react";
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { RkButton, RkCard, RkText } from "react-native-ui-kitten";
import PageHeader from "./PageHeader";
import QuestionCard from "./QuestionCard";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    const quiz = this.props.navigation.getParam("quiz");
    const totalQuestions = quiz.questions.length;
    this.state = {
      score: 0,
      totalQuestions,
      currentQuestion: 0,
    };
  }

  handleNext = (incrementScore = 0) => {
    const { currentQuestion, totalQuestions, score } = this.state;
    // check if it is the last question
    if(currentQuestion + 1 === totalQuestions) {
      const quiz = this.props.navigation.getParam("quiz");
      this.setState(prevState => ({
        score: prevState.score + incrementScore,
      }));
      this.props.navigation.navigate("QuizScore", {
        totalQuestions,
        score: score + incrementScore,
        quiz,
      });
      return;
    }
    this.setState(prevState => ({
      score: prevState.score + incrementScore,
      currentQuestion: prevState.currentQuestion + 1,
    }));
  };

  render() {
    const { currentQuestion, totalQuestions } = this.state;
    const { questions } = this.props.navigation.getParam("quiz");

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <PageHeader>Question</PageHeader>

        <View style={styles.questionContainer}>
          <QuestionCard
            currentQuestion={currentQuestion + 1}
            totalQuestions={totalQuestions}
            questionText={questions[currentQuestion].question}
            answerText={questions[currentQuestion].answer}
          />
        </View>
        <View style={{ marginBottom: 24 }}>
          <RkButton
            rkType="success stretch"
            style={styles.button}
            onPress={() => this.handleNext(1)}
          >
            Correct
          </RkButton>
          <RkButton
            rkType="danger stretch"
            style={styles.button}
            onPress={() => this.handleNext()}
          >
            Incorrect
          </RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    margin: 16,
    justifyContent: "center",
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    margin: 24,
  },
  button: {
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 8,
  },
});

export default QuestionScreen;
