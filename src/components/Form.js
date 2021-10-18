import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="name"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <input
              type="textarea"
              data-testid="description-input"
              name="description"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          Attr01
          <label htmlFor="cardAttr1">
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          Attr02
          <label htmlFor="cardAttr2">
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          Attr03
          <label htmlFor="cardAttr3">
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          Imagem
          <label htmlFor="cardImage">
            <input
              type="text"
              data-testid="image-input"
              name="image"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          Raridade
          <label htmlFor="cardRare">
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              name="rare"
              id="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            disabled={ isSaveButtonDisabled }
            type="submit"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            id="save"
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
