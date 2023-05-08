import {
  BackgroundImage,
  CategoriesContainer,
  CategoryBodyContainer,
  CategoryContainer,
} from './Categories.style'

export const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ]

  return (
    <CategoriesContainer>
      {categories.map(({ title }) => (
        <CategoryContainer>
          <BackgroundImage />
          <CategoryBodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </CategoryBodyContainer>
        </CategoryContainer>
      ))}
    </CategoriesContainer>
  )
}
