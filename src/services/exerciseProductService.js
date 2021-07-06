
const products = [
  {
    _id: "1016",
    value: 0,
    image: "http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-mesmerize.png",
    brand: {_id: "123abc", name: "Lotus Cosmetics USA"},
    title:"Eye Shadow Palette Mesmerize",
    price: 0.0,
    price_sign: "$",
    description: "A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts."
  },
  {
    _id: "1015",
    value: 0,
    image: "http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-deluxe.png",
    brand: {_id: "123abc", name: "Lotus Cosmetics USA"},
    title:"Eye Shadow Palette Deluxe",
    price: 0.0,
    price_sign: "$",
    description: "A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts."
  },
  {
    _id: "1014",
    value: 0,
    image: "http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-smokey.png",
    brand: {_id: "123abc", name: "Lotus Cosmetics USA"},
    title:"Eye Shadow Palette Smokey",
    price: 0.0,
    price_sign: "$",
    description: "Easily blendable shades give you the ability to create effortlessly natural or dramatic looks."
  },
  {
    _id: "1013",
    value: 0,
    image: "http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-seduction.png",
    brand: {_id: "123abc", name: "Lotus Cosmetics USA"},
    title: "Eye Shadow Palette Seduction",
    price: 0.0,
    price_sign: "$",
    description: "A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts."
  },
  {
    _id: "1012",
    value: 0,
    image: "https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-cocoa.png",
    brand: {_id: "123abc", name: "Lotus Cosmetics USA"},
    title: "Eye Shadow Palette Cocoa",
    price: 0.0,
    price_sign: "$",
    description: "Easily blendable shades give you the ability to create effortlessly natural or dramatic looks."
  },
  {
    _id: "815",
    value: 0,
    image: "https://www.clinique.com/media/export/cms/products/181x209/clq_ZCAE02_181x209.png",
    brand: {_id: "456def", name: "Clinique"},
    title:"Wear Everywhere Neutrals All About Shadow\u0026trade; 8-Pan Palette",
    price: 0.0,
    price_sign: "$",
    description: "Versatile eye shadow palettes are perfect for night when you layer multiple shades for extra depth and dimension."
  },
  {
    _id: "814",
    value: 0,
    image: "https://www.clinique.com/media/export/cms/products/181x209/clq_ZJPL01_181x209.png",
    brand: {_id: "456def", name: "Clinique"},
    title:"Pretty Easy™ Eye Palette",
    price: 0.0,
    price_sign: "$",
    description: "Clinique's Pretty Easy Eye Palette comes with eight shades of long-wearing All About Shadow."
  },
  {
    _id: "804",
    value: 0,
    image: "https://www.clinique.com/media/export/cms/products/181x209/clq_K2NY01_181x209.png",
    brand: {_id: "456def", name: "Clinique"},
    title: "Clinique + Jonathan Adler: Limited Edition Chic Colour Kit",
    price: 0.0,
    price_sign: "$",
    description: "A refreshingly modern eye shadow clutch in one of designer Jonathan Adler’s signature geometric prints."
  },
  {
    _id: "697",
    value: 0,
    image: "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y9185280_F918528000.jpg",
    brand: {_id: "789ghi", name: "Dior"},
    title:"Couture Colour Wardrobe palette",
    price: 0.0,
    price_sign: "$",
    description: "Directly inspired by runway shows, the Couture Colour Wardrobe palette teams fresh and natural colours."
  },
  {
    _id: "696",
    value: 0,
    image: "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y9185290_F918529000.jpg",
    brand: {_id: "789ghi", name: "Dior"},
    title:"Colour Design Eye palette",
    price: 0.0,
    price_sign: "$",
    description: "Inspired by runway shows, the Colour Design Eye palette mixes glowy and iridescent colours with matte and confident shades."
  },
  {
    _id: "530",
    value: 0,
    image: "https://www.smashbox.com/media/images/products/388x396/sbx_sku_60680_388x396_0.jpg",
    brand: {_id: "11ab11", name: "Smashbox"},
    title:"Double Exposure Palette",
    price: 0.0,
    price_sign: "$",
    description: "Pros in our L.A. photo studio created this transformative palette to multiply their eye shadow collections by adding water."
  },
  {
    _id: "528",
    value: 0,
    image: "https://www.smashbox.com/media/images/products/388x396/sbx_sku_56725_388x396_0.jpg",
    brand: {_id: "11ab11", name: "Smashbox"},
    title:"Mini Full Exposure Palette",
    price: 0.0,
    price_sign: "$",
    description: "Pros in our L.A. photo studio created this transformative palette to multiply their eye shadow collections by adding water."
  },
  {
    _id: "527",
    value: 0,
    image: "https://www.smashbox.com/media/images/products/388x396/sbx_sku_60560_388x396_0.jpg",
    brand: {_id: "11ab11", name: "Smashbox"},
    title:"Full Exposure Palette",
    price: 0.0,
    price_sign: "$",
    description: "Pros in our L.A. studio use neutral eye shadows constantly, and they LOVE having the option to turn luster up or down."
  },
  {
    _id: "311",
    value: 0,
    image: "https://d3t32hsnjxo7q6.cloudfront.net/i/d6bf791aee472d5cc9d402a4227b10b8_ra,w158,h184_pa,w158,h184.jpg",
    brand: {_id: "12ab34", name: "L'Oréal"},
    title:"L'Oreal Colour Riche La Palette Nude in Nude 02",
    price: 0.0,
    price_sign: "$",
    description: "Inspired by makeup designers 'Must Have' palettes, the L'Oreal La Palette Nude \noffers everything you need."
  },
  {
    _id: "306",
    value: 0,
    image: "https://d3t32hsnjxo7q6.cloudfront.net/i/cefc37500e17a39af22b2be42ac00abf_ra,w158,h184_pa,w158,h184.jpg",
    brand: {_id: "56cd78", name: "Physicians Formula"},
    title:"Physicians Formula Shimmer Strips Extreme Shimmer Shadow \u0026 Liner Palette",
    price: 0.0,
    price_sign: "$",
    description: "This Physicians Formula Shimmer Strips Extreme Shimmer Shadow \u0026 Liner Palette gives you 6 shades!"
  },
  {
    _id: "295",
    value: 0,
    image: "https://d3t32hsnjxo7q6.cloudfront.net/i/201350fd3e173307ade44520dc87d8fb_ra,w158,h184_pa,w158,h184.png",
    brand: {_id: "91ef23", name: "Maybelline"},
    title: "Maybelline The Nudes Eye Shadow Palette",
    price: 0.0,
    price_sign: "$",
    description: "Maybelline The Nudes Eye Shadow Palette let's you create looks from day to night."
  },
  {
    _id: "286",
    value: 0,
    image: "https://d3t32hsnjxo7q6.cloudfront.net/i/49d98e112e77d2a9a0c8fad28df89a1e_ra,w158,h184_pa,w158,h184.png",
    brand: {_id: "91ef23", name: "Maybelline"},
    title: "Maybelline The Nudes Eyeshadow Palette in The Blushed Nudes",
    price: 0.0,
    price_sign: "$",
    description: "Create looks from day to night and deep to light with Maybelline's The Blushed Nudes Eyeshadow Palette."
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(p => p._id === id);
}
