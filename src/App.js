import React from 'react';
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import FraguranContainer from './components/fraguranContainer/fraguranContainer';
const App = () => {
    return (
       < div >
        <Header />
        <TopContainer />
    <ProductsContainer />
    <FraguranContainer />
        </div>
    );
};
export default App;