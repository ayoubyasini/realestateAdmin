import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "../module/CategoryCard";
import styles from "./HomePage.module.css";
import { categories } from "@/public/constants/strings";
import { services } from "@/public/constants/strings";
import { cities } from "@/public/constants/strings";

function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>Buying and renting property</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <span>{i}</span>
                <FiCircle />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i]} name={i} key={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>Most visited cities</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <></>
              <span>{i}</span>
              <FaCity />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
