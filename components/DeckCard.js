import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RkCard } from "react-native-ui-kitten";

export default function DeckCard({ title, totalQuestions, ...rest }) {
  return (
    <TouchableOpacity>
      <RkCard rkType="shadowed" style={styles.cardRoot} {...rest}>
        <View rkCardHeader>
          <Text style={styles.cardHeader}>{title}</Text>
        </View>
        <View rkCardContent>
          <Text style={styles.cardContent}>
            {totalQuestions.toString()} question(s)
          </Text>
        </View>
      </RkCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardRoot: {
    maxWidth: 150,
    margin: 4,
  },
  cardHeader: {
    fontSize: 16,
  },
  cardContent: {
    fontSize: 12,
    color: "#969696",
  },
});
