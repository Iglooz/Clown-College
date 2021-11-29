let clownApp = new Vue ({
    el: '#clownApp',
    data: {
        joke: "",
        jokeDetails: {setup: "", delivery: ""},
        jokeList: [],
        jokeListGeneric: [],
        jokeListKids: [],
        userJoke: "",
        userJokeSetup: "",
        userJokePunchline: "",
        filterForKids: false,
        filterForEvents: false,



    },
    methods: {

        getJoke(){
            let url = 'https://v2.jokeapi.dev/joke/Any'
            if(this.filterForEvents){
                url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,explicit'
            } else if (this.filterForKids){
                url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit'
            } else if (this.filterForKids && this.filterForEvents){
                url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit'
            }
            
            axios.get(url).then(resp => {
                    console.log(resp)
                    this.joke = resp.data
                })
            

        },
        saveJoke(joke){
            console.log(joke)
            this.jokeList.push(joke)

        },
        saveUserJoke(){
            let j = {setup: this.userJokeSetup, delivery: this.userJokePunchline}
            this.saveJoke(j)

        },
        showJokeDetails(joke){
            this.jokeDetails = joke
            console.log(joke)
            console.log(this.jokeDetails)
        },


    }

})