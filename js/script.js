// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


console.log("vue ok",Vue)

const root = new Vue ({
    el:"#root",
    data:{
       emails:[]
    },
    computed: {
        
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) =>{
                console.log(res.data);
                this.emails.push(res.data.response)
            })

        }
    },
})
