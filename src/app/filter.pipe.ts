import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,name :string) {
    if (name === '' || value.length===0)  {
      return value;
    }
    const persons = [];
    //console.log(user['firstName']);
    console.log(name);
   // console.log(value);
    for (const user of value) {
      console.log(user['firstName']);
      if (user['firstName'] === name) {
        console.log(user['firstName']);
        console.log(name);
        persons.push(user);
      }
    }
    return persons;
  }

}
