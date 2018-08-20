import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor() {}
}
