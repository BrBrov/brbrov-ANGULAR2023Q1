export {};

declare global {
  type ResponseSearchData = {
    'kind': string,
    'etag': string,
    'nextPageToken': string,
    'regionCode': string,
    'pageInfo': PageInfo,
    'items': Array<SearchItem>
  };

  type SearchItem = {
    'kind': string,
    'etag': string,
    'id':{
      'kind': string,
      'videoId': string
    }
  };

  type ResponseData = {
    'kind': string,
    'etag': string,
    'pageInfo': PageInfo,
    'items': DataItem[]
  };

  type PageInfo = {
    'totalResults': number,
    'resultsPerPage': number
  };

  type DataItem = {
    'kind': string,
    'etag': string,
    'id': string,
    'snippet': SnippetData,
    'statistics': Statistics
  };

  type SnippetData = {
    'publishedAt': string,
    'channelId': string,
    'title': string,
    'description': string,
    'thumbnails': Thumbnails,
    'channelTitle': string,
    'tags': string[],
    'categoryId': string,
    'liveBroadcastContent': string,
    'localized': Localized,
    'defaultAudioLanguage': string
  };

  type Thumbnails = {
    'default': Thumbnail,
    'medium': Thumbnail,
    'high': Thumbnail,
    'standard': Thumbnail,
    'maxres': Thumbnail
  };

  type Thumbnail = {
    'url': string,
    'width': number,
    'height': number
  };

  type Localized = {
    'title': string,
    'description': string
  };

  type Statistics = {
    'viewCount': string,
    'likeCount': string,
    'dislikeCount': string,
    'favoriteCount': string,
    'commentCount': string
  };

  type EventData = {
    'type': string;
    'mode': boolean | string ;
  };

  type AuthData = {
    'name': string,
    'surname': string,
    'mail': string,
    'password': string,
    'key'?: string
  };

  type AccountEvent = {
    'name': string,
    'surname': string,
    'ev': boolean
  };

  type Card = {
    id: string,
    title: string,
    description: string,
    image: string,
    video: string,
    date: string,
    likes?: string,
    dislikes?: string,
    comments?: string,
    view?: string
  };
}
