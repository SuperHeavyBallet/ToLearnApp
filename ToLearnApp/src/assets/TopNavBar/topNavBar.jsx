import NavBarLink from "./NavBarLinks/navBarLink";
import styles from "./topNavBar.module.css"

export default function TopNavBar()
{
    return(
        <div className={styles.topNavBar}>
            <div className={styles.navBarLogo}>
                <h3>LEARNING LIST</h3>
            </div>
            <div className={styles.navBarLinks}>
                <NavBarLink linkText="Link 1" linkAddress="/"/>
                <NavBarLink linkText="Link 1" linkAddress="/"/>
                <NavBarLink linkText="Link 1" linkAddress="/"/>
            </div>
        </div>
    )
}