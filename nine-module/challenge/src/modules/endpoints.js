  import { config } from '../config'

const options = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
}

const {
  authorizationURL,
  clientId,
  redirectUrl,
  webAPI,
  scopes
} = config.spotify

const endpoints = {
  getAuthorization: { // getAuthorization
    url: `${authorizationURL}?client_id=${clientId}${(scopes ? `&scope=${encodeURIComponent(scopes)}` : '')}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=token&show_dialog=true`,
    options: {
      method: 'GET'
    }
  },
  getUserProfile: { //getUserProfile
    url: `${webAPI}/me`,
    options: options
  },
  getCategories: { // getCategories
    url: `${webAPI}/browse/categories?country=BR&locale=pt_BR`,
    options: options
  },
  getPlaylists: { //getCategoryPlaylists
    url: `${webAPI}/browse/categories/{categoryId}/playlists`,
    options: options
  },
  getTracks: { //getPlaylistTracks
    url: `${webAPI}/playlists/{playlistId}/tracks`,
    options: options
  }
}

export {
  endpoints
}