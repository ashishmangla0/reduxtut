import { NavLink } from "react-router-dom"

const Header = () =>{
return(
    <header>
        <nav className="header_nav">
      <NavLink to="/" className={'header_link'}>
        Counter
      </NavLink>
      <NavLink to="/about" className={'header_link'}>
        About
      </NavLink>
      {/* <NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink> */}
    </nav>
    </header>
)
}

export default Header