import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
    label1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
    label2: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
    label3: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
    label4: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']

    data1 = [
      [350, 450, 100],
    ];
    data2 = [
      [350, 450, 100],
    ];
    data3 = [
      [350, 450, 100],
    ];
    data4 = [
      [350, 450, 100],
    ];

}
