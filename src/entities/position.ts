import { inversion } from './inversion'

export interface position {
    position: number[]
    leftHandInversions: inversion[]
    rightHandInversions: inversion[]
}
