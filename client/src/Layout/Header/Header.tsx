import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <section className="Header">
      <h1>{title}</h1>
      <Navbar />
    </section>
  );
}

export default Header;
