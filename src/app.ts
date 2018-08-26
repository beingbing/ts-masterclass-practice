// class Foo {
//     bar() {}
// }

// function Foo2() {}
// Foo2.prototype.bar = function() {};

// const bar = new Foo();

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype); // if bar is an instance of foo, true

class Song {
    constructor(public title: string, public duration: number) {}
}

class Playlist {
    constructor(public name: string, public song: Song[]) {}
}

function getItemName(item: Song | Playlist) {
    // if ((item as Song).title) {
    //     return (item as Song).title;
    // }
    // return (item as Playlist).name;
    if (item instanceof Song) {
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