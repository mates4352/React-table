import {PopupCard, PopupPack} from "../../utils/enum/popup";

export type GetCardsApiType = {
  cardPacks: Array<CardPacksType>
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export type CardPacksType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  deckCover: string
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
}

export type CardsPackOptionType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number,
  pageCount?: number
  user_id?: string
  block?: boolean
}

export type DataNewPackType = {
  name: string
  private: boolean
}

export type DataEditPackType = DataNewPackType

export type PopupPackType = PopupPack.NewPack | PopupPack.EditPack | PopupPack.DeletePack;
export type PopupCardType = PopupCard.NewCard | PopupCard.EditCard | PopupCard.DeleteCard;

export type dataUpdateRatingType = {
  grade: number
  card_id: string
}
