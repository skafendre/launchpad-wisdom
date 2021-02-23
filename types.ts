// todo convert hand and inversion to enum
interface inversion {
    inversion: string
    fingering: number[][]
}

interface position {
    position: number[]
    leftHandInversions: inversion[]
    rightHandInversions: inversion[]
}

export interface MappedChord {
    positions: position[]
}
