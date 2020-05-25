function getEpisodeFromURL(url) {
  const urlSplited = url.split('/')
  return urlSplited.pop()

}

function generateEpisodeList(character) {
  return character.episode.map(url => getEpisodeFromURL(url))
}

/* 
  If the position of episode exists in newEpisodes, the 
  newEpisodes will be equal, but the new position will be
  update with the new character.

  If the position of episode doesn't exists in newEpisodes,
  the newEpisodes will to create the new position and include in there
  the new character.
*/
function mapCharacterToEpisodes(episodes, character) {
  const characterEpisodes = generateEpisodeList(character);
  let newEpisodes = { ...episodes };

  characterEpisodes.map(episode => {

    if (newEpisodes[episode]) {
      newEpisodes = {
        ...newEpisodes,
        [episode]: [...newEpisodes[episode], character]
      };
      return;
    }

    newEpisodes[episode] = [character];
  });

  return newEpisodes;
}


module.exports = {
  getEpisodeFromURL,
  generateEpisodeList,
  mapCharacterToEpisodes
}