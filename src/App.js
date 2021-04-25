import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactFontLoader from 'react-font-loader';

//components
import Navigation from './Navigation';
import Products from './Products';
import Forum from './Forum';
import Shopping_Basket from './Shopping_Basket';

//styles ()
import './styles/App.css';

//import logo
import logo from '../src/images/EyeBrowLogo.jpg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className="navigation-box">
                        <Navigation />
                    </div>
                    <div className="logo-box">
                        <img className="eyebrow-logo" src={logo}/>
                    </div>
                </header>
                <main className="content">
                    <div className="preview"></div>
                    <Switch>
                        <Route path="/" component={Products} exact />                
                        <Route path="/forum" component={Forum} />
                        <Route path="/shopping_basket" component={Shopping_Basket} />                                                        
                    </Switch>
                </main>
                <footer className="footer">
                    <div className="rights">
                        <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' />
                        <div className="rights-box" style={{ fontFamily: 'Work Sans' }}>
                            <h1>POUŽITÉ ZDROJE</h1>
                            <h2>Logo</h2>
                            <p>Link na zdroj (source link): <a href='https://pngio.com/PNG/a104248-eyebrow-logo-png.html'>Eyebrow logo from pngio.com</a></p>
                            <h2>Lashes and Brows</h2>
                            <p>Link na zdroj (source link): <a href='https://pngtree.com/so/eyes-clipart'>eyes clipart png from pngtree.com</a></p>
                            <h2>Titulné fotky</h2>
                            <p>Different cosmetics types scattered beige table (source link): <a href='https://www.freepik.com/photos/background'>Background photo created by freepik - www.freepik.com</a></p>
                            <p>Professional cosmetics with copy space (source link): <a href='https://www.freepik.com/photos/beauty'>Beauty photo created by freepik - www.freepik.com</a></p>
                            <h2>Produkty</h2>
                            <p><a href='https://makeup-api.herokuapp.com/api/v1/products.json?product_category=palette&product_type=eyeshadow'>Makeup API - source link</a></p>
                        </div>
                    </div>
                    <div className="design">
                        <div className="design-box">
                            <strong>Návrh a design pripravil:</strong> Martin Gabčo
                            &nbsp; &nbsp;
                            &copy; 2021
                        </div>
                    </div>
                </footer>
            </div>
        );
    };
};
 
export default App;