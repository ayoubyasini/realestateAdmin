"use client";

import { useRouter } from "next/navigation";
import RadioList from "../module/RadioList";
import TextInput from "../module/TextInput";
import TextList from "../module/TextList";
import CustomDatePicker from "../module/CustomDatePicker";
import styles from "./AddProfilePage.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function AddProfilePage({ data }) {
  const router = useRouter()
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) setProfileData(data);
  }, [data]);

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      console.log("success", data);
      toast.success(data.message);
      router.push("/dashboard/my-profiles");
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true)
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: {"Content-Type": "application/json"}
    });
    const data = await res.json();
    setLoading(false)
    if(data.error) {
      toast.error(data.error)
    }else{
      toast.success(data.message)
      router.push("/dashboard/my-profiles");
      router.refresh()
    } 
  };

  return (
    <div className={styles.container}>
      <h3>{data ? "Edit ad" : "Advertisement registration"}</h3>
      <TextInput
        title="title"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="description"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="location"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="phone"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="price"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="realState"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="amenities"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="rules"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading ? (
        <ThreeDots
          color="#304ffe"
          ariaLabel="three-dots-loading"
          visible={true}
          wrapperStyle={{ margin: "auto" }}
          height={45}
        />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          Edit ad
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          Advertisement registration
        </button>
      )}
      <Toaster />
    </div>
  );
}

export default AddProfilePage;
