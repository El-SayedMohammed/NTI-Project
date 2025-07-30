import { inject } from '@angular/core';
import { UserService } from './user';
import { Router, CanActivateFn } from '@angular/router';

export const authguard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
