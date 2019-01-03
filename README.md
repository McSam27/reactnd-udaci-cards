# FlashQuiz - UdaciCards

> React Native flashcard quiz application. This project allows users to study collections of flashcards. Users can create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Install and Start

To get it up and running just run the following instructions:

* Install all project dependencies with `yarn install`
* Launch the app with `yarn start`

## Development

The app was tested and developed using an iOS iPhone X simulator running `11.2` and a physical Pixel 2 (Android Pie).

### api.js

`getDecks`: return all of the decks along with their titles, questions, and answers.

`getDeck`: take in a single id argument and return the deck associated with that id.

`saveDeckTitle`: take in a single id argument and return the deck associated with that id

`addCardToDeck`: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

## Create React App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).