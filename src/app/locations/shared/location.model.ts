export  interface ILocation {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  items: IItem[];
}

export  interface IItem {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  categories: number[];
  quantity: number;
  price: number;
}
