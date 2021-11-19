import {makeAutoObservable} from "mobx";

class RemainsStore {
    result = []



    constructor() {
        makeAutoObservable(this)
    }

    loadResult(data){
        this.result = data
    }

}



export default new RemainsStore();