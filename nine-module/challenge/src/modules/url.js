const getInfoFromUrl = (url) => {
  if (!url) {
    return { error: 'Acesso negado. Você não possui permissões para acessar o aplicativo' }
  }

  const access_token = new URLSearchParams(url.hash).get('#access_token')
  const token_type = new URLSearchParams(url.hash).get('token_type')
  const expires_in = new URLSearchParams(url.hash).get('expires_in')

  return {
    'accessToken': decodeURIComponent(access_token),
    'tokenType': decodeURIComponent(token_type),
    'expiresIn': decodeURIComponent(expires_in)
  }
}

const formatUrl = (rawURL, urlKey) => {
  const property = Object.keys(urlKey)[0];
  return rawURL.replace(`{${property}}`, urlKey[property]);
}

export {
  getInfoFromUrl,
  formatUrl
}