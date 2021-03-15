import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ActiveLink } from './ActiveLink';
import cn from './Navbar.module.css';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(0);

  const normalRoutes = [
    { route: '/services', label: 'services', featured: true },
    // { route: '/about', label: 'about', featured: false },
  ];

  const normalLinks = normalRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <a className={`${cn.nav_item} ${i.featured && cn.featured_nav_item}`}>{i.label}</a>
    </ActiveLink>
  ));

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <nav className={cn.navbar}>
        <div className={cn.inner_nav}>
          <div className={cn.logo}>
            <Link href="/">logo</Link>
          </div>
          <div>{normalLinks}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
