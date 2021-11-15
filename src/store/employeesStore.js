import {makeAutoObservable} from "mobx";

class EmployeesStore {
    result = [
        {id:1, fullName: 'Иванов Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'},
        {id:2, fullName: 'Иванов Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'},
        {id:3, fullName: 'Иванов Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'},


    ]

    constructor() {
        makeAutoObservable(this)
    }

    buttonClick(data){
        console.log("TAR!!");

        this.result.push(data);

    }

}



export default new EmployeesStore();