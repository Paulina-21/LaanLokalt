/**
import { PetsAndPlantsPage } from './../pages/pets-and-plants/pets-and-plants.page';
 * Type for all kinds of items listed items, e.g. food, ressource, plant
 */
export interface IItem {
  ItemId: number
  Title: string
  Description: string
  Image: string
  CreatedDate: Date
  Type: Type
  FilterTag: FilterTag
  Address: string
  UserId: number
  Price: number
}

/**
 * Options for the FilterTag property of IItem.
 */
export enum FilterTag {
  offered = 1,
  wanted = 2,

}

/**
 * Options for the Type property of IItem. Describes what kind of item the specific object represents.
 */

export enum Type {
  food = 1,
  resources = 2,
  plantsAndAnimals = 3
}