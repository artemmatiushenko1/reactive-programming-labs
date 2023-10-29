import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div>
      <p appBold>Вивчаю директиви. Директива bold</p>
      <p appItalic>Створення атрибутивних директив. Директива italic</p>
    </div>
    <div>
      <p appMouseBold>Робота з декоратором @HostListener</p>
      <p>Реагування на покажчик миші</p>
    </div>
    <div>
      <p appMouseItalic>Робота з декоратором @HostListener</p>
      <p>Реагування на покажчик миші при допомозі @HostBinding</p>
    </div>
    <div>
      <p appHostMouseBold>Робота з властивістю host (HostMouseBold)</p>
      <p>Реагування на покажчик миші при допомозі @HostBinding</p>
    </div>`,
})
export class AppComponent {}
