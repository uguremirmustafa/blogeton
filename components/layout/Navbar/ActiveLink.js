import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from './ActiveLink.module.css';

export const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} ${cn.selected}`;
  }

  return (
    <Link scroll={false} href={href} shallow={true}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};
