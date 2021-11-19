import {makeAutoObservable} from "mobx";

class MainStore {
    constructor() {makeAutoObservable(this)}
     tc = false;


    activateTC(){
        this.tc = true;
    }
    disableTC(){
        this.tc = false;
    }

    showNotification = (place) => {
        switch (place) {
            case "tc":
                if (!this.tc) {
                    this.activateTC()
                    setTimeout( () => {
                        console.log("BAR!");
                        this.disableTC()
                    }, 4000);
                }
                break;
            default: break;
        }
    };





}



export default new MainStore();