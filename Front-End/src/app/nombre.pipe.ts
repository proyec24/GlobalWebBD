import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(arg);
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }
}
