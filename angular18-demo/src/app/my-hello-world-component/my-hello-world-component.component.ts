import { Component } from '@angular/core';

@Component({
  selector: 'app-my-hello-world-component',//组件选择器
  standalone: true,
  imports: [],
  templateUrl: './my-hello-world-component.component.html',//组件样板路径
  styleUrl: './my-hello-world-component.component.scss'//组件样式路径
})
export class MyHelloWorldComponentComponent {

}
