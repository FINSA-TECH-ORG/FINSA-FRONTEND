export type MerchCategory = 'All' | 'Clothe' | 'Headwear & Accessories';

export interface MerchItem {
  id: string;
  name: string;
  category: Exclude<MerchCategory, 'All'>;
  subtitle: string;
  price: number;
  tag?: string;
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: ('SM' | 'MD' | 'LG' | 'XL' | 'XXL' | 'One Size')[];
  imagePath: string;
  orderLink: string; // Link to your Paystack/Flutterwave storefront or Google Form
}

export const MERCH_DEADLINE = "December 11, 2026";
export const EVENT_DATE = "December 14, 2026";

export const FINSA_MERCH_CATALOG: MerchItem[] = [
  {
    id: 'plain-white-finsa-zip',
    name: "FINSA '26 Official Orientation Tee",
    category: "Clothe",
    subtitle: "Heavyweight Combed Cotton • Event Mandatory",
    price: 6000,
    tag: "Orientation Essential",
    colors: [
      { name: "FINSA Royal Blue", hex: "#1D4ED8" },
      { name: "Crisp White", hex: "#FFFFFF" },

    ],
    sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
    imagePath: "/PlainForFreshers.jpeg",
    orderLink: "#order-tee"
  },
  {
    id: 'plain-cream-finsa-zip',
    name: "FINSA Executive Piqué Polo",
    category: "Clothe",
    subtitle: "Plain Cream FINSA Polo",
    price: 0,
    tag: "Orientation Essential",
    colors: [
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "FINSA Royal Blue", hex: "#1D4ED8" }
    ],
    sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
    imagePath: "/PlainCreamForExe.jpeg",
    orderLink: "#order-polo"
  },

   {
    id: 'cream-finsa-industry-exec-polo',
    name: "FINSA Executive Piqué Polo",
    category: "Clothe",
    subtitle: "Plain Executive Industry FINSA Polo",
    price: 0,
    tag: "Best Seller",
    colors: [
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "FINSA Royal Blue", hex: "#1D4ED8" }
    ],
    sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
    imagePath: "/CreamIndustryForExe.jpeg",
    orderLink: "#order-polo"
  },
  {
    id: 'black-finsa-industry-zip',
    name: "Navy Blue Industry For Freshers",
    category: "Clothe",
    subtitle: "Fleece-Lined • Minimalist Chest Monogram",
    price: 6000,
    tag: "Limited Edition",
    colors: [
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "Slate Grey", hex: "#475569" }
    ],
    sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
    imagePath: "/BlackIndustryFresher.jpeg",
    orderLink: "#order-sweatshirt"
  },

   {
    id: 'plain-black-finsa-zip',
    name: "Includes the Finance industry names",
    category: "Clothe",
    subtitle: "Fleece-Lined • Minimalist Chest Monogram",
    price: 6000,
    tag: "Orientation Essential - Limited Edition",
    colors: [
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "Slate Black", hex: "#000" }
    ],
    sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
    imagePath: "/PlainBlackForFresher.jpeg",
    orderLink: "#order-sweatshirt"
  },
  {
    id: 'plain-navy-blue-finsa-navy-blue',
    name: "FINSA Plain Navy Blue",
    category: "Clothe",
    subtitle: "Navy Blue paired with light blue to represent what you stand for",
    price: 6000,
    tag :"Orientation Essential - Limited Edition",
    colors: [
      { name: "FINSA Royal Blue", hex: "#1D4ED8" },
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "Crisp White", hex: "#FFFFFF" }
    ],
    sizes: ['One Size'],
    imagePath: "/PlainNavyBlueForFreshers.jpeg",
    orderLink: "#order-clothe"
  },
  {
    id: 'navy-blue-finsa-industry-zip',
    name: "FINSA Black Industry Names Polo",
    category: "Clothe",
    subtitle: "Navy Blue paired with light blue to represent what you stand for",
    tag: "Orientation Essential - Limited Edition",
    price: 6000,
    colors: [
      { name: "FINSA Royal Blue", hex: "#1D4ED8" },
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "Crisp White", hex: "#FFFFFF" }
    ],
    sizes: ['One Size'],
    imagePath: "/NavyBlueIndustryForFreshers.jpeg",
    orderLink: "#order-cap"
  },
  {
    id: 'white-finsa-industry-zip',
    name: "FINSA '26 Official Orientation Tee",
    category: "Clothe",
    subtitle: "Heavyweight Combed Cotton • Event Mandatory",
    price: 6000,
    tag: "Orientation Essential - Limited Edition",
    colors: [
    
      { name: "Crisp White", hex: "#FFFFFF" },

    ],
    sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
    imagePath: "/IndustryNamesForFreshers.jpeg",
    orderLink: "#order-tee"
  },
];