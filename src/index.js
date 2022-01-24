import ReactDOM from 'react-dom'; // based on the package.json file, we import ReactDOM method from react-dom 3rd party library

import './index.css'; 
import App from './App'; // here app is the component thats imported to this file

ReactDOM.render(<App />, document.getElementById('root')); // index.js is renderd first upon npm start , the root
//element-id is renderd -- look at ../public/index.html for the div id 
