import {makeAutoObservable} from "mobx";

class EmployeesStore {
    result = []


    loadEmployees(data){
        this.result = data
    }

    constructor() {
        makeAutoObservable(this)
    }


}



export default new EmployeesStore();