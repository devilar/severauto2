import {makeAutoObservable} from "mobx";

class StocksStore {
    result = []

    loadResult(data){
        this.result = data;
    }


    constructor() {
        makeAutoObservable(this)
    }

}



export default new StocksStore();