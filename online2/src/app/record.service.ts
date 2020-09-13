import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }
  getData() {
    return  [
      {
      name: 'Sai',
      online: true
      },
      {
        name: 'Nani',
        online: false
      },
      {
        name: 'Sunny',
        online: true
      },
      {
       name: 'Sai',
       online: true
       },
       {
         name: 'Nani',
         online: false
       },
       {
         name: 'Sunny',
         online: true
       },
       {
         name: 'Sai',
         online: true
         },
         {
           name: 'Nani',
           online: false
         },
         {
           name: 'Sunny',
           online: true
         }
    ]
  }
}
