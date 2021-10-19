import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.validarCamposFomulario = this.validarCamposFomulario.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { id, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({ [id]: value }, this.validarCamposFomulario);
  }

  onSaveButtonClick() {

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
      </div>
    );
  }
}

export default App;
