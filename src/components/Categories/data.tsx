interface ICategoryItem {
  title: string;
  categories: string;
  id: number,
  ellipseColor: string
}

export const categoriesItems: ICategoryItem[] = [
  {
    title: 'работа',
    categories: 'work',
    id: 1,
    ellipseColor: 'work'
  },
  {
    title: 'учеба',
    categories: 'studies',
    id: 2,
    ellipseColor: 'studies'
  },
  {
    title: 'покупки',
    categories: 'shop',
    id: 3,
    ellipseColor: 'shop'
  },
  {
    title: 'спорт',
    categories: 'sport',
    id: 4,
    ellipseColor: 'sport'
  },
];
