import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal} from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  currentUser = signal<User | null>(null)

  login(model:any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  }

  register(model:any){
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }

        return user;
      })
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}

//Nje angular service eshte singleton. Pra nje service krijohet kur aplikacioni yne starton, si psh kur e rifreskon faqen useri edhe pse ne nuk jemi tu e perdor aj krijohet si ta startojme aplikacionin, dhe eshte  vend i pershtatshem per me rujt state dhe me bo HTTP kerkesa(requests)
// Nje service mundemi me injektu ne komponentat qe na duhen