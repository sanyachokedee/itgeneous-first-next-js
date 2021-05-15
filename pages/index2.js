import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #232323;
  color: #fff;
  border-radius: 10px;
  font-size: 30px;
  padding: 10px;
  width: 150px;
  cursor:pointer;
  &:hover{
    background-color: tomato;
  }
`

export default function Home() {
  return (
    <div className={styles.container}>
        <h1 style={{color:'red'}}>Index page</h1>
        <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui, pariatur quia facere consequatur maxime dignissimos, sapiente ratione velit eum temporibus omnis, commodi placeat! Expedita cumque laudantium magnam facilis velit.</p>
        <img src="/images/1.jpg" alt="" widht="200"/>
        <br></br>
        <Button>Submit</Button>
    </div>
  )
}
