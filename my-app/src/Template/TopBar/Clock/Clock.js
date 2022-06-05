import React from "react";
import styles from "./styleCLK.module.css"

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}; //state — это обычные JavaScript-объекты
    }
    // специальные методы монтировании и размонтировании:
    componentDidCatch(){}
    componentDidMount(){   //метод жизненного цикла componentDidMount()
        this.timerID = setInterval(
            () => this.tick(),
            1000
        ); }
    componentDidUpdate(){
        clearInterval(this.timerID);}
    tick(){
        this.setState({  // Метод setState() планирует изменение объекта состояния (state) компонента. Когда состояние меняется, компонент рендерится повторно.
            date: new Date()
        }); }
    render(){
        return(
<div className={styles.time}>Местное время {this.state.date.toLocaleTimeString()}.</div>
        );}
}

