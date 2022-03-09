import { Fragment } from 'react';
import classes from './Trip.module.css';
const Trip = (props) => {
  const tripDetails = props.tripDetails;
  const tripImagesrc = tripDetails.tripImagesrc;
  const title = tripDetails.title;
  const description = tripDetails.description;
  const organiserImagesrc = tripDetails.organiserImagesrc;
  const tripId = props.tripId;

  const onTripClickHandler = () => {
    console.log(tripId);
    props.onShowTripDetails(tripId);
  };

  return (
    <Fragment>
      <div className={classes.card} onClick={onTripClickHandler}>
        <div>
          <img src={tripImagesrc} className={classes['card-image']} alt='' />
        </div>
        <div className={classes['card-overlay']}>
          <div className={classes['card-header']}>
            <svg className={classes['card-arc']} xmlns='http://www.w3.org/2000/svg'>
              <path />
            </svg>
            <img className={classes['card-thumb']} src={organiserImagesrc} alt='' />
            <div className={classes['card-header-text']}>
              <h3 className={classes['card-title']}>{title}</h3>
            </div>
          </div>
          <p className={classes['card-description']}>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Trip;
