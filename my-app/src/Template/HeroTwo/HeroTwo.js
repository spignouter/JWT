import React from "react";
import styles from "./styleHT.module.css"

export default function HeroOne(){
    return (
<div className={styles.hero_Two}>
    <div className={styles.hero_baseTwo}></div>
    <div className={styles.Hero_imgTwo}></div>
    <div className={styles.categoriesHero_Two}><div className={styles.InWorld}>в мире</div></div>
    <div className={styles.news_HeroTwo}> Говорим о многом всяком интересном</div>
    <div className={styles.avtor_HeroTwo} >от Пользователя 1 - 21 янв. 2021</div>
    </div>
    )
};
