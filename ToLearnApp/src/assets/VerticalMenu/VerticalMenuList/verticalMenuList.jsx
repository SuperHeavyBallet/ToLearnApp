import styles from "./verticalMenuList.module.css"
import ListElementPreview from "../VerticalList/listElementPreview/listElementPreview"

export default function VerticalMenuList( { listTitle, listArray } )
{
    return(
        <div>
            <h3>{listTitle}</h3>

            
            <div>
                {listArray.map((element, index) => (
                    <h3 className={styles.element}
                        key={index}
                    >{element.title}</h3>
                ))}
            </div>
        </div>
    )
}