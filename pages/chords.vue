<template>
    <section class="section">
        <!--        <b-field label="Simple">-->
        <!--            <b-select placeholder="Select a name">-->
        <!--                <option-->
        <!--                  v-for="chord in chordsList"-->
        <!--                  :value="chord.slug"-->
        <!--                  :key="chord.slug">-->
        <!--                  {{ chord.slug }}-->
        <!--                </option>-->
        <!--            </b-select>-->
        <!--        </b-field>-->

        <!--        <div class="columns is-mobile">okok</div>-->
    </section>
</template>

<script>
import { ChordType } from '@tonaljs/tonal'

export default {
    name: 'Chords',

    data() {
        return {
            chordsList: [],
        }
    },
    async mounted() {
        // fuse mappedChordsData with the tonal chords list
        this.chordsList = await this.getValidChords()
    },
    methods: {
        /**
         * Get mapped chords with tonal chord information
         * @returns {Promise<[]>}
         */
        async getValidChords() {
            const availableChords = []
            const unrecognizedChords = []
            const mappedChords = await this.$content('chords').fetch()
            console.log('articles', mappedChords)

            for (const chord of mappedChords) {
                const tonalChord = ChordType.get(chord.slug)
                if (tonalChord.empty !== true) {
                    console.log(`Chord ${chord.slug} recognized by tonaljs !`)
                    tonalChord.inversions = chord.inversions
                    availableChords.push(tonalChord)
                } else {
                    console.error(
                        `Chord ${chord.slug} was NOT recognized by tonaljs `,
                    )
                    unrecognizedChords.push(chord)
                }
            }

            if (unrecognizedChords.length >= 1) {
                console.error(
                    `${unrecognizedChords.length} unreconized mapped chords.`,
                    unrecognizedChords,
                )
            }

            return availableChords
        },
    },
}
</script>
