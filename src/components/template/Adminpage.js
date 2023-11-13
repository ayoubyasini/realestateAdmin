import AdminCard from "./AdminCard";
import styles from "./Adminpage.module.css";

function Adminpage({profiles}) {
  return (
    <div>
      {profiles.length ? null : <p className={styles.text}>There are no ads</p>}
      {profiles.map((i) => (
        <AdminCard data={JSON.parse(JSON.stringify(i))} key={i} />
      ))}
    </div>
  );
}

export default Adminpage;