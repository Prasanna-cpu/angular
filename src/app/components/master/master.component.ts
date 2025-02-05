import {Component} from '@angular/core';
import {RolesComponent} from "../roles/roles.component";
import {DesignationComponent} from "../designation/designation.component";
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-master',
    imports: [
        RolesComponent,
        DesignationComponent,
        NgIf,
        NgClass
    ],
    templateUrl: './master.component.html',
    standalone: true,
    styleUrl: './master.component.css'
})
export class MasterComponent {

    currentComponent: string = "Roles"

    changeTab(tab: string) {
        this.currentComponent = tab
    }

}
