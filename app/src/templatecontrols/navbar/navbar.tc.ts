import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import HowToPlayViewControl from '../../viewcontrols/howtoplay/howtoplay.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    hasOwnContext = true;
    
    context: any = {
        modal: false,
        home: HomeViewControl,
        howtoplay: HowToPlayViewControl,
        promotions: PromotionsViewControl,
        about: AboutViewControl
    };
    
    
    toggleModal() {
        if (this.context.modal === false) {
            body.className = "no-scroll";
           this.context.modal = true; 
        } else {
            this.context.modal = false;
            body.className = '';
        }
        
    }
    
}

let body: any = document.getElementById("body")


register.control('navbar', NavbarTemplateControl);
