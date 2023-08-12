import React from 'react'
import {Link,Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import UserApp from './UserApp/UserApp'
const App = () => {
  return (
    <div>
        <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="#" className="navbar-brand">React User App</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link className="nav-link" to="user">Users</Link></li>
                   
                </ul>
            </div>
        </nav>
         <Routes>
                <Route path="/user" element={<UserApp/>}/>
              
            </Routes>
        </Router>
    </div>
  )
}

export default App