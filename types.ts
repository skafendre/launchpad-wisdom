// todo convert hand and inversion to enum
interface inversion {
    hand: string
    inversion: string
    fingering: number[]
}

interface position {
    name: number
    inversions: inversion[]
}

export interface MappedChord {
    positions: position[]
}
