import React from "react";
import './styles/index.css'
import './styles/grid.css'
import './styles/utils.css'
import './styles/text.css'
import './styles/flex.css'
import './styles/color.css'
import SearchCity from "./components/SearchCity";
import CityList from "./components/CityList";

export const App = () => {
    return (
        <div>
            <SearchCity/>
            <CityList/>
        </div>
    )
}

export default App;
