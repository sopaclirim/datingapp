import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if (component.editForm?.dirty) {
    return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
  }
  return true;
};

//Kjo guard sherben, kur useri eshte duke edituar te dhenat e tij, dhe eshte duke shkruar ne ndonje fushe , papritur klikon ne nje faqe tjeter, ky guard e pyet a deshironi te dilni nga kjo faqe sepse si keni ruajtur ende ndryshimet qe jeni duke i bere, si facebooku qe na bon.

