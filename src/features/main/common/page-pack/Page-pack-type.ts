export type getPackCardsType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

export type responsePackCardsType = {
  cards: Array<cardType>
  packUserId: string
  packName: string
  packPrivate: boolean
  packCreated: string
  packUpdated: string
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
  token: string
  tokenDeathTime: number
}

export type cardType = {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  comments: string
  type: string
  rating: number
  more_id: string
  created: string
  updated: string
}

export type responseCardType = {
  "newCard": {
    _id: string
    cardsPack_id: string
    user_id: string
    answer: string
    question: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    __v: 0
  },
  token: string
  tokenDeathTime: number
}

export type dataCardType = {
  cardsPack_id: string
  question?: string
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type dataUpdateCardType = {
  _id: string
  cardsPack_id?: string
  user_id?: string
  answer?: string
  question?: string
  grade?: number
  shots?: number
  comments?: string
  type?: string
  rating?: number
  more_id?: string
  created?: string
  updated?: string
}

export type dataNewCard = {
  question: string
  answer: string
}

export type dataUpdateCard = dataNewCard
