import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/portfolio" className="w-10 h-10 rounded-lg bg-white 
        items-center justify-center flex font-bold shawdow-md">
            <p className="blue-gradient_text">DT</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink 
                to="/about" 
                className={({ isActive }) => 
                    isActive ? 'text-blue-500' : 'text-white'}>
                About
            </NavLink>
            <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                    isActive ? 'text-blue-500' : 'text-white'}>
                Projects
            </NavLink>
            {/* <NavLink
                to="/contact"
                className={({ isActive }) => 
                    isActive ? 'text-blue-500' : 'text-white'}>
                Contact
            </NavLink> */}
        </nav>
    </header>
  )
}

export default Navbar