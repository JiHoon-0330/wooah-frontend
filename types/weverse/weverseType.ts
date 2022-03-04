export type WeverseArtistId = 109 | 110 | 111 | 112 | 113 | undefined;
export type WeverseGradeType = "ARTIST" | "FAN";

export type WeverseContentsType =
  | "POST"
  | "ARTIST_POST"
  | "TO_FANS"
  | "MEDIA"
  | "COMMENT_DETAIL";

export type WeverseMediaType = "VIDEO" | "PHOTO";

export interface WeverseReturn {
  id: number;
  contentsId: string;
  contentsType: WeverseContentsType;
  comments: WeverseComment[][] | WeverseComment[];
  profileNickname: string;
  body: string;
  grade: WeverseGradeType;
  createdAt: string;
  photos?: WeversePhoto[];
  attachedVideos?: WeverseAttachedVideos[];
  artistId?: WeverseArtistId;
  postError?: boolean;
  title?: string;
  type?: WeverseMediaType;
  youtubeId?: string;
  isLocked?: boolean;
}

export interface WeverseComment {
  id: number;
  body: string;
  createdAt: string;
  grade: WeverseGradeType;
  profileNickname: string;
  artistId?: WeverseArtistId | undefined;
}

export interface WeversePhoto {
  postId: number;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  id: number;
  contentIndex: number;
  thumbnailImgUrl: string;
  thumbnailImgWidth: number;
  thumbnailImgHeight: number;
  orgImgUrl: string;
  orgImgWidth: number;
  orgImgHeight: number;
  downloadImgFilename: string;
  isGif: boolean;
}

export interface WeverseAttachedVideos {
  playTime: number;
  thumbnailHeight: number;
  thumbnailUrl: string;
  thumbnailWidth: number;
  videoUrl: string;
}
