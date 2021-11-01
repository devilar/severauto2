import {makeAutoObservable} from "mobx";

class TableResult {
    trs = 555;
    tableResult = [
        {id:1,title:'srr', available:false}
    ]
    constructor() {
        makeAutoObservable(this)
    }

}

export default new TableResult();