/* REDUCER */

import normalizePlaylists from './schema';

function reducer(state = {}, action) {
    switch (action.type) {
        case 'DESERIALIZE_PLAYLISTS':
            const normalized = normalizePlaylists(action.payload);
            return Object.assign({}, state, normalized.entities);

        default:
            return state;
    }
}

/* CONTAINER */

import {denormalize} from 'normalizr';
import {playlistSchema} from './schema'


function mapStateToProps(state) {
    const normalizedPlaylist = state.playlists[state.currentPlaylistId];
    const denormalizedPlaylist = denormalize(
        normalizedPlaylist,
        playlistSchema,
        state
    );
    return {
        currentPlaylist: denormalizedPlaylist
    };
}

export default connect(mapStateToProps)(Container)
