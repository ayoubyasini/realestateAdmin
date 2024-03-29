import DashboardCard from "../module/DashboardCard";
import styles from "./MyProfilesPage.module.css";

function MyProfilesPage({profiles}) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>No ads have been registered</p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage