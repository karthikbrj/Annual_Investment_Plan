import { Component } from '@angular/core';
import { UserInputComponent } from "../user-input/user-input.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
