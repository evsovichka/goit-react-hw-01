import { clsx } from "clsx";
import style from "./FriendListItem.module.css";
const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.listItem}>
      <img src={avatar} alt={name} width="48" />
      <p className={style.itemName}>{name}</p>
      <p className={clsx(isOnline ? style.isOnline : style.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendsListItem;
