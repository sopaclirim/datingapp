import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HasRoleDirective } from '../_directives/has-role.directive';

@Component({//ktu  mrena mujm me shkru direkt templaten e komponentes edhe stilin, po ne kete rast i kemi qit veq linkat ku o komponenta dhe stili i saj
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, HasRoleDirective],
  templateUrl: './nav.component.html', 
  styleUrl: './nav.component.css'
})

//ktu e shkrujm logjiken e kodit deklarimin e variablave , metodat etj
export class NavComponent {
  accountService = inject(AccountService); //injektimi i AccountService prej file-it service ne folderin app
  private router = inject(Router);
  private toastr = inject(ToastrService);
  model: any = {};

  login(){
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members')
      },
      error: error => this.toastr.error(error.error)
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}