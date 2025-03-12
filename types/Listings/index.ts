export interface Listings {
  page: number;
  total_pages: number;
  total_items: number;
  items: Item[];
}

export interface Item {
  amenities: string[];
  bathrooms: number;
  bedrooms: number;
  date_available: Date | null;
  exclusive: boolean | null;
  fee_structure: null | string;
  first_showing_date: Date | null;
  floor: null | string;
  furnished_price: null;
  id: number;
  last_listed_at: Date;
  layout: Layout;
  listing_type: string;
  pets: Pets;
  price: string;
  property_type: string;
  status: string;
  square_footage: number | null;
  total_rooms: number;
  view: null | string;
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
  occupancy_status: null | string;
  furnished_type: string;
  commission_structure: null;
  street_address: string;
  unit_number: string;
  building: Building;
  photos: Photo[];
  contacts: Contact[];
  website_marketable: boolean;
  open_houses: OpenHouse[];
  unit_type: UnitType | null;
  featured: boolean;
  is_net_effective_price: boolean;
  incentives: Incentives;
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
  city: City;
  state: string;
  postal_code: string;
  amenities: string[];
  building_ownership: BuildingOwnership;
  name: string;
  street_address: string;
  has_full_address: boolean;
  neighborhood: Neighborhood;
  location: Location;
  building_description: string;
  cross_streets: CrossStreet[];
  source_id: null;
  appointment_link: null;
  application_link: null;
  building_age: null | string;
  year_built: number | null;
  floors: number | null;
  total_units: number | null;
  building_type: BuildingType;
  tax_lot: string;
  tax_block: string;
  community: Community | null;
}

export type BuildingOwnership = "Multi-family" | "None";

export type BuildingType = "Elevator" | "High-Rise" | "Mid-Rise";

export type City = "Brooklyn" | "Manhattan";

export interface Community {
  id: number;
  name: string;
  street_address: string;
  city: City;
  state: string;
  postal_code: string;
  website_url: string;
  description: string;
  team_id: number;
  special_offers: string;
}

export type CrossStreet = "Fenimore St" | "New York Ave" | "Nostrand Ave";

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Neighborhood {
  id: number;
  name: NeighborhoodName;
  area: Area;
  city: City;
  state: string;
}

export type Area = "Midtown Manhattan" | "None";

export type NeighborhoodName =
  | "Flatbush"
  | "Hell's Kitchen"
  | "Prospect Lefferts Gardens";

export interface Contact {
  agent_id: number;
  name: string;
  email: string;
  phone_number: string;
  mobile_phone_number: string;
  title: string;
  headshot: null;
}

export type Incentives = "" | "1 Month Free" | "1 Month OP or 1 Month Free";

export type Layout = "Studio" | "1 Bedroom" | "2 Bedroom";

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

export interface OpenHouse {
  start_time: string;
  end_time: string;
  date: Date;
  broker_only: boolean;
  appointment_only: boolean;
}

export type Pets = "Pets Allowed" | "Pets Allowed Case by Case";

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

export interface UnitType {
  id: number;
  name: string;
  description: string;
}
