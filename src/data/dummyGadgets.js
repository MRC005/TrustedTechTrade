const dummyGadgets = [
  // Mobiles
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 64999,
    category: "Mobile",
    image: "https://ik.imagekit.io/budli/images/full/1333feda85d873277ba9bb1a3e3d3d14.jpg?tr=h-250%2Cw-250%2Ccm-pad_resize&ik-sdk-version=react-1.1.1",
    condition: "Good",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 42999,
    category: "Mobile",
    image: "https://t4.ftcdn.net/jpg/07/41/91/45/360_F_741914543_x0Pt2nGdbQo2Farkxh7HpFMDH8JDyaiR.webp",
    condition: "Excellent",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  {
    id: 3,
    name: "OnePlus 12R",
    price: 22999,
    category: "Mobile",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/26/full/1706258064-9486.jpg",
    condition: "Fair",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro",
    price: 12999,
    category: "Mobile",
    image: "https://m-cdn.phonearena.com/images/reviews/256060-image/BK6A9959-Edit.jpg?w=1",
    condition: "Good",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" }
  },
  {
    id: 5,
    name: "Vivo V29",
    price: 17999,
    category: "Mobile",
    image: "https://www.sahivalue.com/product-images/1000000983.jpg/293890000052079210/1100x1100",
    condition: "Used",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Guwahati" }
  },
  {
    id: 6,
    name: "JioPhone Next",
    price: 1999,
    category: "Mobile",
    image: "https://images.fonearena.com/blog/wp-content/uploads/2021/11/JioPhone-Next_fonearena-1.jpg",
    condition: "Fair",
    owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" }
  },
  // Laptops
  {
    id: 7,
    name: "MacBook Air M3",
    price: 58999,
    category: "Laptop",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/macbook-m3-203639946-16x9_0.jpg?VersionId=rkQCbbYNyu3lytTuwFDocNtxZ6k92sR6&size=690:388",
    condition: "Good",
    owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" }
  },
  {
    id: 8,
    name: "Dell XPS 13",
    price: 69999,
    category: "Laptop",
    image: "https://images.indianexpress.com/2022/01/Dell-XPS-13-Plus-1.jpg",
    condition: "Excellent",
    owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" }
  },
  {
    id: 9,
    name: "HP Pavilion x360",
    price: 28999,
    category: "Laptop",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355370354/XH/JG/GE/188011544/hp-x360-laptop-500x500.jpg",
    condition: "Used",
    owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" }
  },
  {
    id: 10,
    name: "Lenovo IdeaPad Slim 3",
    price: 19999,
    category: "Laptop",
    image: "https://www.get-pc.net/photo/lenovo/IdeaPad-Slim3-Gen8-14-AMD/227.jpg",
    condition: "Good",
    owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" }
  },
  {
    id: 11,
    name: "Asus VivoBook 15",
    price: 17999,
    category: "Laptop",
    image: "https://dlcdnwebimgs.asus.com/gain/5d3b0e30-c888-481c-8c1c-f45b65c5b560/",
    condition: "Fair",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  // Tablets
  {
    id: 12,
    name: "Samsung Galaxy Tab A8",
    price: 7999,
    category: "Tablet",
    image: "https://m.media-amazon.com/images/I/71vScvyCWDL.jpg",
    condition: "Like New",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  {
    id: 13,
    name: "Apple iPad 9th Gen",
    price: 14999,
    category: "Tablet",
    image: "https://m.media-amazon.com/images/I/61NGnpjoRDL.jpg",
    condition: "Good",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 14,
    name: "Realme Pad 2",
    price: 7999,
    category: "Tablet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhGeBmqbTkHdGPvnF_VqTWi0t9MKppHrHgA&s",
    condition: "Used",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" }
  },
  // Cameras
  {
    id: 15,
    name: "Canon EOS 200D II DSLR",
    price: 28999,
    category: "Camera",
    image: "https://in.canon/media/image/2019/04/09/cd7198fe980a4ed48be85ac376aec5d1_EOS+200D+MKII+BK+Front+Slant.png",
    condition: "Excellent",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Shillong" }
  },
  {
    id: 16,
    name: "Sony α7 IV",
    price: 89999,
    category: "Camera",
    image: "https://gppro.in/wp-content/uploads/2024/11/SONY-ILCE-A7M4-BODY-GP002291-1.jpg",
    condition: "Good",
    owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" }
  },
  {
    id: 17,
    name: "GoPro HERO10 Black",
    price: 19999,
    category: "Camera",
    image: "https://gppro.in/wp-content/uploads/2024/11/GO-PRO-HERO-10-BLACK-2.jpg",
    condition: "Fair",
    owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" }
  },
  // Wearables
  {
    id: 18,
    name: "Apple Watch Ultra 2",
    price: 34999,
    category: "Wearable",
    image: "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/t/i/titanium_orange_ocean_band_pdp_image_position-1__en-us-removebg-preview_1.png",
    condition: "Good",
    owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" }
  },
  {
    id: 19,
    name: "Mi Smart Band 6",
    price: 999,
    category: "Wearable",
    image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1663749390.06317129.png",
    condition: "Like New",
    owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" }
  },
  {
    id: 20,
    name: "Amazfit GTS 2 Mini",
    price: 2499,
    category: "Wearable",
    image: "https://in.amazfit.com/cdn/shop/products/GTS2mini-sw.jpg?v=1701611945&width=1500",
    condition: "Fair",
    owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" }
  },
  {
    id: 21,
    name: "Noise ColorFit Pulse 2",
    price: 799,
    category: "Wearable",
    image: "https://img.tatacliq.com/images/i20//1348Wx2000H/MP000000023964876_1348Wx2000H_202410051248404.jpeg",
    condition: "Used",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  {
    id: 22,
    name: "Samsung Galaxy Watch 4",
    price: 4999,
    category: "Wearable",
    image: "https://m.media-amazon.com/images/I/61nBzBREzGL.jpg",
    condition: "Good",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  // Headphones
  {
    id: 23,
    name: "boAt Airdopes 141",
    price: 499,
    category: "Headphone",
    image: "https://techcommerce.in/wp-content/uploads/2023/06/Grey-4.webp",
    condition: "Fair",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 24,
    name: "Sony WH-CH520",
    price: 1999,
    category: "Headphone",
    image: "https://shopatsc.com/cdn/shop/products/CH520_1000x1000_Blue_K.jpg?v=1681219211",
    condition: "Excellent",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" }
  },
  {
    id: 25,
    name: "Realme Buds Wireless 2 Neo",
    price: 599,
    category: "Headphone",
    image: "https://static-01.daraz.com.bd/p/9ed76067d42e0212dd30e228068bf226.jpg",
    condition: "Good",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Imphal" }
  },
  // Smart Home
  {
    id: 26,
    name: "Amazon Echo Dot (5th Gen)",
    price: 1999,
    category: "Smart Home",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-smKafsVMVS_gDMQE8RhrHto3dlPGAVIEBg&s",
    condition: "Good",
    owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" }
  },
  {
    id: 27,
    name: "Mi Smart LED Bulb",
    price: 299,
    category: "Smart Home",
    image: "https://blackbud.com.bd/wp-content/uploads/2023/01/Mi-Smart-LED-Bulb-Essentialss.jpg",
    condition: "Like New",
    owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" }
  },
  {
    id: 28,
    name: "Google Nest Mini",
    price: 1299,
    category: "Smart Home",
    image: "https://i.ebayimg.com/images/g/AigAAOSwoMFnEjX5/s-l400.jpg",
    condition: "Used",
    owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" }
  },
  {
    id: 29,
    name: "TP-Link Smart Plug",
    price: 499,
    category: "Smart Home",
    image: "https://m.media-amazon.com/images/I/41wU5zshPoL._AC_SS250_.jpg",
    condition: "Good",
    owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" }
  },
  // Automobiles
  {
    id: 30,
    name: "2025 Hyundai Creta",
    price: 799999,
    category: "Automobile",
    image: "https://imgd.aeplcdn.com/640X480/image/used/sx3fe65tfdoe.jpg?q=80",
    condition: "Fair",
    owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" }
  },
  {
    id: 31,
    name: "Tata Nexon EV",
    price: 699999,
    category: "Automobile",
    image: "https://img.autocarindia.com/ExtraImages/20221208110105__DSC3374.jpg?w=700&c=1",
    condition: "Good",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  {
    id: 32,
    name: "Maruti Suzuki Fronx",
    price: 399999,
    category: "Automobile",
    image: "https://imgd.aeplcdn.com/300x225/vimages/202505/3976143_31769_27_1747940955550.jpg",
    condition: "Used",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  {
    id: 33,
    name: "Honda Activa 6G",
    price: 29999,
    category: "Automobile",
    image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/1/versions/--connected-obd-2b1737697110094.jpg?q=80",
    condition: "Excellent",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 34,
    name: "Royal Enfield Classic 350",
    price: 89999,
    category: "Automobile",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Royal_Enfield_Classic_350_%282017_Model_Year%29.jpg/500px-Royal_Enfield_Classic_350_%282017_Model_Year%29.jpg",
    condition: "Good",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Shillong" }
  },
  {
    id: 35,
    name: "Hero Splendor Plus",
    price: 24999,
    category: "Automobile",
    image: "https://images.91wheels.com/assets/b_images/heromotocorp-splendor-plus-24-1579716882.jpg?w=480&q=60?w=1080&q=60",
    condition: "Fair",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Agartala" }
  },
  {
    id: 36,
    name: "Mercedes-Benz S-Class",
    price: 8500000,
    category: "Automobile",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/10853/1690451611932/front-left-side-47.jpg",
    condition: "Like New",
    owner: { name: "Priya Kapoor", phone: "+91-9876543210", email: "priya.kapoor@email.com", address: "99 Altamount Road, Mumbai" },
    description: "2022 Mercedes-Benz S-Class, automatic, 8,000 km, showroom condition, all features enabled."
  }
];

export default dummyGadgets;
