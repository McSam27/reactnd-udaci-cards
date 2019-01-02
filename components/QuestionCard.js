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
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"],
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }],
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }],
    };

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
            <Animated.View
              rkCardContent
              style={[styles.flipCard, frontAnimatedStyle]}
            >
              <Text style={styles.flipText}>
                Question:
                {"\n"}
                {questionText}
              </Text>
            </Animated.View>
            <Animated.View
              rkCardContent
              style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
            >
              <Text style={styles.flipText}>
                Answer:
                {"\n"}
                {answerText}
              </Text>
            </Animated.View>
          </RkCard>
        </View>
          <View>
            <RkButton rkType="outline-warning" onPress={() => this.flipCard()}>
              Show answer
            </RkButton>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  centeredText: {
    textAlign: 'center',
  },
  cardRoot: {
    width: '100%',

  },
  flipCard: {
    backfaceVisibility: "hidden",
    height: 300,
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
  },
  flipText: {
    fontWeight: "bold",
  },
});

export default AddNewQuizScreen;
