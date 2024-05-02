import styles from "./navBarLink.module.css"

export default function NavBarLink( { linkText, linkAddress } ){
    return(
        <div className={styles.linkElement}>
            <a href={linkAddress}> 
            <h3>{linkText}</h3>
            </a>
        </div>
    );
}