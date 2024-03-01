import './assets/css/NavigationBar.css'

function Header() {
    return (
      <div className="container_navigation_bar">
        <div className="logo_navigation"> BrainStorm </div>

        <nav className="navigation">
          <a className='navigation_link' href=""> Our Team </a>
          <a className='navigation_link' href=""> Photos </a>
          <a className='navigation_link' href=""> Store </a>
          <a className='navigation_link' href=""> Log-in </a>
        </nav>
      </div>
    );
  }
  
  export default Header;
  