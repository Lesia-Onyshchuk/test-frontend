import css from "./FeedbackItem.module.css";

const FeedbackItem = ({ item }) => {
  return (
    <div className={css.itemBox}>
      <img src={item.logo} alt="" />
      <p className={css.content}>{item.content}</p>
      <div className={css.personBox}>
        <img src={item.photo} about={item.name} />
        <div className={css.person}>
          <h2 className={css.name}>{item.name}</h2>
          <h3 className={css.role}>{item.role}</h3>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
