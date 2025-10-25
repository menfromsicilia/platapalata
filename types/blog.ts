// Блог статья
export interface BlogPost {
  title: string
  description: string
  image: string
  date: string
  author: string
  tags: string[]
  _path: string
  body?: any
}

// Мета информация блога
export interface BlogMeta {
  title: string
  description: string
  image?: string
}

