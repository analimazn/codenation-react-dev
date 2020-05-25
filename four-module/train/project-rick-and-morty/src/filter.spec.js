const filter = require('./filter')
const data = require('./data/data.json')

describe('Filter Status', () => {
  describe('Status Alive', () => {
    it('return just alive', () => {
      const response = filter.filterByStatus(data.results, 'Alive')
      expect(response.length).toBe(8)
    })
  })

  describe('Status Dead', () => {
    it('return just dead', () => {
      const response = filter.filterByStatus(data.results, 'Dead')
      expect(response.length).toBe(6)
    })
  })

  describe('Status Unknown', () => {
    it('return just unknown', () => {
      const response = filter.filterByStatus(data.results, 'unknown')
      expect(response.length).toBe(6)
    })
  })
})

describe('Filter Gender', () => {
  describe('Gender Female', () => {
    it('return just female', () => {
      const response = filter.filterByGender(data.results, 'Female')
      expect(response.length).toBe(4)
    })
  })

  describe('Gender Male', () => {
    it('return just male', () => {
      const response = filter.filterByGender(data.results, 'Male')
      expect(response.length).toBe(15)
    })
  })

  describe('Gender Unknown', () => {
    it('return just unknown', () => {
      const response = filter.filterByGender(data.results, 'unknown')
      expect(response.length).toBe(1)
    })
  })
})

describe('Filter Characters By Episodes', () => {
  describe('Episode 1', () => {
    it('return just Ricky and Morty', () => {
      const response = filter.filterByEpisode(data.results, '1')
      expect(response.length).toBe(2)
      expect(response[1].name).toBe('Morty Smith')
    })
  })
})