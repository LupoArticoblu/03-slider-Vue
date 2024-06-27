

const { createApp } = Vue;
createApp({
  data() {
    return {
      //creiamo un oggetto
      movies:{
        images: [
          'https://media.themoviedb.org/t/p/w600_and_h900_face/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
          'https://media.themoviedb.org/t/p/w600_and_h900_face/qrMEeUxByoazWiAvPLZzEP8G7ps.jpg',
          'https://media.themoviedb.org/t/p/w600_and_h900_face/6XJM3C47iGOK9nFU6yLFCSf4U5c.jpg',
          'https://media.themoviedb.org/t/p/w600_and_h900_face/hsyNR14TSGklwoHFjPZnPiu6UlV.jpg',
          'https://media.themoviedb.org/t/p/w600_and_h900_face/s35mkAIvJWdXGEtKJ8UmOU6vIQO.jpg'
        ],
        title: 'Ciak',
        length: '100-160',
        desc: 'ciak ciak ciak',
      },
      activeImg: 0,
      intervalloSlider: null,
      nexus: true
    }
  },
  methods:{
    changeImg(index){
      this.activeImg = index;
    },
    nextPrev(next){
      if(next){
        //se next è true
        this.activeImg++;
        //se l'immagine attiva è l'ultima, la prossima è la prima
        if(this.activeImg === this.movies.images.length){
          this.activeImg = 0;
        }
      }else{
        //se next è false
        this.activeImg--;
        //se l'immagine attiva è la prima, la precedente è l'ultima
        if(this.activeImg < 0){
          this.activeImg = this.movies.images.length - 1;
        }
      }
    },
    // creiamo un autoslider
    autoSlider(){
      //questo equivale a const intervalloSlider = setInterval(()=>{}, 3000) ma const è definita in data ATTENZIONE: questa variabile può essere anche non definita in data e rimanere comunque una variabile globale grazie a this
      this.intervalloSlider = setInterval(()=>{
        this.nextPrev(this.nexus);
      }, 3000)
    },
    fermaSlider(){
      //creiamo una condizione in cui sappiamo se l'intervallo è già stato cancellato prima di richiamarlo
      if(this.intervalloSlider){
        clearInterval(this.intervalloSlider);
        //questo cancella il setInterval e riporta l'intervallo a null
        this.intervalloSlider = null;
      }
    },
    //gestiamo il comportamento dello slider all'interazione col mouse
    mouseOver(){

      this.fermaSlider();
    },
    mouseOut(){
      //aggiungiamo un controllo e verifichiamo che l'intervallo venga riavviato dopo che l'utente esce dallo slider
      if(!this.intervalloSlider){
        this.autoSlider();
     }
    }
  },  
  mounted(){
    this.autoSlider();
  }
}).mount('#app')  