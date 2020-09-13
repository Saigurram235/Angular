import { Component, OnInit } from '@angular/core';

import {RecordService} from '../record.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  //  data = [
  //    {
  //    name: 'Sai',
  //    online: true
  //    },
  //    {
  //      name: 'Nani',
  //      online: false
  //    },
  //    {
  //      name: 'Sunny',
  //      online: true
  //    },
  //    {
  //     name: 'Sai',
  //     online: true
  //     },
  //     {
  //       name: 'Nani',
  //       online: false
  //     },
  //     {
  //       name: 'Sunny',
  //       online: true
  //     },
  //     {
  //       name: 'Sai',
  //       online: true
  //       },
  //       {
  //         name: 'Nani',
  //         online: false
  //       },
  //       {
  //         name: 'Sunny',
  //         online: true
  //       }
  //  ]

  data = {}

  constructor(private myFirstService : RecordService) { 
    
  }

  ngOnInit(): void {
    this.data = this.myFirstService.getData()
  }

}
