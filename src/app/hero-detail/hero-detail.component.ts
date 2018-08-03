import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';
// 保存着到这个 HeroDetailComponent 实例的路由信息。
// 这个组件对从 URL 中提取的路由参数感兴趣。 其中的 id 参数就是要现实的英雄的 id
import {ActivatedRoute} from '@angular/router';
// location 是一个 Angular 的服务，用来与浏览器打交道。
// 稍后，你就会使用它来导航回上一个视图
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // hero 属性必须是一个带有 @Input() 装饰器的输入属性，
  // 因为外部的 HeroesComponent 组件将会绑定到它
  // <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  getHero(): void {
//     route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
// paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id。
// 路由参数总会是字符串。 JavaScript 的 (+) 操作符会把字符串转换成数字，英雄的 id 就是数字类型。
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnInit() {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

}
