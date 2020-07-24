export interface WriteUp {
  title: string;
  message: string;
}
export interface ImageCard {
  imagePath: string;
  imageCaptions?: string;
}
export interface Album {
  title?: string;
  artist?: string;
  songs?: Song[];
  cover: any;
  imagePath: string;
}
export interface Song {
  title: string;
  duration: string;
  titleTrack: boolean;
}
export interface Section {
  writeUp: WriteUp;
  imageCard: ImageCard;
}
