class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcE1 = document.querySelector("#display");
        let dateE1 = document.querySelector("#data");
        let timeE1 = document.querySelector("#hora");

        displayCalcE1.innerHTML = "7"; 
        dateE1.innerHTML = "05/05/2022"; 
        timeE1.innerHTML = "17:23"; 
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        return this._currentDate = valor;
    }
}

