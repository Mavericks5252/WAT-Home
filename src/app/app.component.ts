import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports: [AppRoutingModule],
})
export class AppComponent {
  title = 'sign-in';
}
