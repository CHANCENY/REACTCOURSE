const Header = ({title, Link}) => {
  return (
    <Link className="navbar-brand" to="/">{title}</Link>
  )
}

export default Header