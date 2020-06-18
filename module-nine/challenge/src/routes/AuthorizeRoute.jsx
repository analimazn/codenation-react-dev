import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authCallbackError, authCallbackSucess } from '../actions'

import { getInfoFromUrl } from '../modules'

import { Authorize } from '../containers'

const AuthorizeRoute = () => {
  const [redirect, setRedirect] = useState(false)
  const isLogged = useSelector(state => state.auth.isLogged)
  const dispatch = useDispatch()

  const url = window.location

  useEffect(() => {
    const data = getInfoFromUrl(url)

    if (data.error) {
      dispatch(authCallbackError(data.error))
      return
    }

    dispatch(authCallbackSucess(data))
  }, [dispatch, url])

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => setRedirect(true), 3000)
    }
  }, [isLogged])

  if (redirect) {
    return (<Redirect to={{pathname: '/dashboard'}}/>)
  }

  return (<Authorize/>)

}

export default AuthorizeRoute