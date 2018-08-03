import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // 这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器
  // forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})

export class AppRoutingModule {
}
