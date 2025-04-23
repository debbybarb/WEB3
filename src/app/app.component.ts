import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AjaxComponent } from "./ajax/ajax.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AjaxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
