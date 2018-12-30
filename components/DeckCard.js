import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RkCard } from "react-native-ui-kitten";

export default function DeckCard({title, totalQuestions, ...rest}) {
  return (
    <RkCard rkType="shadowed" {...rest}>
      <View rkCardHeader>
        <Text style={styles.cardHeader}>{title}</Text>
      </View>
      <View rkCardContent>
        <Text>{totalQuestions.toString()} question(s)</Text>
      </View>
    </RkCard>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
      fontSize: 18,
  },
  cardContent: {
    color: "#151618",
  },
});
