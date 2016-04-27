import log  from './lib/log'
import R    from 'ramda'

log('Up and running')

const data = {
  artist: 'Le Peuple de l\'Herbe',
  album: 'Cube',
  songs: [{
    number: 1,
    name: 'Main Title Theme from "Le Cube"',
    duration: { minutes: 2, seconds: 55 },
  }, {
    number: 2,
    name: 'Mission',
    duration: { minutes: 4, seconds: 24},
    featuring: 'JC001',
  }, {
    number: 3,
    name: 'Adventure',
    duration: { minutes: 3, seconds: 48 },
  }, {
    number: 4,
    name: 'Kin sapalot',
    duration: { minutes: 5 },
  }, {
    number: 5,
    name: 'Keep Rockin\'',
    duration: { minutes: 5, seconds: 3 },
  }, {
    number: 6,
    name: 'Kesskonf\'',
    duration: { seconds: 36},
  }, {
    number: 7,
    name: 'El Paso',
    duration: { minutes: 4, seconds: 27 },
  }, {
    number: 8,
    name: 'Boxin \' da Beat',
    duration: { minutes: 2, seconds: 24 },
    featuring: 'JC001',
  }, {
    number: 9,
    name: 'La Musique Electronique',
    duration: { minutes: 4, seocnds: 18 },
  }, {
    number: 10,
    name: 'Mono K7',
    duration: { seconds: 48 },
  }, {
    number: 11,
    name: 'Déjà à l\'école',
    duration: { minutes: 3, seconds: 23 },
  }, {
    number: 12,
    name: 'Honesty',
    duration: { minutes: 3, seconds: 15 },
    featuring: 'JC001'
  }, {
    number: 13,
    name: 'Down By Law',
    duration: { minutes: 5, seconds: 19 },
  }, {
    number: 14,
    name: 'CAD?',
    duration: { minutes: 1, seconds: 18 },
  }, {
    number: 15,
    name: 'Gumzilla',
    duration: { minutes: 5, seconds: 15 },
  }, {
    number: 16,
    name: 'St Cloud',
    duration: { seconds: 56 },
  }]
}
// log(data)
log('Artist', R.view(R.lensProp('artist'), data))
log('Album', R.view(R.lensProp('album'), data))

// log('songs', R.view(R.lensPath(['songs']), data))
const songsLens = R.lensPath(['songs'])
const firstLens = R.lensIndex(0)
const firstSong = R.compose(songsLens, firstLens)
log('First song', R.view(firstSong, data))

const nameLens = R.lensProp('name')
const firstSongName = R.compose(firstSong, nameLens);
log('First song name', R.view(firstSongName, data))

const songNames = R.over(songsLens, R.map(R.prop('name')))
log('Song Names', R.view(songsLens, songNames(data)))
