import React from 'react'
import { useParams } from 'react-router-dom'

interface CategoryProps {
  title?: string
  items?: { id: number; name: string; imageUrl: string; price: number }[]
}

export const Category: React.FC<CategoryProps> = ({ title, items }) => {
  console.log('Title: ', title)
  console.log(
    'Items: ',
    items?.map((item) => item.name),
  )
  const { category } = useParams()
  return <div>Category{category ? `: This is the ${category}` : null}</div>
}
