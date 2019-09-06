<template>
    <div>
        <form @submit.prevent="submit">
            <div>
                <label>First Name:</label>
                <input type="text" v-model="firstName">
            </div>

            <div>
                <label>Last Name:</label>
                <input type="text" v-model="lastName">
            </div>

            <div>
                <label>Phone</label>
                <input type="text" v-model="phone">
            </div>

            <div>
                <label>Email</label>
                <input type="text" v-model="email">
            </div>

            <div v-show="errors != ''">
                {{ errors }}
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            errors: '',
        }
    },

    methods: {
        submit() {
            this.errors = '';
            if (!this.firstName || !this.lastName) {
                this.errors = 'First name and last name are required.';
                return;
            }

            if (!this.phone && !this.email) {
                this.errors = 'Provide your phone or email';
                return;
            }

            this.$store.commit('setFirstName', this.firstName);
            this.$store.commit('setLastName', this.lastName);
            this.$store.commit('setPhone', this.phone);
            this.$store.commit('setEmail', this.email);

            this.$router.push({path: '/code'});
        }
    }
}
</script>

