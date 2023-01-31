
import {
  Route,
  Routes
} from "react-router-dom";
import {
  ChakraProvider,
} from "@chakra-ui/react"
import NavBar from "./components/NavBar"


import Home from "./components/Home";
import Jewlery from "./components/Jewlery";
import Scarves from "./components/Scarves";
import Clothing from "./components/Clothing";
import HairAccessories from "./components/HairAccessories";
import ProductDetails from "./components/ProductDetails";
export const App = () => (
  
  <ChakraProvider >
 <NavBar></NavBar> 

 <Routes>

 <Route path="/" element={<Home/>}/>
      <Route path="Jewlery" element={<Jewlery/>}/>
      <Route path="Scarves" element={<Scarves/>}/>
      <Route path="Clothing" element={<Clothing/>}/>
      <Route path="HairAccessories" element={<HairAccessories/>}/>
      <Route path="/products/:Id" element={<ProductDetails/>} />

  </Routes>

    
  </ChakraProvider>
)
