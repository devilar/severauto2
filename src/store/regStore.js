import {makeAutoObservable} from "mobx";

class regStore {

    canOpen = true;

    constructor() {
        makeAutoObservable(this)
    }

    enableForm(){
        this.canOpen = true;
    }
    disableForm(){
        this.canOpen = false;
    }


}

export default new regStore();