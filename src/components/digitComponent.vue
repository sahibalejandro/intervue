<template>
    <span>
        <input ref="input" type="text" :value="number" @keydown.prevent="setDigit($event)" />
    </span>
</template>

<script>
export default {
    props: ['focus'],

    data() {
        return {
            number: null,
        }
    },

    watch: {
        focus(focusInput) {
            if (focusInput) {
                this.$refs.input.focus();
            }
        }
    },

    methods: {
        setDigit(e) {
            const number = parseInt(e.key, 10);

            if (isNaN(number)) {
                return;
            }

            this.number = number;
            this.$emit('done');
        }
    }

}
</script>
