import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RkCard, RkTheme } from "react-native-ui-kitten";

export default function DeckCard() {
  return (
    <RkCard rkType="shadowed">
      <View rkCardHeader>
        <Text style={styles.cardHeader}>Quiz Deck Name</Text>
      </View>
      <View rkCardContent>
        <Text>2 questions</Text>
      </View>
    </RkCard>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
      color: RkTheme.current.colors.text.base,
  },
});
