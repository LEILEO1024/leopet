export interface Pet {
  id: number;
  name: string;
  type: "dog" | "cat" | "parrot" | "hamster" | "rabbit" | "fish";
  breed: string;
  age: string;
  gender: "雄性" | "雌性";
  trained: boolean;
  description: string;
  image: string;
  badge?: string;
  tags: string[];
  views: number;
  price?: string;
  slug: string;
}

export interface Category {
  title: string;
  count: number;
  description: string;
  icon: string;
  href: string;
}

export interface Adopter {
  id: number;
  name: string;
  description: string;
  targetType: string;
  image: string;
  views: number;
  slug: string;
}

export interface Venue {
  id: number;
  name: string;
  location: string;
  description: string;
  category: string;
  rating: number;
  image: string;
  views: number;
  slug: string;
}

export interface Service {
  id: number;
  name: string;
  location?: string;
  description: string;
  category: string;
  rating: number;
  image: string;
  views: number;
  slug: string;
}

export interface Guide {
  id: number;
  title: string;
  category: string;
  rating: number;
  image: string;
  views: number;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  views: number;
  slug: string;
}

export interface EncyclopediaItem {
  title: string;
  image: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
