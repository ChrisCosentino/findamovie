import Link from 'next/link';
import { NavbarContainer } from 'styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>FindAMovie</h1>

      <div>
        <Link href='/aboutMe'>About Me</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
