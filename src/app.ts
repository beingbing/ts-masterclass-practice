// let dictionary: { [key: string]: any } = {};

let dictionary: Record<string, TrackState> = {};

interface TrackState {
    current: string;
    next: string;
}

// const item: TrackState = {
//     current: 'ngdf5t54',
//     next: 'h54tngd'
// };

// const item: Record<'current' | 'next', string> = {
//     current: 'ngdf5t54',
//     next: 'h54tngd'
// };

const item: Record<keyof TrackState, string> = {
    current: 'ngdf5t54',
    next: 'h54tngd'
};

// numbers are coerced in strings
dictionary[0] = item;