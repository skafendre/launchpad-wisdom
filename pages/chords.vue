<template>
    <section class="section">
        <div class="columns is-mobile">okok</div>
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
        this.chordsList = ChordType.all()
        console.log(ChordType.get('major'))

        const mappedChords = await this.$content('chords').fetch()
        console.log('articles', mappedChords)

        // fuse mappedChordsData with the tonal chords list
        this.getChords()
    },
    methods: {
        async getChords() {
            const availableChords = []
            const mappedChords = await this.$content('chords').fetch()
            console.log('articles', mappedChords)

            for (const chord in mappedChords) {
                if (ChordType.get(chord.slug)) {
                    console.log(`Chord ${chord.slug} recognized by tonaljs !`)
                } else {
                    console.error(
                        `Chord ${chord.slug} was NOT recognized by tonaljs `,
                    )
                }
            }

            return availableChords
        },
    },
}
</script>
