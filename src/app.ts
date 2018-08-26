interface Item {
    name: string;
}

interface Artist extends Item {
    songs: number;
}

interface Artist {
    getSongs(): number;
} // interface with same name get merged

type Artist2 = { name: string } & Item; // we can't have two types with same name
// type Artist2 = { name: string } & Item;

const newArtist: Artist = {
    songs: 4,
    name: 'atif',
    getSongs() {
        return this.songs;
    }
}