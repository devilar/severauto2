import {makeAutoObservable} from "mobx";

class StocksStore {
    result = [
        {id:1, stockName:'Бутово', adress:'г. Москва ул. Пушкина д.42 пом.3', status:'Активен'},
        {id:2, stockName:'Бутово', adress:'г. Москва ул. Пушкина д.42 пом.3', status:'Активен'},
        {id:3, stockName:'Бутово', adress:'г. Москва ул. Пушкина д.42 пом.3', status:'Активен'},
        {id:4, stockName:'Бутово', adress:'г. Москва ул. Пушкина д.42 пом.3', status:'Активен'},
        {id:5, stockName:'Бутово', adress:'г. Москва ул. Пушкина д.42 пом.3', status:'Активен'},
        {id:6, stockName:'Бутово', adress:'г. Москва ул. Пушкина д.42 пом.3', status:'Активен'},

    ]

    constructor() {
        makeAutoObservable(this)
    }

}



export default new StocksStore();