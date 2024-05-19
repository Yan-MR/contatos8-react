import React, { useState } from 'react';
import './App.css';

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  const removerContato = (index) => {
    const novosContatos = contatos.filter((_, i) => i !== index);
    setContatos(novosContatos);
  };

  return (
    <div className="container">
      <h2>Lista de Contatos</h2>
      <div className="input-section">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <button onClick={adicionarContato}>Adicionar Contato</button>
      </div>
      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            <strong>{contato.nome}:</strong> {contato.telefone}
            <button onClick={() => removerContato(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos;
