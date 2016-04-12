import {register, ui} from 'platypus';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    hasOwnContext = true;
    
    context: any = {
        modal: false,
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
