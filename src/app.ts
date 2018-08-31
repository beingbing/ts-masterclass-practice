const enum Sizes  {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

// do const when you are not using enum much

let selected: Sizes;

function updateSize(size: Sizes): void {
    selected = size;
}

updateSize(Sizes.Large);

console.log(selected);