import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <a href="/index2">index2</a>
      <a href="/backend/dashboard">/backend/dashboard</a>
      <h1 style={{ color: "red" }}>Index page</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi qui,
        pariatur quia facere consequatur maxime dignissimos, sapiente ratione
        velit eum temporibus omnis, commodi placeat! Expedita cumque laudantium
        magnam facilis velit.
      </p>
      <img src="/images/1.jpg" alt="" widht="200" />
    </div>
  );
}
