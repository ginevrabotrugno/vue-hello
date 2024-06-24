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
            message: "Hello Vue!!",
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            messageStyle: {
                color: 'blue',
                fontSize: '40px',
                textAlign: 'center'
            },
            imageStyle: {
                display: 'block',
                margin: '0 auto',
                width: '50%',
                border: '2px solid #000'
            }
        }
    }
}).mount('#app');
