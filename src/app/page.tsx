import { FC } from "react";
import classes from "./page.module.scss";

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => {
  return <div className={classes.root}>Homepage</div>;
};

export default Homepage;
