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

const saveDummyDecks = async () => {
    return await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(DUMMY_DATA));
}

// return all of the decks along with their titles, questions, and answers.
export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(res => {
      if (res !== null) {
        // console.log(JSON.parse(res));
        return JSON.parse(res);
      } else {
        saveDummyDecks();
        return DUMMY_DATA;
      }
    });
}

// take in a single id argument and return the deck associated with that id
export const getDeck = (id) => {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then(res => {
    if (res !== null) {
        let parsed = JSON.parse(res);
        return parsed[id];
      }
    });
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
};

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {
  AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results);
      decks[title].questions.push(card);
      console.log(decks[title])
      console.log(decks[title].questions)
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
    })
};