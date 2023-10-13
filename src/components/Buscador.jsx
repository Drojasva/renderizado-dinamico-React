import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscador({ onBuscar }) {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    onBuscar(searchTerm);
  };

  return (
    <InputGroup className="mb-3 mt-3 w-50 p-2">
      <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </InputGroup.Text>
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Buscar colaboradores"
        value={term}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
}

Buscador.propTypes = {
  onBuscar: PropTypes.func, // Cambié PropTypes.string a PropTypes.func ya que `onBuscar` parece ser una función.
};

export default Buscador;

