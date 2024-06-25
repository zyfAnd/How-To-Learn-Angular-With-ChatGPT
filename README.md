# How-To-Learn-Angular-With-ChatGPT
  [[Angular API Doc](https://angular.dev/api)]

**创建新的angular project **

--no-standalone 指的是这个项目是非独立的component
```console
ng new my-angular-project --no-standalone 
```


```console
ng generate component my-component
```



## 独立组件项目和非独立组件项目总结

传统模块化系统：组件、指令和管道在模块中声明，模块中声明的所有内容在该模块内都可用，无需在每个组件中单独导入。

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  template: '<app-user-profile/>',
  styleUrl: './hello-component.component.scss'
})
export class HelloComponentComponent {

}
```

独立组件系统：每个组件需要显式地导入其依赖的其他组件或指令，使依赖关系更加明确和直观。

```javascript
import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [UserProfileComponent],
  template: '<app-user-profile/>',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {
    username = 'Yanfu'
}

```

这两种方式各有优缺点，选择哪种方式取决于你的项目需求和规模。独立组件系统适用于较小的应用程序或特定场景，而传统模块化系统更适用于大型和复杂的应用程序。