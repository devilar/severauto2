import {makeAutoObservable} from "mobx";

class ProfileStore {
    constructor() {
        makeAutoObservable(this)
    }

person = {login:'Victor', fullName:'Барсуков Сергей Валерьевич', password:'12345678rr', email:'barsukov@yandex.com', role:'manager'}

}



export default new ProfileStore();