class CalcController {

    constructor() {

        this._locale = 'pt-BR';
        this._displayCalcE1 = document.querySelector("#display");  
        this._dateE1 = document.querySelector("#data");
        this._timeE1 = document.querySelector("#hora");

        //this._displayCalc = "0"; // 
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

       /* let displayCalcE1 = document.querySelector("#display");  // seletores movidos como atributos no construtor 
        let dateE1 = document.querySelector("#data");
        let timeE1 = document.querySelector("#hora"); */

        //displayCalcE1.innerHTML = "7"; // usada apenas para teste
        //this._dateE1.innerHTML = "05/05/2022"; 
        //this._timeE1.innerHTML = "17:23"; 

        // Função executada em um intervalo de tempo - setInterval o tempo é marcado em milisegundos 
        setInterval(() => {
            this.setDisplayDateTime();
            
        }, 1000); 

        
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        /*buttons.addEventListener('click', e => {

            console.log(e);  // teste do button 
        }); */

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {
                console.log(e);
            });
        })
    }

    setDisplayDateTime() {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            /* this.displayDate = this.currentDate.toLocaleDateString(this._locale, { // para mudar o formato da data 
                day: "2-digit",
                month: "long",
                year: "numeric"
            }); */

            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }

    get displayTime(){
        return this._timeE1.innerHTML;
    }

    set displayTime(value){
        return this._timeE1.innerHTML = value;
    }

    get displayDate() {
        return this._dateE1.innerHTML;
    }

    set displayDate(value) {
        return this._dateE1.innerHTML = value;
    }

    
    get displayCalc(){
        return this._displayCalcE1.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcE1.innerHTML = value;
    }

    get currentDate(){    // Date - classe nativa do Javascript para datas
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}

