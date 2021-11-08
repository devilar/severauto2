import {makeAutoObservable} from "mobx";

class UserRoleStore {

    rolesList = [
        {id:1, title: 'Админ'},
        {id:2, title: 'Юзер'},
        {id:3, title: 'Модератор'},
        {id:4, title: 'Забаненный'},
        {id:5, title: 'Душа компании'},
    ]

    rolesQuantity = [
        {id:1, roleTitle: ''},
        {id:2, roleTitle: ''},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    handleChange(index, value){
       this.rolesQuantity[index].roleTitle = value;
    }

    buttonClick(){
        console.log('grn!!!')
        this.result.push({id:2, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'});

    }

}



export default new UserRoleStore();