import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    console.log(arg);
    let o = value.toString();
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      console.log(post.id_pedido);
      if (post.id_pedido.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.id_pedido.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }
}
