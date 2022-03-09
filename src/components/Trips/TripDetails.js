import Modal from './../UI/Modal';
import { useState } from 'react';
import Slideshow from '../UI/Slideshow';
import classes from './TripDetails.module.css';
import OrganiserDetails from './OrganiserDetails';
import { useNavigate } from 'react-router';
import TripService from '../../service/TripsAPI';

const TripDetails = (props) => {
  let navigate = useNavigate();

  const navigateToOrganiser = () => {
    navigate('/organisers');
  };

  const tripId = props.tripId;
  const tripDetails = TripService.getTripDetails(tripId);
  console.log(tripDetails);
  const images = tripDetails.images;
  const title = tripDetails.title;
  const organiserImagesrc = tripDetails.organiserImagesrc;
  const organiserName = tripDetails.organiserName;
  const tripsDescription = tripDetails.longDescription;

  const [showOrganiserDetails, setShowOrganiserDetails] = useState(false);
  const [buttontext, setButtonText] = useState('Details');

  const OrganiserFrame = () => {
    return (
      <div>
        <img className={classes['organiser-thumb']} src={organiserImagesrc} alt='' />
        <h2 className={classes['organiser-name']} onClick={navigateToOrganiser}>
          {organiserName}
        </h2>
      </div>
    );
  };

  const showOrganiserDetailsHandler = () => {
    console.log(typeof showOrganiserDetails);
    if (showOrganiserDetails === false) {
      console.log('yes');
      setShowOrganiserDetails(true);
      setButtonText('Description');
    } else {
      setShowOrganiserDetails(false);
      setButtonText('Details');
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.trip}>
        <button onClick={props.onHideTripDetails} className={classes.button2}>
          X{' '}
        </button>
        <h3 className={classes['trip-title']}>{title}</h3>
        <div>
          <Slideshow images={images}></Slideshow>
        </div>
        <div className={classes.organiser}></div>

        {!showOrganiserDetails && <p className={classes['trip-description']}>{tripsDescription}</p>}

        {showOrganiserDetails && <OrganiserDetails></OrganiserDetails>}
        <button onClick={showOrganiserDetailsHandler} className={classes.button1}>
          {buttontext}
        </button>
      </div>
    </Modal>
  );
};
export default TripDetails;
