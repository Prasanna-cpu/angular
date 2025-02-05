import {Component} from '@angular/core';
import {HttpComponent} from "./components/http/http.component";

@Component({
    selector: 'app-root',
    imports: [HttpComponent],
    templateUrl: './app.component.html',
    standalone: true,
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'angular';
}
