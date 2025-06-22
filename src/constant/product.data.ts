import { StaticImageData } from "next/image";
import img1 from "@/assets/product/w.jpg";
interface ProductCategory {
  category: string;
  items: string[];
}
export interface IProduct {
  title: string;
  img: string | StaticImageData;
  categories: ProductCategory[];
}
export const products: IProduct[] = [
  {
    title: "WOMEN",
    img: img1,
    categories: [
      {
        category: "Ethnicwear",
        items: [
          "Kurtas & Suits",
          "Kurtis, Tunics & Tops",
          "Ethnic Dresses",
          "Leggings, Salwars & Churidars",
          "Skirts & Palazzos",
          "Sarees & Blouses",
          "Dress Materials",
          "Lehenga Cholis",
          "Dupattas & Shawls",
          "Gowns",
          "Unstitched Suits",
        ],
      },
      {
        category: "Westernwear",
        items: [
          "Dresses & Jumpsuits",
          "Tops, T-Shirts & Shirts",
          "Jeans & Jeggings",
          "Trousers & Capris",
          "Shorts & Skirts",
          "Shrugs",
          "Sweaters & Sweatshirts",
          "Jackets & Coats",
        ],
      },
      {
        category: "Blazers & Waistcoats",
        items: ["Blazers & Waistcoats", "Cardigan", "Dungarees"],
      },
      {
        category: "Footwear",
        items: [
          "Casual Shoes",
          "Flats",
          "Heels",
          "Boots",
          "Sports Shoes",
          "Mojaris",
          "Sandals & Floaters",
        ],
      },
      {
        category: "Sports & Activewear",
        items: [
          "Sports Accessories",
          "Sports Equipment",
          "Raincoats",
          "Track Pants & Shorts",
          "Tracksuits",
          "Swimwear",
        ],
      },
      {
        category: "Lingerie & Sleepwear",
        items: [
          "Bras & Lingerie Sets",
          "Briefs",
          "Shapewear",
          "Sleepwear & Loungewear",
          "Camisoles & Thermals",
        ],
      },
      {
        category: "Fashion Accessories",
        items: [
          "Fragrances",
          "Handkerchief",
          "Caps",
          "Watches & Wearables",
          "Belts",
          "Mufflers, Scarves & Gloves",
          "Sunglasses & Frames",
          "Stoles",
          "Handbags",
          "Wallets",
          "Bags",
          "Helmet",
          "Socks",
          "Fashion Jewellery",
        ],
      },
    ],
  },
  {
    title: "MEN",
    img: img1, // you can add a path like '/images/men.jpg'
    categories: [
      {
        category: "Topwear",
        items: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazers & Coats",
          "Suits",
          "Rain Jackets",
        ],
      },
      {
        category: "Ethnicwear",
        items: ["Kurta Pyjama", "Sherwanis", "Nehru Jackets", "Dhotis"],
      },
      {
        category: "Bottomwear",
        items: [
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Shorts",
          "Track Pants & Joggers",
        ],
      },
      {
        category: "Innerwear & Sleepwear",
        items: [
          "Briefs & Trunks",
          "Boxers",
          "Vests",
          "Sleepwear & Loungewear",
          "Thermals",
        ],
      },
      {
        category: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Sandals & Floaters",
          "Flip Flops",
          "Socks",
          "Mojaris",
        ],
      },
      {
        category: "Sports & Activewear",
        items: [
          "Sports Accessories",
          "Sports Equipment",
          "Track Pants & Shorts",
          "Tracksuits",
          "Swimwear",
        ],
      },
      {
        category: "Fashion Accessories",
        items: [
          "Wallets",
          "Belts",
          "Perfumes & Body Mists",
          "Sunglasses & Frames",
          "Deodorants",
          "Ties, Cufflinks & Pocket Squares",
          "Accessory Gift Sets",
          "Caps & Hats",
          "Mufflers, Scarves & Gloves",
          "Rings & Wristwear",
          "Helmets",
          "Handkerchief",
          "Watches",
        ],
      },
    ],
  },
  {
    title: "KIDS",
    img: img1, // Add an image path if available
    categories: [
      {
        category: "Boys Clothing",
        items: [
          "T-Shirts",
          "Shirts",
          "Shorts",
          "Jeans",
          "Trousers",
          "Ethnicwear",
          "Track Pants & Pyjamas",
          "Jackets , Sweater & Sweatshirts",
          "Innerwear & Sleepwear",
          "Pullover",
          "Kurta Pyjama",
          "Nightsuit",
          "Bermuda",
          "Coordinated Sets",
          "Blazers",
          "Suits",
          "Tracksuits",
          "Nehru Jacket",
          "Capris",
          "School Uniform",
          "Rain Jackets",
        ],
      },
      {
        category: "Girls Clothing",
        items: [
          "Dresses",
          "Tops",
          "T-Shirts",
          "Ethnicwear",
          "Dungarees & Jumpsuits",
          "Skirts & Shorts",
          "Tights & Leggings",
          "Jeans, Trousers & Capris",
          "Jacket, Sweater & Sweatshirts",
          "Innerwear & Sleepwear",
          "Jegging",
          "Nightsuits",
          "Pyjamas",
          "Coordinated Sets",
          "School Uniform",
        ],
      },
      {
        category: "Boys Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Sandals",
          "Flip Flops",
          "Mojaris",
          "Floaters",
        ],
      },
      {
        category: "Girls Footwear",
        items: ["Casual Shoes", "Flats", "Heels", "Flip Flops", "Sandals"],
      },
      {
        category: "Infants",
        items: [
          "Rompers & Onesies",
          "Gift Sets",
          "T-Shirts & Tops",
          "Dresses",
          "Bottomwear",
          "Innerwear & Sleepwear",
          "Infants Accessories",
          "Winterwear",
        ],
      },
      {
        category: "Kids Accessories",
        items: [
          "Bags & Backpacks",
          "Watches",
          "Jewellery & Hair Accessories",
          "Handkerchief",
          "Sunglasses & Frames",
          "Socks",
        ],
      },
    ],
  },
  {
    title: "HOME",
    img: img1, // Add image path like "/images/home.jpg" if needed
    categories: [
      {
        category: "Bed Linen & Furnishing",
        items: [
          "Bedsheets",
          "Bedding Sets",
          "Blankets, Quilts & Dohars",
          "Pillows & Pillows Covers",
          "Bed Covers",
        ],
      },
      {
        category: "Flooring",
        items: ["Carpets", "Floor Mats & Dhurries", "Door Mats"],
      },
      {
        category: "Bath",
        items: [
          "Bath Towels",
          "Hand & Face Towels",
          "Towel Sets",
          "Bathroom Accessories",
        ],
      },
      {
        category: "Lamps & Lighting",
        items: ["Floor Lamps", "Table Lamps", "Wall Lamps"],
      },
      {
        category: "Home Utility",
        items: [
          "Aromas & Candles",
          "Clocks",
          "Curtains",
          "Umbrella",
          "Showpieces & Vases",
          "Iron",
          "Bottles & Jugs",
          "Flasks",
          "Lunch Box",
          "Containers",
          "Trollery Bags",
          "Luggage Bags",
        ],
      },
      {
        category: "Kitchen & Table Utility",
        items: [
          "Cookware",
          "Storage",
          "Kettle",
          "Induction Base",
          "Mixer Grinder",
          "Sandwich maker",
          "Table Covers & Furnishings",
          "Cutlery Sets",
          "Bowl",
          "Casseroles",
          "Glass Sets",
          "Mugs",
          "Plate",
          "Dinner Sets",
          "Trays",
        ],
      },
    ],
  },
];

export const categoryLinks = [
  { name: "WOMEN" },
  { name: "MEN" },
  { name: "KIDS" },
  { name: "HOME" },
  { name: "HEADWEAR" },
];
