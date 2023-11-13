import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiRightArrowAlt } from "react-icons/bi";
import { sp } from "../../utils/NumberPlace";
import { icons } from "src/constants/icons";
import styles from "./Card.module.css";


function Card({data: {_id,category, title, location, price}}) {

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{price} $</span>
      <Link href={`/buy-residential/${_id}`}>
        View the ad
        <BiRightArrowAlt />
      </Link>
    </div>
  );
};

export default Card;