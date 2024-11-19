import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { inject } from '@angular/core';
import { ConfirmService } from '../_services/confirm.service';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
const confirmService = inject(ConfirmService);

  if (component.editForm?.dirty) {
    return confirmService.confirm() ?? false;
  }
  return true;
};

//Kjo guard sherben, kur useri eshte duke edituar te dhenat e tij, dhe eshte duke shkruar ne ndonje fushe , papritur klikon ne nje faqe tjeter, ky guard e pyet a deshironi te dilni nga kjo faqe sepse si keni ruajtur ende ndryshimet qe jeni duke i bere, si facebooku qe na bon.

