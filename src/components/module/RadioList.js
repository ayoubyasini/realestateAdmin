import styles from "./RadioList.module.css";

function RadioList({profileData,setProfileData}) {
  const {category} = profileData;

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setProfileData({...profileData, [name]: value});
  };

  return (
    <div className={styles.container}>
      <p>Grouping</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">villa</label>
          <input
            type="radio"
            name="category"
            value="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">apartment</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">store</label>
          <input
            type="radio"
            name="category"
            value="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">office</label>
          <input
            type="radio"
            name="category"
            value="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList