import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller, 
        private userService: UserService,
        private router: Router) {}

    ngOnInit() {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    public exit(){
        this.userService.logout()
        .then(() => {
          this.router.navigate(['/register']);
        })
        .catch(error => console.log(error));
    }

}