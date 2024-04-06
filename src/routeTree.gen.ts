/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersRouteImport } from './routes/users.route'
import { Route as AlarmsRouteImport } from './routes/alarms.route'
import { Route as IndexRouteImport } from './routes/index.route'
import { Route as UsersCertRouteImport } from './routes/users.cert.route'
import { Route as UsersIdRouteImport } from './routes/users.$id.route'
import { Route as AlarmsCreateRouteImport } from './routes/alarms.create.route'
import { Route as AlarmsIdRouteImport } from './routes/alarms.$id.route'

// Create/Update Routes

const UsersRouteRoute = UsersRouteImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const AlarmsRouteRoute = AlarmsRouteImport.update({
  path: '/alarms',
  getParentRoute: () => rootRoute,
} as any)

const IndexRouteRoute = IndexRouteImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersCertRouteRoute = UsersCertRouteImport.update({
  path: '/cert',
  getParentRoute: () => UsersRouteRoute,
} as any)

const UsersIdRouteRoute = UsersIdRouteImport.update({
  path: '/$id',
  getParentRoute: () => UsersRouteRoute,
} as any)

const AlarmsCreateRouteRoute = AlarmsCreateRouteImport.update({
  path: '/create',
  getParentRoute: () => AlarmsRouteRoute,
} as any)

const AlarmsIdRouteRoute = AlarmsIdRouteImport.update({
  path: '/$id',
  getParentRoute: () => AlarmsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRoute
    }
    '/alarms': {
      preLoaderRoute: typeof AlarmsRouteImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      preLoaderRoute: typeof UsersRouteImport
      parentRoute: typeof rootRoute
    }
    '/alarms/$id': {
      preLoaderRoute: typeof AlarmsIdRouteImport
      parentRoute: typeof AlarmsRouteImport
    }
    '/alarms/create': {
      preLoaderRoute: typeof AlarmsCreateRouteImport
      parentRoute: typeof AlarmsRouteImport
    }
    '/users/$id': {
      preLoaderRoute: typeof UsersIdRouteImport
      parentRoute: typeof UsersRouteImport
    }
    '/users/cert': {
      preLoaderRoute: typeof UsersCertRouteImport
      parentRoute: typeof UsersRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRouteRoute,
  AlarmsRouteRoute.addChildren([AlarmsIdRouteRoute, AlarmsCreateRouteRoute]),
  UsersRouteRoute.addChildren([UsersIdRouteRoute, UsersCertRouteRoute]),
])

/* prettier-ignore-end */
