import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({//ktu  mrena mujm me shkru direkt templaten e komponentes edhe stilin, po ne kete rast i kemi qit veq linkat ku o komponenta dhe stili i saj
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html', 
  styleUrl: './nav.component.css'
})

//ktu e shkrujm logjiken e kodit deklarimin e variablave , metodat etj
export class NavComponent {
  accountService = inject(AccountService); //injektimi i AccountService prej file-it service ne folderin app
  model: any = {};

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout(){
    this.accountService.logout();
  }
}