import Bootsc from "./Bootsc";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="container">
      <p className="text-center">copyright &copy;{date.getFullYear()}</p>
    </footer>
  )
}

export default Footer