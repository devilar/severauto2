import {makeAutoObservable} from "mobx";

class LoaderStore {

    isActive = false;

    enableLoader = () => this.isActive = true;
    disableLoader = () => this.isActive = false;

    constructor() {
        makeAutoObservable(this)
    }



}



export default new LoaderStore();