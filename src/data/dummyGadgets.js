const dummyGadgets = [
  // Mobiles
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 64999,
    category: "Mobile",
    image: "/placeholder-images/iphone15pro.jpg",
    condition: "Good",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 42999,
    category: "Mobile",
    image: "/placeholder-images/SamsungGalaxyS24.jpg",
    condition: "Excellent",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  {
    id: 3,
    name: "OnePlus 12R",
    price: 22999,
    category: "Mobile",
    image: "/placeholder-images/oneplus12R.jpg",
    condition: "Fair",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro",
    price: 12999,
    category: "Mobile",
    image: "/placeholder-images/redminote13pro.jpg",
    condition: "Good",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" }
  },
  {
    id: 5,
    name: "Vivo V29",
    price: 17999,
    category: "Mobile",
    image: "/placeholder-images/vivoV29.webp",
    condition: "Used",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Guwahati" }
  },
  {
    id: 6,
    name: "JioPhone Next",
    price: 1999,
    category: "Mobile",
    image: "/placeholder-images/jiophonenext.jpg",
    condition: "Fair",
    owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" }
  },
  // Laptops
  {
    id: 7,
    name: "MacBook Air M3",
    price: 58999,
    category: "Laptop",
    image: "/placeholder-images/macbookairM3.jpg",
    condition: "Good",
    owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" }
  },
  {
    id: 8,
    name: "Dell XPS 13",
    price: 69999,
    category: "Laptop",
    image: "/placeholder-images/dellXPS13.jpg",
    condition: "Excellent",
    owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" }
  },
  {
    id: 9,
    name: "HP Pavilion x360",
    price: 28999,
    category: "Laptop",
    image: "/placeholder-images/HPPavilionx360.jpg",
    condition: "Used",
    owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" }
  },
  {
    id: 10,
    name: "Lenovo IdeaPad Slim 3",
    price: 19999,
    category: "Laptop",
    image: "/placeholder-images/laptop.jpg",
    condition: "Good",
    owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" }
  },
  {
    id: 11,
    name: "Asus VivoBook 15",
    price: 17999,
    category: "Laptop",
    image: "/placeholder-images/AsusVivoBook15.jpg",
    condition: "Fair",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  // Tablets
  {
    id: 12,
    name: "Samsung Galaxy Tab A8",
    price: 7999,
    category: "Tablet",
    image: "/placeholder-images/SamsungGalaxyTabA8.jpg",
    condition: "Like New",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  {
    id: 13,
    name: "Apple iPad 9th Gen",
    price: 14999,
    category: "Tablet",
    image: "/placeholder-images/AppleiPad9thGen.jpg",
    condition: "Good",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 14,
    name: "Realme Pad 2",
    price: 7999,
    category: "Tablet",
    image: "/placeholder-images/tablet.jpg",
    condition: "Used",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" }
  },
  // Cameras
  {
    id: 15,
    name: "Canon EOS 200D II DSLR",
    price: 28999,
    category: "Camera",
    image: "/placeholder-images/CanonEOS200DIIDSLR.jpg",
    condition: "Excellent",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Shillong" }
  },
  {
    id: 16,
    name: "Sony α7 IV",
    price: 89999,
    category: "Camera",
    image: "/placeholder-images/Sonya7IV.jpg.webp",
    condition: "Good",
    owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" }
  },
  {
    id: 17,
    name: "GoPro HERO10 Black",
    price: 19999,
    category: "Camera",
    image: "/placeholder-images/GoProHERO10Black.jpg",
    condition: "Fair",
    owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" }
  },
  // Wearables
  {
    id: 18,
    name: "Apple Watch Ultra 2",
    price: 34999,
    category: "Wearable",
    image: "/placeholder-images/AppleWatchUltra2.jpg",
    condition: "Good",
    owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" }
  },
  {
    id: 19,
    name: "Mi Smart Band 6",
    price: 999,
    category: "Wearable",
    image: "/placeholder-images/MiSmartBand6.jpg",
    condition: "Like New",
    owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" }
  },
  {
    id: 20,
    name: "Amazfit GTS 2 Mini",
    price: 2499,
    category: "Wearable",
    image: "/placeholder-images/AmazfitGTS2Mini.jpg",
    condition: "Fair",
    owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" }
  },
  {
    id: 21,
    name: "Noise ColorFit Pulse 2",
    price: 799,
    category: "Wearable",
    image: "/placeholder-images/NoiseColorFitPulse2.png",
    condition: "Used",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  {
    id: 22,
    name: "Samsung Galaxy Watch 4",
    price: 4999,
    category: "Wearable",
    image: "/placeholder-images/SamsungGalaxyWatch4.jpg",
    condition: "Good",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  // Headphones
  {
    id: 23,
    name: "boAt Airdopes 141",
    price: 499,
    category: "Headphone",
    image: "/placeholder-images/boAtAirdopes141.jpg",
    condition: "Fair",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 24,
    name: "Sony WH-CH520",
    price: 1999,
    category: "Headphone",
    image: "/placeholder-images/SonyWH-CH520.jpg",
    condition: "Excellent",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Noida" }
  },
  {
    id: 25,
    name: "Realme Buds Wireless 2 Neo",
    price: 599,
    category: "Headphone",
    image: "/placeholder-images/RealmeBudsWireless2Neo.jpg",
    condition: "Good",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Imphal" }
  },
  // Smart Home
  {
    id: 26,
    name: "Amazon Echo Dot (5th Gen)",
    price: 1999,
    category: "Smart Home",
    image: "/placeholder-images/AmazonEchoDot(5th Gen).jpg",
    condition: "Good",
    owner: { name: "Neha Gupta", phone: "+91-9988123456", email: "nehagupta@gmail.com", address: "12 Banjara Hills, Hyderabad" }
  },
  {
    id: 27,
    name: "Mi Smart LED Bulb",
    price: 299,
    category: "Smart Home",
    image: "/placeholder-images/smarthome.jpg",
    condition: "Like New",
    owner: { name: "Rohit Mehra", phone: "+91-9876549876", email: "rohitmehra@gmail.com", address: "34 Salt Lake, Kolkata" }
  },
  {
    id: 28,
    name: "Google Nest Mini",
    price: 1299,
    category: "Smart Home",
    image: "/placeholder-images/GoogleNestMini.jpg",
    condition: "Used",
    owner: { name: "Anjali Nair", phone: "+91-9123498765", email: "anjalinair@gmail.com", address: "67 Anna Nagar, Chennai" }
  },
  {
    id: 29,
    name: "TP-Link Smart Plug",
    price: 499,
    category: "Smart Home",
    image: "/placeholder-images/TP-LinkSmartPlug.jpg",
    condition: "Good",
    owner: { name: "Suresh Reddy", phone: "+91-9988771234", email: "sureshreddy@gmail.com", address: "90 Gomti Nagar, Lucknow" }
  },
  // Automobiles
  {
    id: 30,
    name: "2025 Hyundai Creta",
    price: 799999,
    category: "Automobile",
    image: "/placeholder-images/2025HyundaiCreta.jpg",
    condition: "Fair",
    owner: { name: "Ritu Agarwal", phone: "+91-9876543211", email: "rituagarwal@gmail.com", address: "23 Jayanagar, Bangalore" }
  },
  {
    id: 31,
    name: "Tata Nexon EV",
    price: 699999,
    category: "Automobile",
    image: "/placeholder-images/TataNexonEV.jpg",
    condition: "Good",
    owner: { name: "Amit Sharma", phone: "+91-9876543210", email: "amitsharma@gmail.com", address: "123 MG Road, Mumbai" }
  },
  {
    id: 32,
    name: "Maruti Suzuki Fronx",
    price: 399999,
    category: "Automobile",
    image: "/placeholder-images/MarutiSuzukiFronx.jpg",
    condition: "Used",
    owner: { name: "Priya Singh", phone: "+91-9123456789", email: "priyasingh@gmail.com", address: "45 Park Street, Kolkata" }
  },
  {
    id: 33,
    name: "Honda Activa 6G",
    price: 29999,
    category: "Automobile",
    image: "/placeholder-images/Mobile.jpg",
    condition: "Excellent",
    owner: { name: "Rahul Verma", phone: "+91-9988776655", email: "rahulverma@gmail.com", address: "78 Brigade Road, Bangalore" }
  },
  {
    id: 34,
    name: "Royal Enfield Classic 350",
    price: 89999,
    category: "Automobile",
    image: "/placeholder-images/RoyalEnfieldClassic350.jpg",
    condition: "Good",
    owner: { name: "Sneha Patel", phone: "+91-9876501234", email: "snehapatel@gmail.com", address: "56 Sector 18, Shillong" }
  },
  {
    id: 35,
    name: "Hero Splendor Plus",
    price: 24999,
    category: "Automobile",
    image: "/placeholder-images/HeroSplendorPlus.jpg",
    condition: "Fair",
    owner: { name: "Vikram Rao", phone: "+91-9123454321", email: "vikramrao@gmail.com", address: "ABC Road, Agartala" }
  },
  {
    id: 36,
    name: "Mercedes-Benz S-Class",
    price: 8500000,
    category: "Automobile",
    image: "/placeholder-images/Mercedes-BenzS-Class.jpg",
    condition: "Like New",
    owner: { name: "Priya Kapoor", phone: "+91-9876543210", email: "priya.kapoor@email.com", address: "99 Altamount Road, Mumbai" },
    description: "2022 Mercedes-Benz S-Class, automatic, 8,000 km, showroom condition, all features enabled."
  }
];

export default dummyGadgets;
