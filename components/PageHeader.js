import React from "react";
import { StyleSheet } from "react-native";
import { RkText } from "react-native-ui-kitten";

export default function DeckCard({ children }) {
  return (
    <RkText rkType="primary hero" style={styles.text}>
        {children}
    </RkText>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  }
});
