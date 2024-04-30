import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-neight-wedding-home',
  templateUrl: './neight-wedding-home.component.html',
  styleUrls: ['./neight-wedding-home.component.scss']
})
export class NeightWeddingHomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // login(): void {
  //   const username = "user1";
  //   const password = "user_password_1234545";
  //   this.authService.login(username, password).subscribe(
  //     response => {
  //       const accessToken = response.body["access_token"];
  //       localStorage.setItem('neight_wdd_access_token', accessToken);
  //       // Redirect to a protected route or update UI as needed
  //       // TODO delete this
  //       console.warn('Login success:', response, accessToken, localStorage.getItem('neight_wdd_access_token'));
  //     },
  //     error => {
  //       console.error('Login error:', error);
  //     }
  //   );
  // }

}
