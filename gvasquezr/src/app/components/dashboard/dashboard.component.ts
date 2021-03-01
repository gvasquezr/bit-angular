import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    get userEmail(): string {
        return this.authService.isLoggedIn ? this.authService.getUser().email : "x";
    }
}