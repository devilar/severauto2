import {makeAutoObservable} from "mobx";

class SupplyStore {
    result = []
    innerResult = []


    loadResult(data){
        this.result = data;
    }

    addInnerResult(data){
        this.innerResult = data;
    }
    removeInnerResult(){
        this.innerResult = [];
    }

    constructor() {
        makeAutoObservable(this)
    }

}



export default new SupplyStore();