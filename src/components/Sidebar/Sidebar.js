import Image from "next/image";
import Link from "next/link";
import {useState} from 'react';

function Sidebar() {

  const [toggleMenu, setToggleMenu] = useState(false);


  const handleToggleMenu = () => {
    console.log('clicked');
      setToggleMenu(previousState => !previousState);
  }

  return (
    <nav>
      <div className="nav__logo">
          <Image src="/decrypt-mark-100.png" alt="decrypt" width="40px" height="40px"></Image>
          <h2>Decrypt 2.0</h2>
      </div>

    
      <div className="nav__login">
        <Link href="/login">Log in</Link>
        <Link href="/signup">Sign up</Link>
      </div>

      <div className="nav__menu">
        <h3 onClick={handleToggleMenu}>Menu</h3>
        <div className={toggleMenu ? 'hide' : ''}>
        <Link href="/news">News</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/features">Features</Link>
        <Link href="/prices">Coins</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/videos">Videos &amp; Podcasts</Link>
        <Link href="/rollup">The Rollup</Link>
        <Link href="/collection">Collections</Link>
        </div>
      </div>

      <div className="nav__search">
        <Link href="/search">Search</Link>
      </div>

      <div className="nav__about">
        <Link href="about">About</Link>
      </div>
    </nav>
  );
}

export default Sidebar;
