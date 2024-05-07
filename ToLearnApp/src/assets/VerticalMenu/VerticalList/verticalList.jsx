import styles from "./verticalList.module.css"
import ListElementPreview from "./listElementPreview/listElementPreview"
import { useEffect, useState } from "react";

export default function VerticalList({listTitle, inputArray})
{

    const [ listElementCount, setListElementCount ] = useState(0);

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
                    cardDetails={inputArray[index]}
                />
          
                </div>
                ))
                
                    
                }
            </div>
        </div>
    )

}