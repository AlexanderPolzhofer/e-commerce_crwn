import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from './CategoryItem.style'

interface CategoryItemProps {
  imageUrl: string
  title: string
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  imageUrl,
  title,
}) => (
  <CategoryContainer backgroundImage={imageUrl}>
    <BackgroundImage />
    <CategoryBodyContainer>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </CategoryBodyContainer>
  </CategoryContainer>
)
