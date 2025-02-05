import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRole} from "../../model/interface/role";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-http',
    imports: [
        NgForOf
    ],
    templateUrl: './http.component.html',
    standalone: true,
    styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit {

    http = inject(HttpClient);

    roleList: IRole[] = []

    // constructor(private http:HttpClient) {
    // }

    getAllRoles() {
        this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
            this.roleList = res.data
        })
    }

    ngOnInit(): void {
        this.getAllRoles()
    }

}
