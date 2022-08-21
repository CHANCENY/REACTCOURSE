
const SearchForm = ({search , setSearch}) => {

  


  return (
    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
    <input className="form-control me-2" 
    type="search" 
    placeholder="Search post" 
    aria-label="Search" 
    id="search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
  )
}

export default SearchForm