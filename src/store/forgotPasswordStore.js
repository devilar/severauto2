import {makeAutoObservable} from "mobx";

class LoginStore {
    currentUser = {};
    isLogged = false;


    constructor() {
        makeAutoObservable(this)
    }

    login(data){

    }

    logout(){

    }



}



export default new LoginStore();