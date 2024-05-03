import MenuLink from "./MenuLinks/menuLink";
import style from "./verticalMenu.module.css"
import VerticalMenuList from "./VerticalMenuList/verticalMenuList";

export default function VerticalMenu(
    {
        highPriorityCards,
        lowPriorityCards,
    }
)
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
            
            <VerticalMenuList 

                listTitle="High Priority" 
                listArray={highPriorityCards}
            />
            <VerticalMenuList 
                listTitle="Low Priority" 
                listArray={lowPriorityCards}
            />
            </div>
        </div>
    )
}