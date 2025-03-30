import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header()
{
    return (
        <header className={styles.headerPage}>
            <img src={igniteLogo} alt="logo da pagina"/>
        </header>
    );
}