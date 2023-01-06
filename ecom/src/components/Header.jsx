import "../style/header.css";
export default function Header() {
  return (
    <header>
      <div>
        <img src="./logo.png" alt="" />
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search anything" />
        <button>
          <a href="">Search</a>
        </button>
      </div>
      <div className="signin">
        <ul>
          <li>
            <a href="">Sign In</a>
          </li>
          <li>
            <a href="">Favourites</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
