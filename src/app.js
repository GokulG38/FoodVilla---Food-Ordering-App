import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/error.js";
import Contacts from "./components/Contacts.js";
import RestaurantMenu from "./components/Restaurant menu.js";
import { Shimmer } from "./components/shimmer.js";
import Instamart from "./components/Instamart.js";
import Footer from "./components/Footer.js";
import UserContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import store from "./components/store.js";
import Cart from "./components/Cart.js";


const About = lazy(() => import("./components/about.js"))


const AppLayout = () => {
    const [user, setUser] = useState({
        name: "",
        email: "newemail"

    })
    return (
        <>
         
            <Provider store={store}>
                <UserContext.Provider value={{
                    user: user,
                    setUser: setUser

                }}>

<Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>

        </>
    )
}

const App = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [{
            path: "/",
            element: <Body />,

        }, {
            path: "/about",
            element: (<Suspense fallback={<Shimmer />}><About /></Suspense>),

        },
        {
            path: "/contacts",
            element: <Contacts />,

        }, {
            path: "/restaurant/:id",
            element: <RestaurantMenu />,

        }, {
            path: "/instamart",
            element: <Instamart />,

        }, {
            path: "/cart",
            element: <Cart />,

        }
        ]
    }

])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={App} />)
