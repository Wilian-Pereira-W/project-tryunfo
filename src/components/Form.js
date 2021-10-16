import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              name="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          Attr01
          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          Attr02
          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          Attr03
          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          Imagem
          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              name="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          Raridade
          <label htmlFor="rare-input">
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              name="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo-input"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            disabled={ isSaveButtonDisabled }
            name="save-button"
            type="submit"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
