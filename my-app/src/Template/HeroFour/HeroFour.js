import React from "react";
import styles from "./styleHF.module.css"

export default function HeroThree(){
    return (
    <div className={styles.hero_Four}>
    <div className={styles.Hero_imgFour}></div>
    <div className={styles.categoriesFour}><div className={styles.InWorld} >в мире</div></div>
    <div className={styles.news_Four}> Побежали побежали, наши пальчики устали</div>
    <div className={styles.avtor_Four}>от Пользователя 1 - 21 янв. 2021</div>
    </div>
    )
}