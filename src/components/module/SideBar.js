import { HiFilter } from "react-icons/hi";
import styles from "./SideBar.module.css";
import Link from "next/link";

function SideBar() {
  const queries = [
    { villa: "villa" },
    { apartment: "apartment" },
    { store: "store" },
    { office: "office" },
  ];
  return (
    <div className={styles.container}>
      <p>
        Grouping
        <HiFilter />
      </p>
      <Link href="/buy-residential">all </Link>
      {queries.map((query,i) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(query) },
          }}
          key={i}
        >
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
