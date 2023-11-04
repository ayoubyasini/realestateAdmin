import styles from "./TextInput.module.css";
import { p2e } from "@/public/utils/NumberPlace";

function TextInput({
    title,
    name,
    profileData,
    setProfileData,
    textarea = false
}) {
    const ChangeHandler = (e) => {
        const {name, value} = e.target;
        setProfileData({...profileData, [name]: p2e(value)})
    };

    return (
        <div className={styles.container}>
            <p>{title}</p>
            {textarea ? <textarea name={name} value={profileData[name]} onChange={ChangeHandler}/> : <input type="text" name={name} value={profileData[name]} onChange={ChangeHandler}/>}
        </div>
    )
}

export default TextInput;