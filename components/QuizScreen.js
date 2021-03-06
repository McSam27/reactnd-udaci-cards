import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RkCard, RkButton } from "react-native-ui-kitten";
import { getDeck, deleteDeck } from "../utils/api";
import PageHeader from "./PageHeader";

export default class DeckCard extends React.Component {
  constructor() {
    super();
    this.state = {
      quiz: {}
    };
  }

  async componentDidMount() {
    const quizTitle = this.props.navigation.getParam("title");
    const quiz = await getDeck(quizTitle);
    this.setState({ quiz });
  }

  async deleteQuiz () {
    const quizTitle = this.props.navigation.getParam("title");
    await deleteDeck(quizTitle);
    this.props.navigation.navigate('Home');
  }

  startQuiz () {
    const { quiz } = this.state;
    quiz.questions == undefined|| quiz.questions.length > 0 && this.props.navigation.replace("Question", {quiz});
  }

  render() {

    const { navigation } = this.props;
    const { quiz } = this.state;
    const title = navigation.getParam("title", "Error in retrieving quiz name");
    const length = quiz.questions !== undefined ? quiz.questions.length.toString() : "0";

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <PageHeader>Quiz Page</PageHeader>

        <View style={{ flex: 1, marginTop: 24, justifyContent: "center" }}>
          <RkCard rkType="shadowed" style={styles.cardRoot}>
            <View rkCardHeader>
              <Text style={styles.quizCardHeader}>{title}</Text>
            </View>
            <View rkCardContent>
              <Text style={styles.quizCardQuestions}>{length} question(s)</Text>
            </View>
          </RkCard>
        </View>
        <View style={{ marginBottom: 16 }}>
          <RkButton
            rkType="success stretch"
            style={styles.button}
            onPress={() => this.startQuiz()}
          >
            Start
          </RkButton>
          <RkButton
            rkType="stretch"
            style={styles.button}
            onPress={() => this.props.navigation.navigate("AddQuestion", {
              title: quiz.title
            })}
          >
            Add new question
          </RkButton>
          <RkButton
            rkType="danger stretch"
            style={styles.button}
            onPress={() => this.deleteQuiz()}
          >
            Delete
          </RkButton>
          <RkButton
            rkType="outline stretch"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}
          >
              Go back
          </RkButton>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardRoot: {
    margin: 4,
    minWidth: 240,
    minHeight: 160,
    alignSelf: "center",
  },
  button: {
    margin: 8,
  },
  quizCardHeader: {
    fontSize: 20,
  },
  quizCardQuestions: {
    fontSize: 12,
    color: "#969696",
  },
});
