// npm install --save normalizr
const { normalize, schema } = require('normalizr');

const userSchema = new schema.Entity('users');
const authorSchema = new schema.Entity('authors');
export const songSchema = new schema.Entity('songs', {
    author: authorSchema
});
export const playlistSchema = new schema.Entity('playlists', {
    user: userSchema,
    songs: [songSchema]
});

export const playlistsSchema = [playlistSchema];

export default function(data) {
    return normalize(data, playlistsSchema);
}
