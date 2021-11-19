import {makeAutoObservable} from "mobx";

class ContractsStore {
    result = [];


    loadResult(data){
        this.result = data
    }

    constructor() {
        makeAutoObservable(this)
    }

}


export default new ContractsStore();