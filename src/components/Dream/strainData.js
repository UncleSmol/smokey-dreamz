export const strainData = [
  // Premium Strains
  {
    id: 's1',
    type: 'strain',
    name: 'Purple Haze',
    category: 'Sativa',
    thc: '22%',
    cbd: '0.1%',
    price: 'R250/g',
    effects: ['Euphoric', 'Creative', 'Energetic'],
    flavors: ['Berry', 'Sweet', 'Earthy'],
    description: 'A legendary sativa strain known for its distinctive flavor and cerebral high.',
    images: ['https://lh5.googleusercontent.com/proxy/rUPQArdCXIq17EnxPE1H_nOJ5QS_fpNr_BEtoweQEFNWMLy-03Mzt7hH66UGVsPGz_dUBdJgBCdLnshkaB3ru1XfO7FcUXl4CTHa91_eqtR3ov4XzbjRFI4N2yLBu466SjCE5k93ktkgbcD1QG_H_z-A0rc7gVprmQSUwq2yQhoiWkBC_YyrlIw'],
    rating: 4.8,
    reviews: 127,
    inStock: true
  },
  {
    id: 's2',
    type: 'strain',
    name: 'OG Kush',
    category: 'Hybrid',
    thc: '24%',
    cbd: '0.2%',
    price: 'R280/g',
    effects: ['Relaxed', 'Happy', 'Uplifted'],
    flavors: ['Pine', 'Woody', 'Peppery'],
    description: 'A potent hybrid with a perfect balance of head and body effects.',
    images: ['https://cafe420.co.za/wp-content/uploads/2022/05/PKS-og-kush.jpg'],
    rating: 4.9,
    reviews: 245,
    inStock: true
  },
  {
    id: 's3',
    type: 'strain',
    name: 'Northern Lights',
    category: 'Indica',
    thc: '20%',
    cbd: '0.1%',
    price: 'R220/g',
    effects: ['Relaxed', 'Sleepy', 'Happy'],
    flavors: ['Sweet', 'Spicy', 'Earthy'],
    description: 'A classic indica strain cherished for its resinous buds and calming effects.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynETM1sscqYshZYKgAHH9AW2wIqG4WoiouOcqbfVmDOVOUJ4PQCaFTyl_qfhLgslkEGA&usqp=CAU'],
    rating: 4.7,
    reviews: 190,
    inStock: false
  },
  // Concentrates
  {
    id: 'c1',
    type: 'concentrate',
    name: 'Live Resin',
    category: 'Extract',
    thc: '85%',
    cbd: '2%',
    price: 'R400/g',
    terpenes: ['Limonene', 'Myrcene', 'Caryophyllene'],
    description: 'A high-terpene concentrate made from fresh frozen cannabis.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJRW8TQUiJMKZg195g6p5XtcrBLIelmyMGw&s'],
    rating: 4.6,
    reviews: 88,
    inStock: true
  },
  {
    id: 'c2',
    type: 'concentrate',
    name: 'Premium Shatter',
    category: 'Extract',
    thc: '92%',
    cbd: '1%',
    price: 'R450/g',
    terpenes: ['Pinene', 'Ocimene', 'Linalool'],
    description: 'A potent and glassy concentrate known for its purity.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMCQQ07w9xoOhnb8-rffDzs_PrzSroVTQUw&s'],
    rating: 4.9,
    reviews: 152,
    inStock: true
  },
   {
    id: 'c3',
    type: 'concentrate',
    name: 'Bubble Hash',
    category: 'Extract',
    thc: '40-60%',
    cbd: '5%',
    price: 'R250/g',
    terpenes: ['Humulene', 'Terpinolene'],
    description: 'A solventless concentrate made using ice water extraction.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNEgpKAQIm18DpTneOPTUASq6qwUMIhffMubbvRIVCZacQO5kvyR4cWWZ7wyU3aHXHUw&usqp=CAU'],
    rating: 4.5,
    reviews: 62,
    inStock: false
  },
  // Edibles
  {
    id: 'e1',
    type: 'edible',
    name: 'Dream Gummies',
    category: 'Gummies',
    thc: '10mg/piece',
    cbd: '2mg/piece',
    price: 'R80',
    pieces: '10',
    flavors: ['Berry Mix', 'Tropical'],
    effects: ['Relaxed', 'Happy'],
    description: 'Delicious and chewy gummies for a mellow experience.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIVtqOTfHY5caSfQvyFnDvTotAdYYlZZoAA&s'],
    rating: 4.7,
    reviews: 110,
    inStock: true
  },
  {
    id: 'e2',
    type: 'edible',
    name: 'Chocolate Bliss',
    category: 'Chocolate',
    thc: '5mg/square',
    cbd: '1mg/square',
    price: 'R120',
    pieces: '12',
    flavors: ['Milk Chocolate', 'Dark Chocolate'],
    effects: ['Euphoric', 'Creative'],
    description: 'Rich and decadent chocolate squares infused with cannabinoids.',
    images: ['https://livlwell-production-ror.s3-us-west-2.amazonaws.com/mediaitems/Product/Milk-Bliss-cup.png'],
    rating: 4.9,
    reviews: 180,
    inStock: true
  },
  {
    id: 'e3',
    type: 'edible',
    name: 'Baked Cookies',
    category: 'Baked',
    thc: '15mg/cookie',
    pieces: '6',
    price: 'R150',
    flavors: ['Chocolate Chip', 'Vanilla'],
    effects: ['Potent', 'Long-lasting'],
    description: 'Classic chocolate chip cookies with a twist.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1LgRPqk2o2CfT7qRgX34pMBwhfXXtGCAwA&s'],
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  // Accessories
  {
    id: 'a1',
    type: 'accessory',
    name: 'Premium Grinder',
    category: 'Tools',
    material: 'Aircraft Aluminum',
    price: 'R350',
    features: ['4-piece', 'Kief Catcher', 'Magnetic Lid'],
    description: 'Professional-grade herb grinder with diamond-sharp teeth.',
    images: ['https://m.media-amazon.com/images/I/71YTHrKX+qL.jpg'],
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: 'a2',
    type: 'accessory',
    name: 'Glass Bubbler',
    category: 'Glass',
    material: 'Borosilicate Glass',
    price: 'R650',
    features: ['Percolator', 'Ice Catch', 'Thick Glass'],
    description: 'Handcrafted glass bubbler for smooth hits.',
    images: ['https://blackleaf.eu/media/image/g0/3f/bd/blaze-glass-bong-turbine-trommelperkolator-amberKQVoU4Bh2LeLy_600x600@2x.jpg'],
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 'a3',
    type: 'accessory',
    name: 'Rolling Tray Set',
    category: 'Tools',
    material: 'Metal',
    price: 'R200',
    features: ['Large Tray', 'Storage Compartments', 'Magnetic Closures'],
    description: 'Complete rolling tray set with all essentials.',
    images: ['https://i.etsystatic.com/16265145/r/il/de48c5/2361834382/il_fullxfull.2361834382_s6l4.jpg'],
    rating: 4.7,
    reviews: 140,
    inStock: false
  },

  {
    id: 'a4',
    type: 'accessory',
    name: 'Vaporizer Pen',
    category: 'Vaporizer',
    material: 'Stainless Steel',
    price: 'R1200',
    features: ['Portable', 'Adjustable Temperature', 'Fast Heating'],
    description: 'Compact vaporizer pen for on-the-go use.',
    images: ['https://www.vaporfi.com/media/catalog/product/cache/95468fde19044ff554fbc48c9cafa79c/s/m/smok-vape-pen-v2-kit---group.webp']
  },

  {
    id: 'a5',
    type: 'accessory',
    name: 'Bong Cleaner',
    material: 'Natural Ingredients',
    price: 'R100',
    features: ['Non-toxic', 'Fast-acting', 'Eco-friendly'],
    description: 'Keep your glassware clean and fresh with our natural cleaner.',
    images: ['https://puff.co.za/cdn/shop/products/20210714_141659_800x.jpg?v=1626867851'],
    rating: 4.5,
}
];