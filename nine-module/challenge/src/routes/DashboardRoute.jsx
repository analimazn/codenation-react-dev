import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import {
  getCategoriesFailed,
  getCategoriesRequest,
  getCategoriesSuccess,
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout,
} from '../actions';

import { endpoints, request } from '../modules';

import { WelcomeBox } from '../components';
import {
  Categories,
  Dashboard,
  PrivateRoute,
  Topbar,
} from '../containers';

import PlaylistsRoute from './PlaylistsRoute';
import TracksRoute from './TracksRoute';

const { getCategories, getUserProfile, } = endpoints;

const DashboardRoute = () => {
  const { auth, content, user } = useSelector(state => state)
  const { path, url } = useRouteMatch()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const options = {
      ...getUserProfile.options,
      headers: {'Authorization': `Bearer ${auth.accessToken}`}
    }

    dispatch(getUserRequest())

    request(getUserProfile.url, options)
      .then(data => dispatch(getUserSuccess(data)))
      .catch(err => {
        if (err === 401) {
          dispatch(logout())
          return
        }
        dispatch(getUserFailed(err))
      })
  }, [auth, dispatch])

  useEffect(() => {
    const options = {
      ...getCategories.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getCategoriesRequest())

    request(getCategories.url, options)
      .then(data => dispatch(getCategoriesSuccess(data)))
      .catch(error => {
        console.log(error)
        if (error === 401) {
          dispatch(logout)
          return
        }
        dispatch(getCategoriesFailed(error))
      })
  }, [auth, dispatch])

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />

          <Categories
            isLoading={content.status === 'running' && content.categories.length === 0}
            data={content.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  )
}

export default DashboardRoute