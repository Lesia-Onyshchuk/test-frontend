import FeedbackList from "../../components/FeedbackList/FeedbackList";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Voices of Success with Sales Fortuna</h1>
      <FeedbackList />
    </div>
  );
};

export default HomePage;
