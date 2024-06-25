# How-To-Learn-Angular-With-ChatGPT
 
https://angular.dev/api

## ng new angular-tour-of-heroes --no-standalone
###  --no-standalone 指的是这个项目是非独立的component

# 总结
传统模块化系统：组件、指令和管道在模块中声明，模块中声明的所有内容在该模块内都可用，无需在每个组件中单独导入。
独立组件系统：每个组件需要显式地导入其依赖的其他组件或指令，使依赖关系更加明确和直观。
这两种方式各有优缺点，选择哪种方式取决于你的项目需求和规模。独立组件系统适用于较小的应用程序或特定场景，而传统模块化系统更适用于大型和复杂的应用程序。