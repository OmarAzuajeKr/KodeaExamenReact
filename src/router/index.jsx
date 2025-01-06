import { Routes, Route } from "react-router"
import { HomePage } from "../pages/HomePage"
import { ItinerariesPage } from "../pages/ItinerariesPage";
import { DetailsPage } from "../pages/DetailsPage";



function Router(){
    return (
       <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/details/:legId1/:legId2" element={<DetailsPage />} />
        <Route path="/itineraries" element={<ItinerariesPage />} />
       </Routes>
    )
}

export default Router;