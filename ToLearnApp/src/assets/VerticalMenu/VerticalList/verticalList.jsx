import styles from "./verticalList.module.css"
import ListElementPreview from "./listElementPreview/listElementPreview"

export default function VerticalList({listTitle, inputArray})
{
    return(
        <div className={styles.verticalList}>
            <div className={styles.title}>
            <h3>{listTitle}</h3>
            </div>

            <div>
                {inputArray.map((element, index) => (
                <div
                    key={index}>
                        <ListElementPreview 
                

                    elementTitle={element.title}
                />
          
                </div>
                ))
                
                    
                }
            </div>
        </div>
    )

}