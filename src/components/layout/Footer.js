import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>Buying and renting property</h3>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className={styles.lists}>
        <ul>
          <li>Legal tariff</li>
          <li>quick access</li>
          <li>Expert consultants</li>
          <li>Affidavit in person</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;