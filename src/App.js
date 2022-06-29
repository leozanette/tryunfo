import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// import data from './components/data';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
      cards: [],
    };
  }

  isSaveButtonDisabled = () => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const total = Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3);
    const maxAtr = 90;
    const maxTotal = 210;
    if (
      cardName !== ''
      && cardImage !== ''
      && cardDescription !== ''
      && Number(cardAttr1) <= maxAtr
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxAtr
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxAtr
      && Number(cardAttr3) >= 0
      && total <= maxTotal
    ) {
      return false;
    } return true;
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]:
      event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
    // console.log(this.state.cards)
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      ...INITIAL_STATE,
      cards: [...prevState.cards, newCard],
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <h2>Cartas</h2>
        <div>
          { cards.map((dat) => (
            <Card key={ dat.name } { ...dat } />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
