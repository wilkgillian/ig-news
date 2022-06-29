/* eslint-disable @next/next/link-passhref */
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image
            src="/imagens/logo.svg"
            alt="Ig.News"
            width="100%"
            height="100%"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
