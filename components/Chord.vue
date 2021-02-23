<template>
    <div class="chord-component">hello chord</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },
}
</script>
