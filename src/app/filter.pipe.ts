import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    value: {
      name: string;
      type: string;
      status: string;
      date_d: Date;
    }[],
    selStatus: string
  ): any[] {
    if (selStatus.length == 0) {
      return value;
    } else {
      let newServers = [];
      for (let serv of value) {
        if (serv['status'] == selStatus) {
          newServers.push(serv);
        }
      }
      return newServers;
    }
  }
}
