import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-roles',
    imports: [FormsModule],


    templateUrl: './roles.component.html',
    standalone: true,
    styleUrl: './roles.component.css'
})
export class RolesComponent {
    testValue: string = "Angular"
    firstName: string = "Angular"
    angularVersion = "v18"

    version: number = 18

    isActive: boolean = false

    currentDate: Date = new Date()

    inputType: string = "radio"

    selectedState: string = ""

    alerter() {
        window.alert("Hello Angular")
    }

}
