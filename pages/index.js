import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
   
        <Link href="#"><a>index</a></Link>
        <Link href="/index2"><a>index2</a></Link>
        <Link href="/backend/dashboard"><a>/backend/dashboard</a></Link>
        <Link href="/about"><a>about</a></Link>  
        <Link href="/help"><a>help</a></Link>
        <Link href="/member/dashboard"><a>memeber/Dashboard</a></Link>


      <h1 style={{ color: "red" }}>Index page</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui,
        pariatur quia facere consequatur maxime dignissimos, sapiente ratione
        velit eum temporibus omnis, commodi placeat! Expedita cumque laudantium
        magnam facilis velit.
      </p>
      <img src="/images/1.jpg" alt="" widht="200" />

      {/* ใช้แบบ local นี้เท่านั้น */}
      {/* <style global> // ใช้ได้แบบ global */}
      {/* <style jsx>
        {
          
        }
      </style> */}
    </div>
  );
}
