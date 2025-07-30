export interface Ipost {
  _id?: string;
  title: string;
  body: string;
  userid: number;
  date: Date | string;
  imgurl: string;
  like: boolean;
  likes: number; 
  comments: string[];
}
