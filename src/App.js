import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validarCamposFomulario = this.validarCamposFomulario.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { id, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({ [id]: value }, this.validarCamposFomulario);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo, cards,
    } = this.state;

    cards.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      hasTrunfo: cards.some((card) => card.cardTrunfo),
    });
  }

  validarCamposFomulario() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const camposDigitados = [cardName, cardDescription, cardImage, cardRare];
    const camposDeNumeros = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const valorMaxAtributo = 90;
    const valorMaxSoma = 210;
    const somaDoCamposDeNumeros = Number(cardAttr1) + Number(cardAttr2)
     + Number(cardAttr3);
    const validarTamanhoCampo = camposDigitados.every((texto) => texto.length > 0);
    const validarAtributos = camposDeNumeros.every((numero) => numero >= 0
     && numero <= valorMaxAtributo);
    const validarSomaDosAtributos = somaDoCamposDeNumeros <= valorMaxSoma;

    const ValidarTodosInputs = validarTamanhoCampo && validarAtributos
    && validarSomaDosAtributos;

    if (ValidarTodosInputs === true) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          cards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }

            />))
        }
      </div>
    );
  }
}

export default App;
