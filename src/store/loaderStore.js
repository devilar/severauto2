import {makeAutoObservable} from "mobx";

class LoaderStore {

    isActive = false;

    constructor() {
        makeAutoObservable(this)
    }



}



export default new LoaderStore();