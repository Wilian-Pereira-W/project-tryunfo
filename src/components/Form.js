import React, { Component } from 'react';

class Form extends Component {
  render() {
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
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              name="description-input"
            />
          </label>
          Attr01
          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1-input"
            />
          </label>
          Attr02
          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2-input"
            />
          </label>
          Attr03
          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3-input"
            />
          </label>
          Imagem
          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              name="image-input"
            />
          </label>
          Raridade
          <label htmlFor="rare-input">
            <select data-testid="rare-input" name="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo-input"
            />
          </label>
          <button name="save-button" type="submit" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
