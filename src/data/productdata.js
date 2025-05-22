import Image1 from '../Assets/Image1.jpg';
import Image2 from '../Assets/Image2.jpg';
import Image3 from '../Assets/Image3.jpg';
import Image4 from '../Assets/Image4.jpg';
import Image5 from '../Assets/Image5.jpg';
import Image6 from '../Assets/Image6.jpg';
import Image7 from '../Assets/Image7.jpg';
import Image1 from '../Assets/Image1.jpg';
import Image1 from '../Assets/Image1.jpg';
import Image1 from '../Assets/Image1.jpg';

const products = [
  // MEN
  {
    id: 1,
    category: "Men",
    title: "Men's Leather Jacket",
    price: 79.99,
    description: "Stylish and durable leather jacket.",
    image: Image1
  },
  {
    id: 2,
    category: "Men",
    title: "Men's Casual Shirt",
    price: 24.99,
    description: "Comfortable cotton casual shirt.",
    image: "https://via.placeholder.com/200x150?text=Casual+Shirt"
  },
  {
    id: 3,
    category: "Men",
    title: "Men's Denim Jeans",
    price: 49.99,
    description: "Classic fit denim jeans.",
    image: "https://via.placeholder.com/200x150?text=Denim+Jeans"
  },
  {
    id: 4,
    category: "Men",
    title: "Men's Polo Shirt",
    price: 29.99,
    description: "Soft breathable polo shirt.",
    image: "https://via.placeholder.com/200x150?text=Polo+Shirt"
  },
  {
    id: 5,
    category: "Men",
    title: "Men's Chino Pants",
    price: 39.99,
    description: "Slim fit chino pants.",
    image: "https://via.placeholder.com/200x150?text=Chino+Pants"
  },
  {
    id: 6,
    category: "Men",
    title: "Men's Sweatshirt",
    price: 34.99,
    description: "Cozy cotton sweatshirt.",
    image: "https://via.placeholder.com/200x150?text=Sweatshirt"
  },
  {
    id: 7,
    category: "Men",
    title: "Men's Tank Top",
    price: 14.99,
    description: "Lightweight summer tank top.",
    image: "https://via.placeholder.com/200x150?text=Tank+Top"
  },
  {
    id: 8,
    category: "Men",
    title: "Men's Formal Suit",
    price: 149.99,
    description: "Elegant two-piece formal suit.",
    image: "https://via.placeholder.com/200x150?text=Formal+Suit"
  },
  {
    id: 9,
    category: "Men",
    title: "Men's Hoodie",
    price: 39.99,
    description: "Warm fleece hoodie.",
    image: "https://via.placeholder.com/200x150?text=Hoodie"
  },
  {
    id: 10,
    category: "Men",
    title: "Men's Shorts",
    price: 24.99,
    description: "Comfortable casual shorts.",
    image: "https://via.placeholder.com/200x150?text=Shorts"
  },
  {
    id: 11,
    category: "Men",
    title: "Men's Windbreaker Jacket",
    price: 59.99,
    description: "Lightweight windbreaker for outdoors.",
    image: "https://via.placeholder.com/200x150?text=Windbreaker"
  },
  {
    id: 12,
    category: "Men",
    title: "Men's Graphic Tee",
    price: 19.99,
    description: "Trendy graphic print T-shirt.",
    image: "https://via.placeholder.com/200x150?text=Graphic+Tee"
  },
  {
    id: 13,
    category: "Men",
    title: "Men's Button-Down Shirt",
    price: 29.99,
    description: "Classic button-down shirt.",
    image: "https://via.placeholder.com/200x150?text=Button-Down+Shirt"
  },
  {
    id: 14,
    category: "Men",
    title: "Men's Cargo Pants",
    price: 44.99,
    description: "Functional cargo pants.",
    image: "https://via.placeholder.com/200x150?text=Cargo+Pants"
  },
  {
    id: 15,
    category: "Men",
    title: "Men's Tracksuit",
    price: 69.99,
    description: "Comfortable tracksuit for sports.",
    image: "https://via.placeholder.com/200x150?text=Tracksuit"
  },
  {
    id: 16,
    category: "Men",
    title: "Men's Flannel Shirt",
    price: 34.99,
    description: "Warm and soft flannel shirt.",
    image: "https://via.placeholder.com/200x150?text=Flannel+Shirt"
  },
  {
    id: 17,
    category: "Men",
    title: "Men's Overcoat",
    price: 129.99,
    description: "Classic wool overcoat.",
    image: "https://via.placeholder.com/200x150?text=Overcoat"
  },
  {
    id: 18,
    category: "Men",
    title: "Men's Sweatpants",
    price: 29.99,
    description: "Relaxed fit sweatpants.",
    image: "https://via.placeholder.com/200x150?text=Sweatpants"
  },
  {
    id: 19,
    category: "Men",
    title: "Men's Dress Shirt",
    price: 39.99,
    description: "Formal dress shirt.",
    image: "https://via.placeholder.com/200x150?text=Dress+Shirt"
  },
  {
    id: 20,
    category: "Men",
    title: "Men's Winter Jacket",
    price: 99.99,
    description: "Insulated winter jacket.",
    image: "https://via.placeholder.com/200x150?text=Winter+Jacket"
  },

  // WOMEN
  {
    id: 21,
    category: "Women",
    title: "Women's Summer Dress",
    price: 39.99,
    description: "Light and breezy summer dress.",
    image: "https://via.placeholder.com/200x150?text=Summer+Dress"
  },
  {
    id: 22,
    category: "Women",
    title: "Women's Blouse",
    price: 29.99,
    description: "Elegant and stylish blouse.",
    image: "https://via.placeholder.com/200x150?text=Blouse"
  },
  {
    id: 23,
    category: "Women",
    title: "Women's Skinny Jeans",
    price: 49.99,
    description: "Classic skinny jeans.",
    image: "https://via.placeholder.com/200x150?text=Skinny+Jeans"
  },
  {
    id: 24,
    category: "Women",
    title: "Women's Cardigan",
    price: 34.99,
    description: "Soft knitted cardigan.",
    image: "https://via.placeholder.com/200x150?text=Cardigan"
  },
  {
    id: 25,
    category: "Women",
    title: "Women's Maxi Dress",
    price: 59.99,
    description: "Flowy maxi dress for special occasions.",
    image: "https://via.placeholder.com/200x150?text=Maxi+Dress"
  },
  {
    id: 26,
    category: "Women",
    title: "Women's Denim Jacket",
    price: 49.99,
    description: "Classic denim jacket.",
    image: "https://via.placeholder.com/200x150?text=Denim+Jacket"
  },
  {
    id: 27,
    category: "Women",
    title: "Women's T-Shirt",
    price: 19.99,
    description: "Casual cotton T-shirt.",
    image: "https://via.placeholder.com/200x150?text=T-Shirt"
  },
  {
    id: 28,
    category: "Women",
    title: "Women's Leggings",
    price: 24.99,
    description: "Comfortable stretch leggings.",
    image: "https://via.placeholder.com/200x150?text=Leggings"
  },
  {
    id: 29,
    category: "Women",
    title: "Women's Hoodie",
    price: 39.99,
    description: "Soft fleece hoodie.",
    image: "https://via.placeholder.com/200x150?text=Hoodie"
  },
  {
    id: 30,
    category: "Women",
    title: "Women's Wrap Dress",
    price: 44.99,
    description: "Elegant wrap dress.",
    image: "https://via.placeholder.com/200x150?text=Wrap+Dress"
  },
  {
    id: 31,
    category: "Women",
    title: "Women's Shorts",
    price: 24.99,
    description: "Casual cotton shorts.",
    image: "https://via.placeholder.com/200x150?text=Shorts"
  },
  {
    id: 32,
    category: "Women",
    title: "Women's Sweatpants",
    price: 29.99,
    description: "Cozy sweatpants.",
    image: "https://via.placeholder.com/200x150?text=Sweatpants"
  },
  {
    id: 33,
    category: "Women",
    title: "Women's Tank Top",
    price: 14.99,
    description: "Light summer tank top.",
    image: "https://via.placeholder.com/200x150?text=Tank+Top"
  },
  {
    id: 34,
    category: "Women",
    title: "Women's Coat",
    price: 99.99,
    description: "Warm winter coat.",
    image: "https://via.placeholder.com/200x150?text=Coat"
  },
  {
    id: 35,
    category: "Women",
    title: "Women's Midi Skirt",
    price: 34.99,
    description: "Elegant midi skirt.",
    image: "https://via.placeholder.com/200x150?text=Midi+Skirt"
  },
  {
    id: 36,
    category: "Women",
    title: "Women's Formal Blazer",
    price: 69.99,
    description: "Tailored formal blazer.",
    image: "https://via.placeholder.com/200x150?text=Blazer"
  },
  {
    id: 37,
    category: "Women",
    title: "Women's Graphic Tee",
    price: 19.99,
    description: "Trendy graphic T-shirt.",
    image: "https://via.placeholder.com/200x150?text=Graphic+Tee"
  },
  {
    id: 38,
    category: "Women",
    title: "Women's Jeans Jacket",
    price: 49.99,
    description: "Casual jeans jacket.",
    image: "https://via.placeholder.com/200x150?text=Jeans+Jacket"
  },
  {
    id: 39,
    category: "Women",
    title: "Women's Crop Top",
    price: 19.99,
    description: "Stylish crop top.",
    image: "https://via.placeholder.com/200x150?text=Crop+Top"
  },
  {
    id: 40,
    category: "Women",
    title: "Women's Sweater",
    price: 39.99,
    description: "Warm knit sweater.",
    image: "https://via.placeholder.com/200x150?text=Sweater"
  },

  // KIDS
  {
    id: 41,
    category: "Kids",
    title: "Kids' Hoodie",
    price: 29.99,
    description: "Soft and warm kids' hoodie.",
    image: "https://via.placeholder.com/200x150?text=Kids+Hoodie"
  },
  {
    id: 42,
    category: "Kids",
    title: "Kids' T-Shirt",
    price: 14.99,
    description: "Bright and fun kids' T-shirt.",
    image: "https://via.placeholder.com/200x150?text=Kids+T-Shirt"
  },
  {
    id: 43,
    category: "Kids",
    title: "Kids' Jeans",
    price: 29.99,
    description: "Durable kids' jeans.",
    image: "https://via.placeholder.com/200x150?text=Kids+Jeans"
  },
  {
    id: 44,
    category: "Kids",
    title: "Kids' Shorts",
    price: 19.99,
    description: "Comfortable kids' shorts.",
    image: "https://via.placeholder.com/200x150?text=Kids+Shorts"
  },
  {
    id: 45,
    category: "Kids",
    title: "Kids' Sweater",
    price: 24.99,
    description: "Warm kids' sweater.",
    image: "https://via.placeholder.com/200x150?text=Kids+Sweater"
  },
  {
    id: 46,
    category: "Kids",
    title: "Kids' Jacket",
    price: 49.99,
    description: "Water-resistant kids' jacket.",
    image: "https://via.placeholder.com/200x150?text=Kids+Jacket"
  },
  {
    id: 47,
    category: "Kids",
    title: "Kids' Dress",
    price: 34.99,
    description: "Cute kids' dress.",
    image: "https://via.placeholder.com/200x150?text=Kids+Dress"
  },
  {
    id: 48,
    category: "Kids",
    title: "Kids' Pajamas",
    price: 19.99,
    description: "Soft cotton pajamas.",
    image: "https://via.placeholder.com/200x150?text=Kids+Pajamas"
  },
  {
    id: 49,
    category: "Kids",
    title: "Kids' Tank Top",
    price: 14.99,
    description: "Lightweight tank top.",
    image: "https://via.placeholder.com/200x150?text=Kids+Tank+Top"
  },
  {
    id: 50,
    category: "Kids",
    title: "Kids' Raincoat",
    price: 29.99,
    description: "Bright and waterproof raincoat.",
    image: "https://via.placeholder.com/200x150?text=Kids+Raincoat"
  },
  {
    id: 51,
    category: "Kids",
    title: "Kids' Hoodie Jacket",
    price: 34.99,
    description: "Warm hoodie jacket.",
    image: "https://via.placeholder.com/200x150?text=Kids+Hoodie+Jacket"
  },
  {
    id: 52,
    category: "Kids",
    title: "Kids' Sweatpants",
    price: 24.99,
    description: "Comfortable sweatpants.",
    image: "https://via.placeholder.com/200x150?text=Kids+Sweatpants"
  },
  {
    id: 53,
    category: "Kids",
    title: "Kids' Cap",
    price: 9.99,
    description: "Fun kids' cap.",
    image: "https://via.placeholder.com/200x150?text=Kids+Cap"
  },
  {
    id: 54,
    category: "Kids",
    title: "Kids' Sneakers",
    price: 39.99,
    description: "Durable kids' sneakers.",
    image: "https://via.placeholder.com/200x150?text=Kids+Sneakers"
  },
  {
    id: 55,
    category: "Kids",
    title: "Kids' Gloves",
    price: 9.99,
    description: "Warm gloves for kids.",
    image: "https://via.placeholder.com/200x150?text=Kids+Gloves"
  },
  {
    id: 56,
    category: "Kids",
    title: "Kids' Scarf",
    price: 14.99,
    description: "Colorful scarf.",
    image: "https://via.placeholder.com/200x150?text=Kids+Scarf"
  },
  {
    id: 57,
    category: "Kids",
    title: "Kids' Winter Coat",
    price: 69.99,
    description: "Insulated winter coat.",
    image: "https://via.placeholder.com/200x150?text=Kids+Winter+Coat"
  },
  {
    id: 58,
    category: "Kids",
    title: "Kids' Snow Pants",
    price: 49.99,
    description: "Waterproof snow pants.",
    image: "https://via.placeholder.com/200x150?text=Kids+Snow+Pants"
  },
  {
    id: 59,
    category: "Kids",
    title: "Kids' Turtleneck",
    price: 19.99,
    description: "Cozy turtleneck sweater.",
    image: "https://via.placeholder.com/200x150?text=Kids+Turtleneck"
  },
  {
    id: 60,
    category: "Kids",
    title: "Kids' Overalls",
    price: 39.99,
    description: "Durable overalls for playtime.",
    image: "https://via.placeholder.com/200x150?text=Kids+Overalls"
  }
];

export default products;
