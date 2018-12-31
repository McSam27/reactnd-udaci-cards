import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RkCard, RkButton } from "react-native-ui-kitten";

export default function DeckCard(props) {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }}>
      <View style={{flex: 2, marginTop: 24, justifyContent: 'center'}}>
        <RkCard rkType="shadowed" style={styles.cardRoot} >
          <View rkCardHeader>
            <Text style={styles.quizCardHeader}>Quiz name</Text>
          </View>
          <View rkCardContent>
            <Text style={styles.quizCardQuestions}>
              # question(s)
            </Text>
          </View>
        </RkCard>
      </View>
      <View style={{flex: 1}}>
        <RkButton
          rkType="success stretch"
          style={styles.button}
          onPress={null}
        >
          Start
        </RkButton>
        <RkButton
            rkType="stretch"
            style={styles.button}
            onPress={null}
          >
          Add new question
        </RkButton>
        <RkButton
            rkType="danger stretch"
            style={styles.button}
            onPress={null}
          >
          Delete
        </RkButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardRoot: {
    margin: 4,
    minWidth: 240,
    minHeight: 160,
    alignSelf: 'center',
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
