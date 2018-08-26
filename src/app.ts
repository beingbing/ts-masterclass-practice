// class is more of a blueprint that object shares (same info, properties and methods)
// Interface is a group of related properties and methods that describe an object
//
// but neither provides the implementations nor initialization for objects but 
// interface doesn't provide any implementation details nor it allows to initialize them

// the use case for both depends on whether we just want to use them for type checking
// or we want to provide implementation details

// interface Artist {
//     name: string;
// }

// new Artist('Samar'); // we can't do that with interface

class ArtistCreator /*implements Artist*/ {
    constructor(public name: string) {}
}

// function artistFactory({ name }: Artist) {
//     return { id: 101, name }
// }

// function artistFactory({ name }: Artist) {
//     return new ArtistCreator(name);
// }

function artistFactory({ name }: ArtistCreator) {
    return new ArtistCreator(name);
}

artistFactory({ name: 'Samar'});