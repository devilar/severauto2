import {makeAutoObservable} from "mobx";

class UserRoleStore {

    rolesList = [
        {id:1, value: 'worker' , title: 'Рабочий с клада'},
        {id:2, value: 'sklad_manager' , title: 'Ответственный за склад'},
        {id:3, value: 'manager' , title: 'Менеджер'},
        {id:4, value: 'admin' , title: 'Администратор подразделения'},
    ]

    stockInfo = [
        {id:1, stockName:'Бутово', adress:'ул. Успенская  д.5', read: true, edit: false},
        {id:2, stockName:'Барсуково', adress:'ул. Пензенская  д.6', read: true, edit: true},
        {id:3, stockName:'Григорьево', adress:'ул. Полякова  д.4', read: true, edit: true},
        {id:4, stockName:'Сергеево', adress:'ул. Пушкина  д.1', read: true, edit: true},
    ]


    readStatusChange(index){
        this.stockInfo[index].read = !this.stockInfo[index].read;
    }

    editStatusChange(index){
        this.stockInfo[index].edit = !this.stockInfo[index].edit;
    }

    constructor() {
        makeAutoObservable(this)
    }

}



export default new UserRoleStore();