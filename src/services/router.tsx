import { createRootRoute, createRouter, createRoute } from '@tanstack/react-router';
import AppLayout from '../App';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import ApplyLeavePage from '../pages/ApplyLeavePage';
import MyLeavesPage from '../pages/MyLeavePages';
import UsersPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';

const rootRoute = createRootRoute({
  component: AppLayout
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage
});

const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/apply',
  component: ApplyLeavePage
});

const leavesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leaves',
  component: MyLeavesPage
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/users',
  component: UsersPage
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    loginRoute,
    profileRoute,
    applyRoute,
    leavesRoute,
    usersRoute
  ])
});