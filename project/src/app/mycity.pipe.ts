import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycity'
})
export class MycityPipe implements PipeTransform {

  transform(value: string, cityname: string): string {
    switch(cityname){
      case 'Del':{
        return value + '  From New Delhi';
      }
    }
  }

}
