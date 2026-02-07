export interface Property {
  id: string
  price: number
  address: string
  area: string
  bedrooms: number
  bathrooms: number
  sqft: number
  type: 'Detached House' | 'Semi-Detached House' | 'Terraced House' | 'Flat' | 'Bungalow'
  status: 'Active' | 'Under Offer' | 'Sold STC'
  badge?: 'New Listing' | 'Open House' | 'New Build'
  description: string
  features: string[]
  images: string[]
  yearBuilt?: number
  hasGarden: boolean
  parking: 'None' | '1 space' | '2+ spaces'
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    price: 425000,
    address: '1847 Maple Grove Lane',
    area: 'Acklam',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: 'Detached House',
    status: 'Active',
    description: 'Charming renovated home in desirable neighbourhood. Modern kitchen with stainless appliances, oak flooring throughout, spacious back garden perfect for entertaining. Close to top-rated schools and local amenities. Driveway parking for two cars.',
    features: ['Modern kitchen', 'Oak flooring', 'Back garden', 'Driveway parking', 'Double glazing', 'Gas central heating', 'Close to schools', 'Near shops'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '2',
    price: 285000,
    address: '892 Riverside Drive, Flat 4B',
    area: 'Middlesbrough',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1350,
    type: 'Flat',
    status: 'Active',
    badge: 'New Listing',
    description: 'Stunning riverside flat with panoramic views. Updated kitchen, in-unit washer/dryer, building amenities include gym and residents\' lounge. Walking distance to town centre dining and entertainment. Allocated parking space included.',
    features: ['River views', 'Modern kitchen', 'Washer/dryer', 'Building gym', 'Allocated parking', 'Lift access', 'Secure entry', 'Town centre location'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: false,
    parking: '1 space'
  },
  {
    id: '3',
    price: 825000,
    address: '456 Oceanview Boulevard',
    area: 'Saltburn-by-the-Sea',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    type: 'Detached House',
    status: 'Active',
    badge: 'Open House',
    description: 'Luxury coastal living at its finest. Chef\'s kitchen with high-end Bosch appliances, master bedroom with ensuite spa bathroom, extensive outdoor living space with sea views. Smart home technology throughout. Double garage.',
    features: ['Sea views', 'Designer kitchen', 'Ensuite bathrooms', 'Garden', 'Double garage', 'Smart home', 'Underfloor heating', 'High-spec finish'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '4',
    price: 345000,
    address: '2134 Pine Valley Court',
    area: 'Nunthorpe',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    type: 'Terraced House',
    status: 'Active',
    description: 'Move-in ready terraced house in prime location. Open-plan living, updated bathrooms, private patio area. Low service charges, attached single garage. Popular school catchment area.',
    features: ['Open-plan living', 'Modern bathrooms', 'Patio', 'Garage', 'Good schools', 'Quiet street', 'Recently decorated', 'Energy efficient'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '1 space'
  },
  {
    id: '5',
    price: 575000,
    address: '789 Heritage Lane',
    area: 'Yarm',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'Detached House',
    status: 'Under Offer',
    description: 'Beautiful family home on quiet cul-de-sac. Gourmet kitchen with island, formal dining room, converted loft space ideal for home office. Large plot with mature landscaping. Excellent transport links.',
    features: ['Kitchen island', 'Dining room', 'Loft conversion', 'Large garden', 'Mature trees', 'Quiet location', 'Off-street parking', 'Garage'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '6',
    price: 195000,
    address: '42 Victoria Gardens',
    area: 'Middlesbrough',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    type: 'Flat',
    status: 'Active',
    description: 'Affordable first-time buyer opportunity. Ground floor flat with private entrance, allocated parking, well-maintained communal gardens. Ideal investment property with strong rental demand in the area.',
    features: ['Ground floor', 'Private entrance', 'Allocated parking', 'Communal gardens', 'First-time buyer', 'Investment opportunity', 'Low service charge', 'Near shops'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: false,
    parking: '1 space'
  },
  {
    id: '7',
    price: 685000,
    address: '156 Kensington Park',
    area: 'Eaglescliffe',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    type: 'Detached House',
    status: 'Active',
    badge: 'New Build',
    description: 'Stunning new build with contemporary specification throughout. Bifold doors to garden, underfloor heating on ground floor, integrated Siemens appliances. 10-year NHBC warranty included. Show home available to view.',
    features: ['New build', 'Bifold doors', 'Underfloor heating', 'Integrated appliances', 'NHBC warranty', 'Modern specification', 'Energy efficient', 'Landscaped garden'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    yearBuilt: 2026,
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '8',
    price: 315000,
    address: '67 Orchard Way',
    area: 'Stokesley',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: 'Semi-Detached House',
    status: 'Active',
    description: 'Well-presented semi-detached home in sought-after village location. Extended kitchen/diner, conservatory overlooking garden, recently refitted bathroom. Excellent local schools and amenities within walking distance.',
    features: ['Village location', 'Extended kitchen', 'Conservatory', 'Refitted bathroom', 'Good schools', 'Off-street parking', 'Garden', 'Village amenities'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '9',
    price: 465000,
    address: '23 The Cedars',
    area: 'Ingleby Barwick',
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2200,
    type: 'Detached House',
    status: 'Active',
    description: 'Executive detached home on popular development. Spacious accommodation throughout, study/home office, integral garage. Generous gardens to front and rear. Excellent family location with parks and schools nearby.',
    features: ['Executive home', 'Home office', 'Integral garage', 'Front and rear gardens', 'Family location', 'Near schools', 'Quiet development', 'Driveway'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '10',
    price: 235000,
    address: '118 Station Road',
    area: 'Redcar',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    type: 'Terraced House',
    status: 'Active',
    description: 'Characterful Victorian terraced house with period features. High ceilings, original fireplaces, renovated kitchen. Courtyard garden. Walking distance to beach and town centre. Perfect for coastal living enthusiasts.',
    features: ['Period property', 'Original features', 'High ceilings', 'Renovated kitchen', 'Courtyard', 'Near beach', 'Town centre', 'Character property'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: 'None'
  },
  {
    id: '11',
    price: 380000,
    address: '92 Parkside Avenue',
    area: 'Marton',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    type: 'Semi-Detached House',
    status: 'Active',
    description: 'Beautifully maintained semi-detached home with modern updates throughout. Spacious lounge with bay window, contemporary kitchen with breakfast bar, well-maintained rear garden. Popular residential area with excellent schools.',
    features: ['Bay window', 'Modern kitchen', 'Breakfast bar', 'Rear garden', 'Modern bathroom', 'Driveway', 'Good schools', 'Residential area'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '1 space'
  },
  {
    id: '12',
    price: 525000,
    address: '14 Woodland Close',
    area: 'Yarm',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    type: 'Detached House',
    status: 'Active',
    badge: 'New Listing',
    description: 'Impressive family home in sought-after location. Spacious entrance hall, dual-aspect lounge, luxury kitchen with granite worktops, master bedroom with dressing area and ensuite. Landscaped gardens, double garage.',
    features: ['Entrance hall', 'Dual-aspect lounge', 'Granite worktops', 'Dressing area', 'Ensuite', 'Landscaped gardens', 'Double garage', 'Premium location'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '13',
    price: 165000,
    address: '56 Meadow Court, Flat 2',
    area: 'Thornaby',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: 'Flat',
    status: 'Active',
    description: 'Perfect starter home or investment property. Modern one-bedroom flat with open-plan living area, fitted kitchen, allocated parking. Popular residential development with good transport links. Low service charges.',
    features: ['Open-plan', 'Fitted kitchen', 'Allocated parking', 'First-time buyer', 'Investment property', 'Low service charge', 'Transport links', 'Modern development'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: false,
    parking: '1 space'
  },
  {
    id: '14',
    price: 750000,
    address: '8 The Grange',
    area: 'Hutton Rudby',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    type: 'Detached House',
    status: 'Active',
    description: 'Exceptional executive home in prestigious village setting. Magnificent entrance hall, multiple reception rooms, bespoke kitchen, home cinema room, gym. Landscaped grounds extending to approximately 0.5 acres. Triple garage.',
    features: ['Executive home', 'Multiple receptions', 'Bespoke kitchen', 'Home cinema', 'Gym', '0.5 acre plot', 'Triple garage', 'Village location'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '15',
    price: 295000,
    address: '71 Boundary Road',
    area: 'Linthorpe',
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1400,
    type: 'Terraced House',
    status: 'Active',
    description: 'Charming Victorian terraced house retaining many original features. High ceilings, feature fireplaces, spacious rooms throughout. Modern kitchen and bathroom. Enclosed rear yard. Convenient location for town centre and amenities.',
    features: ['Victorian property', 'Original features', 'High ceilings', 'Feature fireplaces', 'Modern kitchen', 'Modern bathroom', 'Enclosed yard', 'Town centre'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: 'None'
  },
  {
    id: '16',
    price: 410000,
    address: '29 Riverbank Gardens',
    area: 'Stockton-on-Tees',
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2100,
    type: 'Detached House',
    status: 'Active',
    description: 'Attractive detached home in popular riverside development. Versatile accommodation including conservatory, four good-sized bedrooms, family bathroom plus ensuite. Generous gardens, integral garage, driveway.',
    features: ['Riverside location', 'Conservatory', 'Ensuite', 'Family bathroom', 'Generous gardens', 'Integral garage', 'Driveway', 'Popular development'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '17',
    price: 215000,
    address: '134 Green Lane',
    area: 'Acklam',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1050,
    type: 'Terraced House',
    status: 'Active',
    badge: 'New Listing',
    description: 'Well-presented two-bedroom terraced house ideal for first-time buyers. Lounge, fitted kitchen, two bedrooms, bathroom. Rear garden with patio area. Off-street parking. Close to local schools and shops.',
    features: ['First-time buyer', 'Fitted kitchen', 'Rear garden', 'Patio', 'Off-street parking', 'Close to schools', 'Near shops', 'Well-presented'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '1 space'
  },
  {
    id: '18',
    price: 625000,
    address: '5 Manor House Court',
    area: 'Great Ayton',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2900,
    type: 'Detached House',
    status: 'Active',
    description: 'Stunning contemporary home in sought-after village. Open-plan living spaces, premium kitchen with island, bifold doors to garden, master suite with dressing room and luxury ensuite. Double garage, landscaped gardens.',
    features: ['Contemporary design', 'Open-plan', 'Premium kitchen', 'Island', 'Bifold doors', 'Master suite', 'Double garage', 'Village location'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '19',
    price: 180000,
    address: '88 Richmond Street',
    area: 'Middlesbrough',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 850,
    type: 'Terraced House',
    status: 'Active',
    description: 'Affordable terraced house perfect for investors or first-time buyers. Two reception rooms, fitted kitchen, two bedrooms, bathroom. Enclosed yard to rear. Good rental potential in established residential area.',
    features: ['Investment property', 'First-time buyer', 'Two receptions', 'Fitted kitchen', 'Enclosed yard', 'Rental potential', 'Residential area', 'Affordable'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: 'None'
  },
  {
    id: '20',
    price: 895000,
    address: '12 Belvedere Heights',
    area: 'Saltburn-by-the-Sea',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'Detached House',
    status: 'Active',
    description: 'Magnificent coastal residence with spectacular sea views. Luxurious accommodation over three floors, high-specification kitchen, cinema room, wine cellar, gym. Landscaped gardens, triple garage. Truly exceptional property.',
    features: ['Sea views', 'Three floors', 'Luxury specification', 'Cinema room', 'Wine cellar', 'Gym', 'Triple garage', 'Exceptional property'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '21',
    price: 355000,
    address: '43 Elmwood Avenue',
    area: 'Nunthorpe',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    type: 'Semi-Detached House',
    status: 'Active',
    description: 'Extended semi-detached home in desirable location. Spacious lounge, extended kitchen/dining room, three bedrooms, modern bathroom. Well-maintained gardens, driveway, garage. Excellent schools nearby.',
    features: ['Extended', 'Kitchen/dining room', 'Modern bathroom', 'Well-maintained gardens', 'Driveway', 'Garage', 'Excellent schools', 'Desirable location'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '22',
    price: 245000,
    address: '9 Brookfield Close',
    area: 'Ingleby Barwick',
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1200,
    type: 'Terraced House',
    status: 'Active',
    description: 'Well-proportioned terraced house on popular development. Good-sized lounge, fitted kitchen, three bedrooms, bathroom. Rear garden with lawn and patio. Parking to front. Family-friendly location with parks and schools.',
    features: ['Family-friendly', 'Good-sized rooms', 'Fitted kitchen', 'Rear garden', 'Lawn and patio', 'Parking', 'Near parks', 'Near schools'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '1 space'
  },
  {
    id: '23',
    price: 495000,
    address: '67 Woodland Drive',
    area: 'Eaglescliffe',
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2400,
    type: 'Detached House',
    status: 'Under Offer',
    description: 'Impressive family home on quiet cul-de-sac. Spacious hallway, dual-aspect lounge, separate dining room, modern kitchen, four bedrooms with ensuite to master. Mature gardens, double garage.',
    features: ['Cul-de-sac', 'Dual-aspect', 'Separate dining', 'Modern kitchen', 'Ensuite', 'Mature gardens', 'Double garage', 'Impressive'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '24',
    price: 325000,
    address: '18 Park View',
    area: 'Stokesley',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    type: 'Detached House',
    status: 'Active',
    description: 'Attractive detached bungalow in sought-after village. Level access throughout, spacious lounge, modern fitted kitchen, three bedrooms, ensuite and bathroom. Gardens to front and rear, driveway, garage.',
    features: ['Bungalow', 'Level access', 'Village location', 'Modern kitchen', 'Ensuite', 'Front and rear gardens', 'Driveway', 'Garage'],
    images: ['/images/property-4.jpg', '/images/property-5.jpg', '/images/property-6.jpg'],
    hasGarden: true,
    parking: '2+ spaces'
  },
  {
    id: '25',
    price: 275000,
    address: '156 Fountains Avenue',
    area: 'Middlesbrough',
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1300,
    type: 'Semi-Detached House',
    status: 'Active',
    badge: 'New Listing',
    description: 'Well-maintained semi-detached house in established location. Two reception rooms, fitted kitchen, three bedrooms, bathroom. Enclosed rear garden with lawn and patio. Off-street parking. Convenient for amenities.',
    features: ['Two receptions', 'Fitted kitchen', 'Enclosed garden', 'Lawn and patio', 'Off-street parking', 'Convenient location', 'Near amenities', 'Well-maintained'],
    images: ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg'],
    hasGarden: true,
    parking: '1 space'
  }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find(p => p.id === id)
}

export function getFeaturedProperties(limit: number = 6): Property[] {
  return PROPERTIES.filter(p => p.status === 'Active').slice(0, limit)
}

export function getSimilarProperties(property: Property, limit: number = 4): Property[] {
  const priceRange = 50000
  return PROPERTIES.filter(p =>
    p.id !== property.id &&
    p.status === 'Active' &&
    Math.abs(p.price - property.price) <= priceRange &&
    p.bedrooms === property.bedrooms
  ).slice(0, limit)
}
