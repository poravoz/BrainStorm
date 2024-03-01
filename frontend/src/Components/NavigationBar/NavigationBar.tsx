import './assets/css/NavigationBar.css'

function NavigationBar() {
    return (
      <div className="container">
        <div className="logo"> BrainStorm </div>

        <nav className="navigation">
          <a className='navigation_link' href=""> Our Team </a>
          <a className='navigation_link' href=""> Photos </a>
          <a className='navigation_link' href=""> Store </a>
          <a className='navigation_link' href=""> Log-in </a>
        </nav>
      </div>
    );
  }
  
  export default NavigationBar;
  