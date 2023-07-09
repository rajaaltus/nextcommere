export type Category = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  isactive: boolean;
  image: any;
  dishes: any[];
};

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  isactive: boolean;
  image: any;
  category: Category;
};
