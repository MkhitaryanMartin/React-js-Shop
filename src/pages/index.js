
import Allproduct from "./AllProduct";
import Home from "./Home";
import Shop from "./Shop";
import Bookmark from "./Bookmark";
import Login from "./Login";
import Join from "./Join";
import ProductDetals from "./ProductDetals";
import Outlet from "./outlet.js"
import { createRef } from "react";
import Require from "../HOC/require";
import { createBrowserRouter, useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group"
import Header from "./Header";
import Footer from "./Footer";
export {
  Allproduct,
  Home,
  Shop,
  Bookmark,
  Login,
  Join,
  ProductDetals,
  Outlet
}

export const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/allproduct', name: 'About', element: <Allproduct />, nodeRef: createRef() },
  { path: '/shop', name: 'About', element: <Shop />, nodeRef: createRef() },
  { path: '/bookMark', name: 'About', element: <Bookmark />, nodeRef: createRef() },
  { path: 'product/:id', name: 'About', element: <Require><ProductDetals /></Require>, nodeRef: createRef() },
  { path: '/login', name: 'About', element: <Login />, nodeRef: createRef() },
  { path: '/join', name: 'About', element: <Join />, nodeRef: createRef() },

]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

export function Example() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>

      <div >
        <Header />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                <main>{currentOutlet}</main>
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <Footer />
    </>
  )
}