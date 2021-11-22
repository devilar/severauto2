import {makeAutoObservable} from "mobx";

class forgotPasswordStore {


    constructor() {
        makeAutoObservable(this)
    }


}



export default new forgotPasswordStore();