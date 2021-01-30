import {Component} from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{
  phrase:any;
  showPhrase:boolean;
  characters: string[];

  constructor() {
    this.phrase = {
      author: 'Peter Parker',
      message: 'Un gran poder conlleva una gran responsabilidad'
    }
    this.showPhrase = true;
    this.characters = ['Spiderman', 'Venon', 'Dr. Octupus'];
  }

}
