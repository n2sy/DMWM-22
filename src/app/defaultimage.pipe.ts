import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage',
})
export class DefaultimagePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'avatar.jpg';
    else return value;
  }
}
