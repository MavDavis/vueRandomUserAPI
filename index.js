const app = Vue.createApp({
    data() {
        return {
            firstname: "John",
            lastname: "Doe",
            email: "John@gmail.com",
            gender: "female",
            picture: "https://randomuser.me/api/portraits/men/15.jpg",
        };
    },
    methods: {
        async getUser() {
            let fetchItem = await fetch("https://randomuser.me/api");
            let { results } = await fetchItem.json();
            console.log(results);
            this.firstname = results[0].name.first;
            this.lastname = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        },
    },
});
app.mount("#app");