const utils = require('./utils')
const data = require('./data/data.json')

describe('Test Utils', () => {
  describe('Get episode from URL', () => {
    it('return episode 1', () => {
      const response = utils.getEpisodeFromURL(data.results[0].episode[0])
      expect(response[0]).toBe("1")
    })
  })

  describe('Get list of episodes by character', () => {
    it('return length 36', () => {
      const response = utils.generateEpisodeList(data.results[0])
      expect(response.length).toBe(36)
    })
  })

  describe('Get an object of episodes with characters', () => {
    it('return an object with episodes and characters', () => {
      /* 
        {
          [10]: [Ricky, Abradolf],
          [11]: [Ricky, Abradolf]
        }
      */
      const character = data.results[6]
      const ricky = data.results[0]
      const episodes = {
        '10': [ricky],
        '11': [ricky]
      }
      const response = utils.mapCharacterToEpisodes(episodes, character)
      expect(response['10'].length).toBe(2)
      expect(response['10'][1].name).toBe(character.name)
    })
  })
})

// toBe: Number or String
//toEqual: Array