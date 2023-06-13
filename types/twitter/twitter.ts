interface TwitterItme {
  id: string;
  isRt: boolean;
  name: string;
  screen_name: string;
  full_text: string;
  created_at: string;
  hashtags: string[];
  user_mentions: string[];
  urls: {
    display_url: string;
    expanded_url: string;
    url: string;
  }[];
  media: (
    | {
        type: "video";
        url: string;
        src: string;
        poster: string;
      }
    | {
        src: string;
        origin: string;
        width: number;
        height: number;
        type: "photo";
        url: string;
      }
  )[];
  meta: {
    card: string;
    site: string;
    src: string;
    origin: string;
    title: string;
    description: string;
  }[];
}

export interface Twitter extends TwitterItme {
  quoted?: TwitterItme;
}
