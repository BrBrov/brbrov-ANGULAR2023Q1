
export interface YouTubeState {
  state: Card[]
}

export interface UserCards {
  state: Card[]
}

export interface YouTubeClientStore {
  cards: UserCards;
  videos: YouTubeState;
}
