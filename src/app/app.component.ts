import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports: [ToolbarComponent],
})
export class AppComponent {
  title = 'sign-in';
}
