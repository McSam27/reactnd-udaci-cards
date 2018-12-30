import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RkCard } from "react-native-ui-kitten";

export default function DeckCard() {
  return (
    <RkCard rkType="shadowed">
      <View rkCardHeader>
        <Text>Quiz Deck Name</Text>
      </View>
      <View rkCardContent>
        <Text>2 questions</Text>
      </View>
    </RkCard>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
