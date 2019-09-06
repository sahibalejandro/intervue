<template>
    <div>
        Welcome {{ firstName }}!
        <digitComponent v-for="n in 4" @done="nextInput()" :focus="focus == n"/>
    </div>
</template>

<script>
import digitComponent from './digitComponent.vue';

export default {
    components: { digitComponent },

    data() {
        return {
            firstName: '',
            focus: 0,
        }
    },

    mounted() {
        this.firstName = this.$store.state.firstName;
        this.focus = 1;
    },

    methods: {
        nextInput() {
            if (this.focus < 4) {
                this.focus++;
            } else {
                this.$router.push({path: '/thanks'});
            }
        }
    }
}
</script>

