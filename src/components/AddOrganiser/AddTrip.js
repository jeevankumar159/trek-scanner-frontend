import { useState } from 'react';
import AddService from '../../service/AddOrganiserService';
import './AddTrip.css';

const AddTrip = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]);

  const mobileInputChangeHandler = (event) => {
    setMobileNumber(event.target.value);
  };

  const enteredTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    if (enteredTitle.trim().length !== 0) {
      setIsValidTitle(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //Check Valid Mobile Number
    if (AddService.validatePhoneNumber(mobileNumber) === false) {
      setIsValidPhoneNumber(false);
      return;
    }

    //Check Valid Trip Title
    if (enteredTitle.trim().length === 0) {
      setIsValidTitle(false);
    }
  };
  const ImageChangeHandler = (event) => {
    if (event.target.files) {
      console.log(event.target.files);
      const files = Array.from(event.target.files).map((file) => {
        return URL.createObjectURL(file);
      });
      console.log(files);
      setSelectedImages((prevImages) => {
        return prevImages.concat(files);
      });
    }
    console.log(selectedImages);
  };

  const renderedPhotos = (source) => {
    return source.map((image) => {
      return <img src={image} key={image} alt='' width='150' height='150'></img>;
    });
  };
  return (
    <div className='app'>
      <form onSubmit={formSubmissionHandler}>
        <div className='form-control'>
          <label htmlFor='mobile'>Mobile Number</label>
          <input type='tel' pattern='[0-9]{10}' id='mobile' onChange={mobileInputChangeHandler} minLength='10' maxLength='10' />
          {!isValidPhoneNumber && <p className='error-text'>Mobile not Registered.</p>}
        </div>

        <div className='form-control'>
          <label htmlFor='trekTitle'>Trek Title</label>
          <input type='name' id='trekTitle' onChange={enteredTitleChangeHandler} maxLength='50'></input>
          {!isValidTitle && <p className='error-text'>Name Cannot be Empty.</p>}
        </div>

        <div className='form-control'>
          <label htmlFor='trekTitle'>Upload Images(atleast 2 and max 5)</label>
          <input type='file' multiple id='file' accept='image/png, image/gif, image/jpeg' onChange={ImageChangeHandler}></input>
          {renderedPhotos(selectedImages)}
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTrip;
