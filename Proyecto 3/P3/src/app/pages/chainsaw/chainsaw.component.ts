import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-chainsaw',
  templateUrl: './chainsaw.component.html',
  styleUrls: ['./chainsaw.component.css'],
})
export class ChainsawComponent implements OnInit {
  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    this.apiservice.obtenerData('44511').subscribe((data: any) => {
      console.log(data);
      console.log(data.data.approved);
      this.data = data.data;
    });
  }

  data: any;
}
