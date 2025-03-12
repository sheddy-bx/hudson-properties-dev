export interface Listing {
  amenities: string[];
  bathrooms: number;
  bedrooms: number;
  date_available: Date;
  exclusive: null;
  fee_structure: string;
  first_showing_date: Date;
  floor: string;
  furnished_price: null;
  id: number;
  last_listed_at: Date;
  layout: string;
  listing_type: string;
  pets: string;
  price: string;
  property_type: string;
  status: string;
  square_footage: number;
  total_rooms: number;
  view: string;
  exposures: string[];
  updated_at: Date;
  primary_video_url: string;
  secondary_video_url: string;
  virtual_tour_url: string;
  private: boolean;
  source_id: null;
  listing_broker_name: null;
  source: string;
  listing_contacts: null;
  mls_policies: null;
  listing_company: ListingCompany;
  access_info: null;
  viewing_contacts: any[];
  description: string;
  key_in_office: null;
  occupancy_status: string;
  furnished_type: string;
  commission_structure: null;
  street_address: string;
  unit_number: string;
  building: Building;
  photos: Photo[];
  contacts: Contact[];
  website_marketable: boolean;
  open_houses: any[];
  unit_type: null;
  featured: boolean;
  is_net_effective_price: boolean;
  incentives: string;
  min_lease_term: number;
  max_lease_term: number;
  min_price: null;
  max_price: null;
  incentives_marketing_description: null;
  application_url: string;
  renter_fee: string;
}

export interface Building {
  id: number;
  city: string;
  state: string;
  postal_code: string;
  amenities: string[];
  building_ownership: string;
  name: string;
  street_address: string;
  has_full_address: boolean;
  neighborhood: Neighborhood;
  location: Location;
  building_description: string;
  cross_streets: string[];
  source_id: null;
  appointment_link: null;
  application_link: null;
  building_age: null;
  year_built: null;
  floors: null;
  total_units: null;
  building_type: string;
  tax_lot: string;
  tax_block: string;
  community: null;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Neighborhood {
  id: number;
  name: string;
  area: string;
  city: string;
  state: string;
}

export interface Contact {
  agent_id: number;
  name: string;
  email: string;
  phone_number: string;
  mobile_phone_number: string;
  title: string;
  headshot: null;
}

export interface ListingCompany {
  company_id: number;
  name: string;
  phone_number: string;
  fax_number: string;
  email: string;
  website: string;
  address: string;
  logo: string;
}

export interface Photo {
  id: number;
  xlarge: string;
  media_type: MediaType;
  sort_order: number;
  description: null | string;
  thumbnail: string;
  small: string;
  large: string;
  original: string;
}

export type MediaType = "Floor plan" | "Photo";
