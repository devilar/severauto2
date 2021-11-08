import {makeAutoObservable} from "mobx";

class ContractsStore {
    result = [
        {id:1, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'},
        {id:2, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'},
        {id:3, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'},
        {id:4, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'},
        {id:5, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'},

    ]

    constructor() {
        makeAutoObservable(this)
    }

    buttonClick(){
        console.log('grn!!!')
        this.result.push({id:2, number:'5149543', rn:'RN5421353', itemTitle:'Большие шины для больших машин', quantityMonthStart:'45', quantityMonthEnd:'45 000', stock:'Butovo'});

    }

}


export default new ContractsStore();