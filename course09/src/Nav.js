import Header from "./Header"
import SearchForm from "./SearchForm";
import ListNav from "./ListNav";



const Nav = ({Link, search, setSearch}) => {
  return (
    <nav className ='navbar navbar-expand-lg bg-light'>

    <div className="container-fluid">
      
    <Header title={'My React Blog'} Link ={Link} />

    <ListNav Link={Link} />

    <SearchForm search={search} setSearch={setSearch}/>

    </div>

   </nav>
  )
}

export default Nav