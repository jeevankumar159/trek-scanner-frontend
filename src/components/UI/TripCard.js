import classses from './Card.module.css';

const TripCard = (props) => {
  return <div className={classses.card}>{props.children}</div>;
};

export default TripCard;
