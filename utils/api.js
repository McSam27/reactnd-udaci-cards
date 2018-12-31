import { AsyncStorage } from "react-native";

export const clearData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(error);
    }
}

// return all of the decks along with their titles, questions, and answers.
export const getDecks = async () => {
  try {
    const i = await AsyncStorage.getAllKeys();
    console.log(i);
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};

// take in a single id argument and return the deck associated with that id
export const getDeck = async (id) => {
  try {
    const value = await AsyncStorage.getItem(id);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

// take in a single id argument and return the deck associated with that id
export const saveDeckTitle = async (id) => {
  try {
    let deckObject = {
        title: id,
    };

    await AsyncStorage.setItem(id, JSON.stringify(deckObject));

  } catch (error) {
    // Error saving data
    console.log(error);
  }
};

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {};

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
