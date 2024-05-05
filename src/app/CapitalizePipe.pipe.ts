import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalize'
  })
export class CapitalizePipe implements PipeTransform{
    transform(value: any) {
        console.log(value);
        return value.toUpperCase();
    }
    
}