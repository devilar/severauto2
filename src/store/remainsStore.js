import {makeAutoObservable} from "mobx";

class RemainsStore {
    result = []



    constructor() {
        makeAutoObservable(this)
    }

    loadRemains(data){
        this.result = data
    }

}



export default new RemainsStore();