import React from "react";
import styles from "./styleNB.module.css";

export default function NavBar(){
    return (
        <div className={styles.navbar} >
        <div className={styles.Rectangle_nabar}></div>
        <div className={styles.Baikal_info}>
        Baikal info
        </div>

        <div className={styles.menu_logo}>

            <div className={styles.home}>
                <a href="">ГЛАВНАЯ<img src="./arrow.png"/> </a>
            </div>

            <div className={styles.publications}>
                <a href="">ПУБЛИКАЦИИ<img src="arrow.png"/> </a>
            </div>

            <div className={styles.blogs}>
                <a href="">БЛОГИ<img src="arrow.png"/> </a>
            </div>

            <div className={styles.interesting}>
                <a href="">ИНТЕРЕСНОЕ<img src="arrow.png"/> </a>
            </div>

            <div className={styles.subscriptions}>
                <a href="">ПОДПИСКИ<img src="arrow.png"/> </a>
            </div>

        </div>

        <div className={styles.search_icon} >
            <div className={styles.vector}>
                <a href=""><img src="Vector.png"/></a>
            </div>
        </div>

        <div className={styles.open_search}>
            <div className={styles.search}>
            </div>
        </div>
        <div className={styles.hamburger}>
            <div className={styles.Line_3}>
            </div>
            <div className={styles.Line_2} >
            </div>
            <div className={styles.Line_1}>
            </div>
        </div>

    </div>
    )
}