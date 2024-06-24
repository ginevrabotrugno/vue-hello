// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// estrapolo il metodo di creazione app vue
const { createApp } = Vue;

// creazione un'istanza di un app vue e la colleghiamo al nostro tag di contenitore globale 
createApp({
    // tutti i dati dell'applicazione
    data () {
        return {
            message: "Hello vue!!"
        }
    }
}).mount('#app');
