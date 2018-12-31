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

    return (
      <RkCard rkType="shadowed" style={styles.container}>
        <View>
          <View rkCardHeader>
            <Text>Question 2 of 5</Text>
          </View>
          <RkCard rkType="shadowed">
            <Animated.View
              rkCardContent
              style={[styles.flipCard, frontAnimatedStyle]}
            >
              <Text style={styles.flipText}>
                Question:
                {"\n"}
                question text here
              </Text>
            </Animated.View>
            <Animated.View
              rkCardContent
              style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
            >
              <Text style={styles.flipText}>
                Answer:
                {"\n"}
                answer text here
              </Text>
            </Animated.View>
          </RkCard>
          <View rkCardFooter>
            <RkButton rkType="outline-warning" onPress={() => this.flipCard()}>
              Show answer
            </RkButton>
          </View>
        </View>
      </RkCard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    // alignItems: "center",
    // justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
  },
  flipText: {
    // fontSize: 20,
    fontWeight: "bold",
  },
});

export default AddNewQuizScreen;
