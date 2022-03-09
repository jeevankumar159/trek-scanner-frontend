import { Grid } from '@material-ui/core';
import { useState } from 'react';
import TripService from '../../service/TripsAPI';

import Trip from './Trip';
import TripDetails from './TripDetails';
import classes from './TripList.module.css';

const TripList = () => {
  const tripsList = TripService.getTrips();
  const [showTripDetails, setShowTripDetails] = useState(false);
  const [tripId, setTripId] = useState('');

  const showTripDetailsHandler = (tripId) => {
    setShowTripDetails(true);
    console.log(tripId);
    setTripId(tripId);
  };

  const hideTripDetailsHandler = () => {
    setShowTripDetails(false);
  };

  const trips = tripsList.map((trip) => {
    return (
      <Grid item xs={12} md={4}>
        <Trip tripDetails={trip} tripId={trip.id} onShowTripDetails={showTripDetailsHandler}></Trip>
      </Grid>
    );
  });

  return (
    <div className={classes['container-fluid']}>
      <Grid container spacing={4}>
        {trips}
      </Grid>
      {showTripDetails && (
        <TripDetails tripId={tripId} onHideTripDetails={hideTripDetailsHandler} onClose={hideTripDetailsHandler}></TripDetails>
      )}
    </div>
  );
};

export default TripList;
