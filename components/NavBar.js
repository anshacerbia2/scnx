import styles from '../styles/Navbar.module.scss';
import logo from '../public/images/agroplatform-white.png';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className={styles.sticky}>
      <div className="container">
        <div className={styles.stickyWrapper}>
          <Link href="/">
            <Image
              src={logo}
              height={45}
              layout='fixed'
              alt='background'
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
