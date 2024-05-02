import MenuLink from "./MenuLinks/menuLink";
import style from "./verticalMenu.module.css"
import VerticalMenuList from "./VerticalMenuList/verticalMenuList";

export default function VerticalMenu()
{
    return(
        <div className={style.verticalMenu}>
            <div className={style.menuSection}>
            <h3>My Lists</h3>
            <MenuLink linkText="Programming" linkAddress="/"/>
            <MenuLink linkText="Drawing" linkAddress="/"/>
            <MenuLink linkText="Armwrestling" linkAddress="/"/>
            <MenuLink linkText="Video Editing" linkAddress="/"/>
            </div>
            <div className={style.menuSection}>
            
            <VerticalMenuList listTitle="High Priority" listArray={["Card", "Card1"]}/>
            </div>
        </div>
    )
}