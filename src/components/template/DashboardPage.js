import styles from "./DashboardPage.module.css";

function DashboardPage({createdAt}) {
  return (
    <div className={styles.container}>
      <h3>hi 👋</h3>
      <p>Register your ads to be seen by thousands of people</p>
      <div className={styles.createdAt}>
        <p>registery date :</p>
        <span>{createdAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default DashboardPage;