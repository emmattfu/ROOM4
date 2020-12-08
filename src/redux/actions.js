import { GET_TOP_SONGS, FIND_TRACK, GET_ARTIST_INFO } from "./types"

export const getTopSongs = () => {
    return async dispatch => {
        try {
            const data = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=afc590534ac17c4c61701a3f2c931fd8&format=json`)
            const topSongs = await data.json()
            dispatch({type: GET_TOP_SONGS, payload: topSongs})
        } catch(error) {
            console.log(error)
        }
    }
}

export const findTracks = trackName => {
    return async dispatch => {
        try {
            const data = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=afc590534ac17c4c61701a3f2c931fd8&format=json`)
            const song = await data.json()
            dispatch({type: FIND_TRACK, payload: song})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getArtistInfo = artistName => {
    return async dispatch => {
        try {
            const data = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=afc590534ac17c4c61701a3f2c931fd8&format=json`)
            const artist = await data.json()
            dispatch({type: GET_ARTIST_INFO, payload: artist.artist})
        } catch (error) {
            console.log(error)
        }
    }
}

