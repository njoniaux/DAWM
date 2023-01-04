import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-snk',
  templateUrl: './snk.component.html',
  styleUrls: ['./snk.component.css'],
})
export class SNKComponent implements OnInit {
  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    this.apiservice.obtenerData('48583').subscribe((data: any) => {
      console.log(data);
      console.log(data.data.approved);
      this.data = data.data;
    });
  }

  data: any;
}
