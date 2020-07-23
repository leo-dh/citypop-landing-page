export interface WriteUp {
  title: string;
  message: string;
}
export interface ImageCard {
  imagePath: string;
  imageCaptions?: string;
}
export interface Album {
  imagePath: string;
}
export interface Section {
  id: string;
  writeUp: WriteUp;
  imageCard: ImageCard;
}
