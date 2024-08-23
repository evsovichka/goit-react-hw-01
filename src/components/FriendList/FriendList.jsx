import FriendsListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            {
              <FriendsListItem
                name={name}
                avatar={avatar}
                isOnline={isOnline}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
