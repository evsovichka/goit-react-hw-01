import style from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={style.container}>
      <div className={style.topInfo}>
        <img className={style.img} src={image} alt={name} />
        <p className={style.username}>{name}</p>
        <p className={style.infoText}>@{tag}</p>
        <p className={style.infoText}>{location}</p>
      </div>

      <ul className={style.statisticList}>
        <li className={style.statisticItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={style.statisticItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={style.statisticItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
