import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


// hardcoded user data.
const loggedInUser = {
  id: '1zx-casd123-asdzxc132',
  name: 'Lakindu Hewawasam',
  role: 'customer'
 }

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const { role } = loggedInUser;
   
      // provides the route configuration options.
      const { routeConfig } = route;

      // provides the path of the route.
   //  const { path } = routeConfig as Route; 
   if (role === 'adminn') {
    // if user is administrator and is trying to access admin routes, allow access.
      return true;
    }
    this.router.navigateByUrl('/forbiddenn'); 
    return false;
  }
  
}
