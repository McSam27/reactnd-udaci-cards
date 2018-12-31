import {
  AsyncStorage
} from "react-native";

const STORAGE_KEY = "@UdaciCardStore:quiz";

const DUMMY_DATA = {
  React: {
    title: 'React',
    questions: [{
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [{
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }]
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};


// return all of the decks along with their titles, questions, and answers.

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(res => {
      if (res !== null) {
        return JSON.parse(res);
      } else {
        return DUMMY_DATA;
      }
    });
}

// take in a single id argument and return the deck associated with that id
export const getDeck = async id => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value !== null) {
      return value[id];
    }
  } catch (error) {
    // Error retrieving data
  }
};

// take in a single id argument and return the deck associated with that id
export const saveDeckTitle = async id => {
  let deckObject = {
    [id]: {
      title: id,
      questions: [],
    }
  };

  await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deckObject));
  getDecks();
};

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {};