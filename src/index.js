import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from "react-redux"
import store from './store/store'


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals()
