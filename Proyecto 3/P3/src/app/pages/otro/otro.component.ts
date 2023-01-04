import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css'],
})
export class OtroComponent {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
