import Link from "next/link";
import styles from "./navBar.module.css";

const NavBar = () => (
  <nav className={styles.nav}>
    <div className={styles.navContent}>
      <Link href="/" className={styles.logoUrl}>
        <h3 className={styles.logoPlaceholder}>[ Logo goes here ]</h3>
      </Link>
      <ExternalLink href="https://github.com/axrez">Github</ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/emil-oestergaard/">
        LinkedIn
      </ExternalLink>
      <ExternalLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        ?
      </ExternalLink>
    </div>
  </nav>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => (
  <a href={href} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

export default NavBar;
