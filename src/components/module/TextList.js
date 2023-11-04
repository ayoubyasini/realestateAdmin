import styles from "./TextList.module.css";
import {MdOutlineLibraryAdd} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";

function TextList({title, profileData, setProfileData, type}) {
  const addHandler = () => {
    setProfileData({...profileData,[type]: [...profileData[type], ""]})
  }
  
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, index) => (
          <div className={styles.card} key={i}>
            <input type="text"/>
          </div>
      ))}
      <button onClick={addHandler}>افزودن
      <MdOutlineLibraryAdd />
      </button>
    </div>
  )
}

export default TextList