import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewbox',
  templateUrl: './reviewbox.component.html',
  styleUrls: ['./reviewbox.component.scss']
})
export class ReviewboxComponent {

  dataComponent = [
    {
      title : 'A real sense of community, nurtured',
      subTitle:'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
      author:'Olga',
      studios:'Weave Studios – Kai Tak'
    },
    {
      title : 'The facilities are superb. Clean, slick, bright.',
      subTitle:'A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
      author:'Thomas',
      studios:'Weave Studios – Olympic'
    },
    {
      title : 'A real sense of community, nurtured',
      subTitle:'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
      author:'Eliot',
      studios:'Weave Studios – Kai Tak'
    }
  ]
  constructor(){}

  ngOnInit(){

  }
}
