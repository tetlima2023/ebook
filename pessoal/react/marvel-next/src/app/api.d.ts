/* eslint-disable no-use-before-define */
export interface IApi {
  results: Result[]
}

interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  created: string
}

interface Origin {
  name: string
}

interface Location {
  name: string
}
