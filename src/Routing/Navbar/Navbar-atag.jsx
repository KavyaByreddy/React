import React from 'react'
class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href="#" className='navbar-brand'>React Appl</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><a className='nav-link' href="/index">Home</a></li>
                    <li><a className='nav-link' href="/about">About</a></li>
                    <li><a className='nav-link' href="/servcie">Services</a></li>
                    <li><a className='nav-link' href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    }
}
export default Navbar