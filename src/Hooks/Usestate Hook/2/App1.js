import React from 'react'
import {Link,Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Message from './AllHooks/Message'
import ProductOne from './Product/ProductOne'
import ProductTwo from './Product/ProductTwo'
import Digital from './AllHooks/Digital'
const App = () => {
  return (
    <div>
        <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="#" className="navbar-brand">React Hooks</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link className="nav-link" to="state">State</Link></li>
                    <li><Link className="nav-link" to="classEx">Product - State-C</Link></li>
                    <li><Link className="nav-link" to="funEx">Product - State-F</Link></li>
                    <li><Link className="nav-link" to="digitalc">Digital</Link></li>
                </ul>
            </div>
        </nav>
         <Routes>
                <Route path="/state" element={<Message/>}/>
                <Route path="/classEx" element={<ProductOne/>}/>
                <Route path="/funEx" element={<ProductTwo/>}/>
                <Route path="/digitalc" element={<Digital/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App