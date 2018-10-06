import {Component} from '@angular/core';
import {AppOneModel} from './app-one.model';

@Component({
  selector: 'app-one',
  templateUrl: 'app-one.component.html',
  styleUrls: ['app-one.component.css']
})
export class AppOneComponent {
  public name: string;
  model: AppOneModel;

  public getName(): string {
    return this.model.getName();
  }
}
