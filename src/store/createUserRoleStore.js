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
        {id:2, roleTitle: ''},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addRole(){
        this.rolesQuantity.push({id:this.rolesQuantity.length+1, roleTitle: ''})
    }

    handleChange(index, value){
       this.rolesQuantity[index].roleTitle = value;
    }


}



export default new UserRoleStore();