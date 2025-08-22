import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store, persistor } from "./Stored/stores"; // Import the new 'persistor'
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout";

// --- Redux Persist Import ---
import { PersistGate } from 'redux-persist/integration/react';


function App(){
    return(
       <>
       <Provider store={store}>
            {/* The PersistGate delays rendering until the persisted state is loaded */}
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/Swiggy-clone" : "/"}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<SecondaryHome />}>
                            <Route path="/restaurant" element={<Restaurant />} />
                            <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
                            <Route path="/city/delhi/:id/search" element={<SearchFood />} />
                        </Route>
                        <Route path="/Checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Proxy server "https://cors-anywhere.herokuapp.com/";