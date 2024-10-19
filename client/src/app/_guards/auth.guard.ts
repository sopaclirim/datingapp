import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

//auth guards i permban angulari , qe me i mbrojt routat prej perdoruesve qe nuk i permbushin kushtet per me kalu te ato routa, si pershembull nese sje i kycur nuk mundesh mi pa disa sene etj. Kjo pra eshte e mire te perdoret por nuk mjafton, siguria e vertet e aplikacionit eshte ne backend ku perdorim middlewares, por per disa arsye duhet qe edhe ne frontend(angular) ta perdorim auth guard:

/** Auth Guard përmirëson përvojën e përdoruesit duke parandaluar navigimin në rrugë të mbrojtura pa nevojën e një ndërveprimi me backend-in.
 * 
Pa Auth Guard, përdoruesit do të provojnë të hyjnë në faqe ku nuk kanë qasje dhe do të përballen me mesazhe gabimi ose faqe boshe, duke krijuar konfuzion dhe një përvojë më të keqe.

Përdorimi i Auth Guard gjithashtu redukton thirrjet e panevojshme API dhe e bën kodin më të thjeshtë për t'u mirëmbajtur në frontend.

Pra, Auth Guard nuk është kritik për sigurinë, por është shumë i dobishëm për një përvojë të mirë të përdoruesit dhe për të parandaluar situata të panevojshme.**/
export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  if(accountService.currentUser()){
    return true;
  }else{
    toastr.error('You shall not pass!');
    return false;
  }
  return true;
};
