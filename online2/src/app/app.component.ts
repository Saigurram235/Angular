import { Component } from '@angular/core';
import { RecordService } from './record.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online2';
  data = {}

  constructor(private myFirstService : RecordService) { 
    this.data
  }

  ngOnInit(): void {
    this.data = this.myFirstService.getData()
  }
}
