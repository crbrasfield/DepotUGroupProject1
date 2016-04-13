import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');


    context: any = {
        modal: false,
        modalMobile: false
    };
    
    toggleModal() {
        if (this.context.modal == false) {
        this.context.modal = true;
        } else {
            this.context.modal = false;
        }
    }
     toggleModalMobile() {
        if (this.context.modalMobile == false) {
        this.context.modalMobile = true;
        } else {
            this.context.modalMobile = false;
        }
    }
}



register.viewControl('promotions-vc', PromotionsViewControl);
