import { Component, OnInit } from '@angular/core';
import { AuthClientConfig, AuthService } from '@auth0/auth0-angular';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { json } from 'express';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;
  profileJson: string = null;
  allData:any = null;
  responseJson: string;
  audience = this.configFactory.get()?.audience;
  hasApiError = false;

  constructor(public auth: AuthService, 
    private api: ApiService, 
    private configFactory: AuthClientConfig) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2),
      this.allData = JSON.parse(this.profileJson)
      )
    );
   
  }

  pingApi() {
    this.api.ping$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => this.hasApiError = true,
    });
  }
  order(pizzaname){
    this.api.placeOrder$(pizzaname).subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => this.hasApiError = true,
    });
  }

}
