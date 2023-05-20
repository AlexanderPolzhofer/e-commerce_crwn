import { CategoryItem } from '../CategoryItem/CategoryItem'
import { DirectoryContainer } from '../Directory/Directory.style'
import { categories } from '../../utils/categories'

export const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map(({ title, imageUrl }, idx) => (
        <CategoryItem key={idx} imageUrl={imageUrl} title={title} />
      ))}
    </DirectoryContainer>
  )
}
