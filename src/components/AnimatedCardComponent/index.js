import "./index.css";
import ListWrapper from "./../ListWrapper"
import AnimatedCard from "./AnimatedCard";

let data = [
  {
    id: "1",
    title: "First",
    description: "Lorem ipsum dolor sit amet,",
    image: require("../../images/1.png"),
  },
  {
    id: "2",
    title: "Second",
    description: "sapiente cum tenetur, adipisci magni.",
    image: require("../../images/2.png"),
  },
  {
    id: "3",
    title: "Third",
    description: "quaerat facere, voluptatem doloribus ",
    image: require("../../images/3.jpg"),
  },
  {
    id: "4",
    title: "Fourth",
    description: "dolorem ipsam fugit, libero veritatis quos",
    image: require("../../images/4.jpg"),
  },
  {
    id: "5",
    title: "Fifth",
    description: "dolorem ipsam fugit, libero veritatis quos",
    image: require("../../images/5.jpg"),
  },
  {
    id: "6",
    title: "Sixth",
    description: "dolorem ipsam fugit, libero veritatis quos",
    image: require("../../images/6.jpg"),
  },
  {
    id: "7",
    title: "Seventh",
    description: "dolorem ipsam fugit, libero veritatis quos",
    image: require("../../images/12.jpg"),
  },
  {
    id: "8",
    title: "Eighth",
    description: "dolorem ipsam fugit, libero veritatis quos",
    image: require("../../images/11.jpg"),
  },
];

const AnimatedCardComponent = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <ListWrapper items={data} children={AnimatedCard}></ListWrapper>
      </div>
    </div>
  );
};

export default AnimatedCardComponent;
