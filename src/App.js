import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  isSaveButtonDisabled = (state) => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3 } = state;
    const total = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);
    const maxAtr = 90;
    const maxTotal = 210;
    if (
      cardName !== ''
      && cardImage !== ''
      && cardDescription !== ''
      && cardAttr1 <= maxAtr
      && cardAttr1 >= 0
      && cardAttr2 <= maxAtr
      && cardAttr2 >= 0
      && cardAttr3 <= maxAtr
      && cardAttr3 >= 0
      && total <= maxTotal
    ) {
      return false;
    } return true;
  }

  // disabledButton = () => {
  //   if(this.state.cardName === '') {
  //    this.setState( { isSaveButtonDisabled: true }, () => {})
  //   }
  // }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]:
      event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  // onSaveButtonClick

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled(this.state) }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
