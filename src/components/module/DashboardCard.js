"use client";

import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "./Card";
import toast, { Toaster } from "react-hot-toast";
import styles from "./DashboardCard.module.css";

function DashboardCard({ data }) {

  const router = useRouter()

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`)
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    })
    const dataD = await res.json();
    if (dataD.error) {
      toast.error(dataD.error);
    } else {
      toast.success(dataD.message);
      router.refresh();
    }
  }

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          <FiEdit />
          Edit
        </button>
        <button onClick={deleteHandler}>
          <AiOutlineDelete />
          Remove ad
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;