import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
class MainGuardService {

  constructor(private router: Router) {}
  canActivate(): boolean {
    const authShowing = localStorage.getItem('auth');
    const baseShowing: string = localStorage.getItem('base');
    if (!authShowing || !baseShowing) {
      return this.toLogin();
    } else {
      const base: AuthData[] = JSON.parse(baseShowing);
      const token: string = JSON.parse(authShowing);
      if (!base.length || !token) {
        return this.toLogin();
      }

      const account: AuthData[] = base.filter((item: AuthData): boolean => String(token) === item.key);

      if (!account.length || account.length > 1) {
        return this.toLogin();
      }

      return true;
    }
  }

  private toLogin(): boolean {
    this.router.navigate(['auth/login']);
    return false;
  }
}

export const MainGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(MainGuardService).canActivate();
};
