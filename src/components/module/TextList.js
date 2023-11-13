import styles from "./TextList.module.css";
import {MdOutlineLibraryAdd} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";

function TextList({title, profileData, setProfileData, type}) {
  const chnageHandler = (e, index) => {
    const {value} = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({...profileData, [type]: list})
  }

  const addHandler = () => {
    setProfileData({...profileData,[type]: [...profileData[type], ""]})
  }

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index,1);
    setProfileData({...profileData, [type]: list})
  }
  
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input type="text" onChange={(e) => chnageHandler(e, index)} />
          <button onClick={() => deleteHandler(index)}>
            <AiOutlineDelete />
            delete
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        <MdOutlineLibraryAdd />
        add
      </button>
    </div>
  );
}

export default TextList;