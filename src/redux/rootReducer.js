const { GET_TOP_SONGS, FIND_TRACK, GET_ARTIST_INFO } = require("./types")

const initialState = {
    topSongs: [],
    foundedTracks: [],
    artist: JSON.parse(localStorage.getItem('artist')) || {}
}

const rootReducer = (state = initialState, action) => {
    if(action.type === GET_TOP_SONGS) {
        return {...state, topSongs: [...action.payload.tracks.track]}
    } if (action.type === FIND_TRACK) {
        return {...state, foundedTracks: [...action.payload.results.trackmatches.track]}
    } if (action.type === GET_ARTIST_INFO) {
        return {...state, artist: {...action.payload}}
    }


    return state
}

export default rootReducer