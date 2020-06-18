const utils = require('./utils')

function filterByStatus(characters, status) {
  return characters.filter(character => character.status === status)
}

function filterByGender(characters, gender) {
  return characters.filter(character => character.gender === gender)
}

/*
  that filter returns an array with objects of characters
  according to episode
*/
function filterByEpisode(characters, episode) {
  const episodes = characters.reduce((episodes, character) => {
    return utils.mapCharacterToEpisodes(episodes, character);
  }, {});

  return episodes[episode];
}

module.exports = {
  filterByStatus,
  filterByGender,
  filterByEpisode
}