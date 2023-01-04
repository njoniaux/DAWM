import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-bleach',
  templateUrl: './bleach.component.html',
  styleUrls: ['./bleach.component.css'],
})
export class BleachComponent implements OnInit {
  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    this.apiservice.obtenerData('41467').subscribe((data: any) => {
      console.log(data);
      console.log(data.data.approved);
      this.data = data.data;
    });
  }

  data: any;
}
