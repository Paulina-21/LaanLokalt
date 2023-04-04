export interface IItem {
  ItemId: number
  Title: string
  Description: string
  Image: string
  CreatedDate: Date
  Type: Type
  FilterTag: FilterTag
  Adress: string
  UserId: number
  Price: number
}

export enum FilterTag {
  offered = 1,
  wanted = 2,
  myPosts = 3
}
export enum Type {
  food = 1,
  tool = 2,
  service = 3
}