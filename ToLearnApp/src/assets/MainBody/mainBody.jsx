import CreateNewCard from "../CreateNewCard/createNewCard";
import TopNavBar from "../TopNavBar/topNavBar";
import VerticalMenu from "../VerticalMenu/verticalMenu";
import styles from "./mainBody.module.css";

export default function MainPage(){
    return(
        <div className={styles.allContent}>
            <div className={styles.topNavBar}>
                <TopNavBar />
            </div>
            <div className={styles.mainBody} >
                <VerticalMenu />
                <CreateNewCard />
            </div>
        </div>
    )
}