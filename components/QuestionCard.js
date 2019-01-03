import React from "react";
import {
  View,
  Animated,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RkButton, RkCard } from "react-native-ui-kitten";

class AddNewQuizScreen extends React.Component {
  state = {
    showQuestion: true,
  };

  flipCard() {
    this.setState(prevState => ({showQuestion: !prevState.showQuestion}));
  }

  render() {
    const {
      currentQuestion,
      totalQuestions,
      questionText,
      answerText
    } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <View rkCardHeader style={styles.centeredText}>
            <Text>Question {currentQuestion.toString()} of {totalQuestions.toString()}</Text>
          </View>
          <RkCard style={styles.cardRoot}>
          {
            this.state.showQuestion
            ?
              <View
                rkCardContent
                style={[styles.card]}
              >
                <Text style={styles.contentHeaders}>
                  Question:
                </Text>
                <Text style={styles.cardText}>
                  {questionText}
                </Text>
              </View>
            :
              <View
                rkCardContent
                style={styles.card}
              >
                <Text style={styles.contentHeaders}>
                  Answer:
                </Text>
                <Text style={styles.cardText}>
                  {answerText}
                </Text>
              </View>
          }
            <View style={styles.btnContainer}>
            {
              this.state.showQuestion
              ? (
                <RkButton rkType="outline-warning" onPress={() => this.flipCard()}>
                  Show answer
                </RkButton>
              )
              :
              (
                <RkButton rkType="outline" onPress={() => this.flipCard()}>
                  Show question
                </RkButton>
              )
            }
            </View>
          </RkCard>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  contentHeaders: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  centeredText: {
    textAlign: 'center',
    alignItems: "center",
    marginBottom: 4,
  },
  cardRoot: {
    width: '100%',
  },
  card: {
    justifyContent: "center",
    height: 300,
  },
  cardText: {
    fontSize: 16,
  },
});

export default AddNewQuizScreen;
