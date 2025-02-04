import {Component} from '@angular/core';

@Component({
    selector: 'app-roles',
    imports: [],
    templateUrl: './roles.component.html',
    standalone: true,
    styleUrl: './roles.component.css'
})
export class RolesComponent {
    firstName: string = "Angular"
    angularVersion = "v18"

    version: number = 18

    isActive: boolean = false

    currentDate: Date = new Date()
}
