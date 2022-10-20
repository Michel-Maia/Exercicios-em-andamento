class CalcController {

    constructor() {

        this._operation = [];
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

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){

        this._operation = [];
    }

    clearEntry(){

        this._operation.pop();
    }

    getLastOperation(){

       return this._operation[this._operation.length-1];

    }

    setLastOperation(value) {

        this._operation[this._operation.length - 1] = value;
    }

    isOperator(value){
        return (['+', '-', '*', '/','%'].indexOf(value) > -1) 
        
    }

    addOperation(value){

        if (isNaN(this.getLastOperation())){ // string

            if (this.isOperator(value)) { // trocar o operador

                this._setLastOperation(value);

            } else if(isNaN(value)) {
                console.log(value);

            } else { // number
                this._operation.push(newValue);
            }

        } else {
           let newValue = this.getLastOperation().toString() + value.toString();
           this._setLastOperation(parseInt(newValue));
        }

        this._operation.push(value);

        console.log(this._operation);
    }

    setError(){

        this.displayCalc = "Error";
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma': 
            this.addOperation('+');               
                break;

            case 'subtracao': 
            this.addOperation('-');                   
                break;

            case 'divisao':   
            this.addOperation('/');                 
                break;

            case 'multiplicacao':     
            this.addOperation('*');               
                break;

            case 'porcento':    
            this.addOperation('%');                
                break;
            
            case 'igual': 
                             
                break;
            
            case 'ponto':
                this.addOperation('.');    
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default: 
                this.setError();
                break;

        }
    }

    initButtonsEvents(){
       let buttons = document.querySelectorAll("#buttons > g, #parts > g");  

        /*let buttons = document.querySelector("#buttons > g.btn-9");  teste um elemento

        buttons.addEventListener('click', e => {

            console.log(e);  // teste do button 
        }); */
      
        buttons.forEach((btn, index)=>{
            
            this.addEventListenerAll(btn, "click drag", e => {   // para add drag(clica e arrasta) foi preciso substituir o addEventListener porque ele não suporta mais de um evento e criado o evento this.addEventListenerAll no lugar do btn.addEventListener

                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn();                
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown" , e => {
                btn.style.cursor = "pointer"
            });
        });
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

