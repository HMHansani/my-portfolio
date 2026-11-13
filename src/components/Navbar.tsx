
type NavbarProps = {
  onNavigate: (page: string) => void
}

function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => onNavigate('home')}>
        Dinushi
      </h2>

      <ul>
        <li>
          <a href="#" onClick={() => onNavigate('home')}>Home</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate('about')}>About</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate('skills')}>Skills</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate('projects')}>Projects</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavigate('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
