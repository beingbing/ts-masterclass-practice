// const exists = 'localstorage' in window; // true

class Song {
    kind: 'song';
    constructor(public title: string, public duration: number) {}
}

class Playlist {
    kind: 'playlist';
    constructor(public name: string, public song: Song[]) {}
}

function isSong(item: any): item is Song { // it can be used only on boolean.
    return 'title' in item;           // it's just giving type info with returned bool
}

function getItemName(item: Song | Playlist) {
    // if (isSong(item)) {
    if (item.kind === 'song') {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name: ', songName);

const playlistName = getItemName(
    new Playlist('The Best song Ever', [new Song('Simple man', 300000)])
);
console.log('playlist name: ', playlistName);