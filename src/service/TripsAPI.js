const dummyTripList = [
  {
    id: 1,
    tripImagesrc: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Jog-Falls.jpg',
    title: 'JogFalls',
    description: 'Longest WaterFall in Karnataka',
    organiserImagesrc: 'https://naturewalkers.in/wp-content/uploads/2016/09/kudremukh-trek.jpg',
    organiserName: 'Trekkers Adda',
    images: [
      'https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Jog-Falls.jpg',
      'https://media.istockphoto.com/photos/jog-falls-during-monsoon-picture-id950777136?b=1&k=20&m=950777136&s=170667a&w=0&h=g6MnlTHZqcQCGe2o6eZ_mDiD57g7cQ35-EyqVGTXR10=',
      'https://www.india.com/wp-content/uploads/2018/08/Jog-Falls-2.jpg',
      'https://www.thehindu.com/news/national/karnataka/f3wi25/article38197611.ece/alternates/FREE_435/08bgjog',
    ],
    longDescription:
      'Jog Falls[6] is a waterfall on the Sharavati river located in the Western Ghats near Sagar[7] Taluk of Shivamogga District, Karnataka, India. It is the second highest plunge waterfall in India.[8][9] It is a segmented waterfall which depends on rain and season becomes a plunge waterfall. The falls are major attractions for tourists and is ranked 36th in the list of free-falling waterfalls, 490th in the world by list of waterfalls by total height, 128th in the list of single-drop waterfalls in the World by the waterfall database.[10] Another popular name for the beautiful Jog Falls is Gerusoppa Falls.',
  },
  {
    id: 2,
    title: 'Dudhsagar',
    description: 'Falls in Goa via Train',
    organiserName: 'Goa Trekkers',
    organiserImagesrc:
      'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_230,q_auto,w_305/v1/filestore/r86h4fg8mr1wqpq2558yzbf8bwky_Artboard%202.jpeg',
    tripImagesrc:
      'https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/2/dudhsagar-waterfalls-in-monsoon-lsprasath-photography.jpg',
    images: [
      'https://www.pinkvilla.com/imageresize/waterfall-main_0.jpg?width=752&format=webp&t=pvorg',
      'https://moustachescapes.com/uploads/packages/sliders/60a37be06c767_1621326816.JPG',
      'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1542277905%2Fbq15dweb2xt0uquuq3ri.jpg',
      'https://adventuresome.in/wp-content/uploads/2019/05/Dudhsagar-Bridge-1024x682.jpeg',
    ],
    longDescription:
      'Dudhsagar Falls  is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. It is 60 km from Panaji by road and is located on the Belgavi–Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgavi. Dudhsagar Falls is amongst India tallest waterfalls with a height of 310 m (1017 feet) and an average width of 30 metres (100 feet).',
  },
  {
    id: 3,
    title: 'Tumkur',
    description: 'The best trek on earth.',
    organiserImagesrc: 'https://naturewalkers.in/wp-content/uploads/2016/09/kudremukh-trek.jpg',
    tripImagesrc: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/sathodi-falls_portrait.jpg',
    images: [
      'https://images.pexels.com/photos/1875480/pexels-photo-1875480.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://www.aluxurytravelblog.com/wp-content/uploads/2020/09/Dudhsagar-Waterfall-copy.jpg',
      'http://cdn.cnn.com/cnnnext/dam/assets/190501111839-india-waterfalls---jog-falls-restricted.jpg',
      'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
  },
  {
    id: 4,
    title: 'Tumkur',
    description: 'The best trek on earth.',
    organiserImagesrc: 'https://naturewalkers.in/wp-content/uploads/2016/09/kudremukh-trek.jpg',
    tripImagesrc: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/sathodi-falls_portrait.jpg',
    images: [
      'https://images.pexels.com/photos/1875480/pexels-photo-1875480.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://www.aluxurytravelblog.com/wp-content/uploads/2020/09/Dudhsagar-Waterfall-copy.jpg',
      'http://cdn.cnn.com/cnnnext/dam/assets/190501111839-india-waterfalls---jog-falls-restricted.jpg',
      'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
  },
];

const TripService = () => {};

TripService.getTrips = (date) => {
  return dummyTripList;
};

TripService.getTripDetails = (tripId) => {
  return dummyTripList[tripId - 1];
};

export default TripService;
