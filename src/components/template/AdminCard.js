"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import styles from "./AdminCard.module.css";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const resault = await res.json();
    if (resault.message) {
      toast.success(resault.message);
      router.refresh();
    }
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/advertisingdelete/${_id}`, {
      method: "DELETE",
    });
    const resault = await res.json();
    if (resault.message) {
      toast.success(resault.message);
      router.refresh();
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.properties}>
          <span>{location}</span>
          <span>{price}</span>
        </div>
        <button onClick={publishHandler}>release</button>
        <button onClick={deleteHandler} className={styles.buttonDelete}>
          Remove ad
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default AdminCard;
