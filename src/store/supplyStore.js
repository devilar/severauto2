import {makeAutoObservable} from "mobx";

class SupplyStore {
    result = [
        {id:1, numberAndDate:'5149543 от 21.06.2021', quantity: '51500', supplyDate:'21.08.2021', itemTitle:'Зимние шины повышенного качества', stock:'Butovo'},
        {id:2, numberAndDate:'5149543 от 21.06.2021', quantity: '51500', supplyDate:'21.08.2021', itemTitle:'Зимние шины повышенного качества', stock:'Butovo'},
        {id:3, numberAndDate:'5149543 от 21.06.2021', quantity: '51500', supplyDate:'21.08.2021', itemTitle:'Зимние шины повышенного качества', stock:'Butovo'},
        {id:4, numberAndDate:'5149543 от 21.06.2021', quantity: '51500', supplyDate:'21.08.2021', itemTitle:'Зимние шины повышенного качества', stock:'Butovo'},
        {id:5, numberAndDate:'5149543 от 21.06.2021', quantity: '51500', supplyDate:'21.08.2021', itemTitle:'Зимние шины повышенного качества', stock:'Butovo'},
        {id:6, numberAndDate:'5149543 от 21.06.2021', quantity: '51500', supplyDate:'21.08.2021', itemTitle:'Зимние шины повышенного качества', stock:'Butovo'},

    ]
    innerResult = [
        {id:1, itemRn:'RN5421353',itemType:'Зимние шины',itemTitle:'Зимние шины повышенного качества', quantity:'512', valutePrice:'22000', rubValutePrice:'1260000',supplyDate:'21.05.2021', stockName:'Южное Бутово'},
        {id:2, itemRn:'RN5421353',itemType:'Зимние шины',itemTitle:'Зимние шины повышенного качества', quantity:'512', valutePrice:'22000', rubValutePrice:'1260000',supplyDate:'21.05.2021', stockName:'Южное Бутово'},
        {id:3, itemRn:'RN5421353',itemType:'Зимние шины',itemTitle:'Зимние шины повышенного качества', quantity:'512', valutePrice:'22000', rubValutePrice:'1260000',supplyDate:'21.05.2021', stockName:'Южное Бутово'},
        {id:4, itemRn:'RN5421353',itemType:'Зимние шины',itemTitle:'Зимние шины повышенного качества', quantity:'512', valutePrice:'22000', rubValutePrice:'1260000',supplyDate:'21.05.2021', stockName:'Южное Бутово'},
        {id:5, itemRn:'RN5421353',itemType:'Зимние шины',itemTitle:'Зимние шины повышенного качества', quantity:'512', valutePrice:'22000', rubValutePrice:'1260000',supplyDate:'21.05.2021', stockName:'Южное Бутово'},
    ]

    constructor() {
        makeAutoObservable(this)
    }

}



export default new SupplyStore();