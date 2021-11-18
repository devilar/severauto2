import {makeAutoObservable} from "mobx";

class EmployeesStore {
    result = [
        {id:1, fullName: 'Барсуков Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Менеджер', status: 'активен'},
        {id:2, fullName: 'Сурикатов Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'},
        {id:3, fullName: 'Волков Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'},


    ]

    constructor() {
        makeAutoObservable(this)
    }


}



export default new EmployeesStore();