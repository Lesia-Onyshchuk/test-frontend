import data from "../../feedbacks.json";
import FeedbackItem from "../FeedbackItem/FeedbackItem.jsx";
import css from "./FeedbackList.module.css";

const FeedbackList = () => {
  return (
    <div>
      <ul className={css.listBox}>
        {data.map((item) => (
          <li key={item.id}>
            <FeedbackItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
