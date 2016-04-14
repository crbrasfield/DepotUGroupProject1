import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import HowToPlayViewControl from '../../viewcontrols/howtoplay/howtoplay.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';


  document.addEventListener("DOMContentLoaded", function() {
      let nav = NavbarTemplateControl;
      console.log(nav);
  });

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    hasOwnContext = true;
    

    
    context: any = {
        modal: false,
        home: HomeViewControl,
        howtoplay: HowToPlayViewControl,
        promotions: PromotionsViewControl,
        about: AboutViewControl,
        random: 'hello this is random text'
    };
    
    getURL() {
        let url = document.URL;
        let urlShort = url.substr(url.lastIndexOf("/"))
        let abc = urlShort.slice(1);
        console.log(abc);
        if (abc === 'about'){
            this.setAbout();
        }
        if (abc === 'promotions'){
            this.setPromotions();
        }
        if (abc === 'howtoplay'){
            this.setHowToPlay();
        }
        if (abc === '') {
            this.clearAll();
        }
    }
    
    setTemplate() {
        this.getURL();
    }
    
    
    clearAll() {
        let about = document.getElementById('about');
        let promotions = document.getElementById('promotions');
        let howtoplay = document.getElementById('howtoplay');
        about.classList.remove("active");
        promotions.classList.remove("active");
        howtoplay.classList.remove("active");
    }
    setAbout() {
        let about = document.getElementById('about');
        let promotions = document.getElementById('promotions');
        let howtoplay = document.getElementById('howtoplay');
        about.classList.add("active");
        promotions.classList.remove("active");
        howtoplay.classList.remove("active");
    }
    
    setPromotions() {
        let about = document.getElementById('about');
        let promotions = document.getElementById('promotions');
        let howtoplay = document.getElementById('howtoplay');
        about.classList.remove("active");
        howtoplay.classList.remove("active");
        promotions.classList.add("active");
    }
    
    setHowToPlay() {
        let about = document.getElementById('about');
        let promotions = document.getElementById('promotions');
        let howtoplay = document.getElementById('howtoplay');
        about.classList.remove("active");
        promotions.classList.remove("active");
        howtoplay.classList.add("active");

    }
    

    

    
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

