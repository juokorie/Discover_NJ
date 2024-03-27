export interface ListingGeo {
    type: string;
    features: Feature[];
  }
  
  export interface Feature {
    geometry: Geometry;
    type?: string;
    rating: string;
    host_name: string;
    id: string;
    host_since: string;
    latitude: number;
    longitude: number;
    name: string;
    number_of_reviews: string;
    room_type: string;
    price: string;
    smart_location: string;
    town: string;
    listing_url: string;
    medium_url: string;
    host_picture_url: string;
    desciption: string;
  }
  
  export interface Geometry {
    type: string;
    coordinates: number[];
  }