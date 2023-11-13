import DatePicker from "react-multi-date-picker";
import styles from "./customDatePicker.module.css";


function CustomDatePicker({profileData,setProfileData}) {
    const {constructionDate} = profileData;
    const changeHandler = (e) => {
        const date = new Date(e);
        setProfileData({...profileData, constructionDate: date})
    }
  return (
    <div className={styles.container}>
      <p>Date of construction of the building</p>
      <DatePicker
        value={constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustomDatePicker;