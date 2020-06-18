import React, { useState } from 'react';

import UserProfile from '../UserProfile';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [urlAvatar, setUrlAvatar] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleName = (event) => {
    const value = event.target.value
    setName(value)
  }

  const handleUsername = (event) => {
    const value = event.target.value
    setUsername(value)
  }

  const handleEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handleUrlAvatar = (event) => {
    const value = event.target.value
    setUrlAvatar(value)
  }

  const submitUser = (event) => {
    event.preventDefault()

    const payload = JSON.stringify({
      name, urlAvatar, username, email
    })

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    }).then((res) => {
      setSubmit(true)
    });
  }

  return (
    <React.Fragment>
      <div data-testid="user-form">
        <UserProfile avatar={urlAvatar} name={name} username={username}/>

        <section className="post__form">
          <div className="container">
            <div className="post__form__wrapper">
              
              <label>Nome</label>
              <input
                type="text"
                placeholder="Insira seu nome aqui..."
                value={name}
                onChange={(event) => handleName(event)}
              />
              
              <label>Usuário</label>
              <input
                type="text"
                placeholder="Insira o seu usuário aqui..."
                value={username}
                onChange={(event) => handleUsername(event)}
              />
              
              <label>E-mail</label>
              <input
                type="text"
                placeholder="Insira o seu e-mail aqui..."
                value={email}
                onChange={(event) => handleEmail(event)}
              />
              
              <label>URL Foto de Perfil</label>
              <input
                type="text"
                placeholder="http://..."
                value={urlAvatar}
                onChange={(event) => handleUrlAvatar(event)}
              />
              
              <button
                type="button"
                onClick={(event) => submitUser(event)}
              >
                Cadastrar
              </button>
            </div>
          </div>
        </section>
      </div>

      {submit && (<SuccessMessage />)}
    </React.Fragment>
  );
};

export default UserForm;
