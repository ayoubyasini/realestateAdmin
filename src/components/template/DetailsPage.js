import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "../../utils/NumberPlace";
import ItemList from "../module/ItemList";
import Title from "../module/Title";
import ShareButton from "../module/ShareButton";
import { icons } from "../../constants/icons";
import { categories } from "../../constants/strings";
import styles from "./DetailsPage.module.css";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>discription</Title>
        <p>{description}</p>
        <Title>welfare amenities</Title>
        <ItemList data={amenities} />
        <Title>Rules</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>real estate {realState}</p>
          <span>
            {phone}
            <AiOutlinePhone />
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {categories[category]}
            {icons[category]}
          </p>
          <p>{price} $</p>
          <p>
            {new Date(constructionDate).toLocaleDateString()}
            <BiCalendarCheck />
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
