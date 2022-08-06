// import React from 'react';
// import ReactDOM from 'react-dom';



// ###### IMPORTED COMPONENTS #######
// import App from './App';
// import SampleHooks from './Components/SampleHooks';
// import DynamicTable from './Components/DynamicTable';
// import Login from './Components/Login';
// import LoginForm from './Components/LoginForm';
// import Home from './Components/Routing Example/Home';
// import FormValidation from './Components/FormValidation';
// import UseEffectExample from './Components/UseEffectExample';
// import Header from './Components/Routing Example/Header';


// import './css/style.css'
// import * as serviceWorker from './serviceWorker';

// ######## RENDERED COMPONENTS #########
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Login/>, document.getElementById('root'));
// ReactDOM.render(<FormValidation/>, document.getElementById('root'));
// ReactDOM.render(<SampleHooks/>, document.getElementById('root'));
// ReactDOM.render(<DynamicTable/>, document.getElementById('root'));
// ReactDOM.render(<UseEffectExample/>, document.getElementById('root'));
// ReactDOM.render(<Header/>, document.getElementById('root'));
// ReactDOM.render(<LoginForm/>, document.getElementById('root'));
// ReactDOM.render(<Home/>, document.getElementById('root'));


//RENDERING FILES FROM ROUTING MAIN USING LOGIN
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Home from './Components/Routing Example/Home';
// import LoginForm from './Components/LoginForm';
// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<Router>
//     <Route exact path = "/" component = {LoginForm} />
//     <Route path = "/home/:name" component = {Home} />
// </Router>, document.getElementById('root'));
// serviceWorker.unregister();


// import reducer from './reducers/Reducer';
// var store = createStore(reducer)


// ReactDOM.render(<App element2="React"/>, document.getElementById('root'));
// ReactDOM.render(<App>
//     <li>List element</li>
//     <h3>Heading element</h3>
//     <p>Paragraph element</p>
//     <span>Span element</span>
// </App>, document.getElementById('root'));


// serviceWorker.unregister();
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
 
// ################################ MAIN INDEX FILE ############################################ 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import LoginForm from './Components/LoginForm';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoginForm/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider }  from 'react-redux';
// import  thunk  from 'redux-thunk';
// import reducer from './reducers/Reducer';
// import App from './App';
// var store = applyMiddleware(thunk)(createStore)(reducer);
// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
// serviceWorker.unregister();
