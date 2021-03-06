/* Descrizione:
Attraverso l 'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
Generare 10 indirizzi email e stamparli in pagina all 'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const app = new Vue({
    el: '#app',
    data: {
        result: [],
    },
    methods: {
        listEmail() {
            result = "";
            for (let i = 0; i < 10; i++) {
                const self = this;
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function (email) {
                        self.result.push(email.data.response);
                        console.log(self.result);
                    })
            }
        },
    }
})