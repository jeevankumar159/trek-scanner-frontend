const AddService = () => {};

AddService.validatePhoneNumber = (phoneNumber) => {
  const phoneNumberList = ['9663904197', '8660902954'];
  if (phoneNumberList.indexOf(phoneNumber) > -1) {
    return true;
  }
  return false;
};

export default AddService;
