import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  root()
)

function root() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}