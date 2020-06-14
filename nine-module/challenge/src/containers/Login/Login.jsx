import React from 'react';
import Ink from 'react-ink';

import './Login.scss';
import { Logo } from '../../components'
import { endpoints } from '../../modules/endpoints';

const Login = () => (
  <main className="login" data-testid="login">
    <div className="container">
      <Logo className="spotify-brand"/>

      <h2 className="login__microcopy">
        Não toca a música inteira, {' '}
        <strong>
            mas toca o seu {' '}
            <span
              role="img"
              aria-label="Bright red heart"
              className="login__microcopy__heart"
            >
              ❤️
            </span>
        </strong>
      </h2>

      <a href={endpoints.getAuthorization.url} className="login__auth-button">
        Entrar com Spotify
        <Ink/>
      </a>

    </div>
  </main>
)

export default Login;
