import styles from "./listElementPreview.module.css"

export default function ListElementPreview({elementTitle,})
{
    return(
        <div className={styles.elementPreview}>
            <div className={styles.removeElement}>
                X
            </div>

            <div className={styles.elementText}>
                <div>
                    {elementTitle}
                    </div>
            </div>

            <div className={styles.completedSection}>
                    <div>
                        Yes / No
                        </div>
            </div>
            
        </div>
    )
}