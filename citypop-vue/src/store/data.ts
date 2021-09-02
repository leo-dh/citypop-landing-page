import { WriteUp, ImageCard, Section } from "@/types/model";
export const writeUp1: WriteUp = {
  title: "Origins",
  message:
    "It was originally termed as an offshoot of Japan's Western-influenced 'new music', but came to include a wide range of styles associated with the country's nascent economic boom, such as AOR, soft rock, R&B, funk, and boogie." +
    "\n \n" +
    "It was also associated with new emerging technologies, such as the Walkman, cars with built-in cassette decks and FM stereos, and various electronic musical instruments. "
};

export const writeUp2: WriteUp = {
  title: "21st Century",
  message:
    "Though the golden age of city pop has long passed, the genre is slowly finding its relevance in the 21st century through other offshoot genres like vaporwave and futurefunk. " +
    "\n \n" +
    "One prime example is Plastic Love by Mariya Takeuchi. The song, released in 1984, was favoured by Youtube’s recommendation algorithm, giving it the attention it never had when it was first released."
};

export const writeUp3: WriteUp = {
  title: "Sound Signature",
  message:
    "City pop does not have a definite sound signature, it can sound like anything from soft, album-oriented rock to sophisticated boogie disco." +
    "\n \n" +
    "Given that city pop is an opulent amalgamation multiple music genres, ‘City pop’ is less a strict genre term but rather a broad vibe classification, an aesthetic experience." +
    "\n \n" +
    "<b> Experience it for yourself to find out more! </b>"
};

export const videoId = "9Gj47G2e1Jc";

export const imageCard1: ImageCard = {
  imagePath: "imageCard/PacificBreezeAlbumArtByHiroshiNagai.jpg",
  imageCaptions: "‘Pacific Breeze’ Album Cover" + "\n" + " by Hiroshi Nagai"
};

export const imageCard2: ImageCard = {
  imagePath: "imageCard/PlasticLoveArtworkByUsagiHime.jpg",
  imageCaptions: "Plastic Love Thumbnail Artwork" + "\n" + " by Usagihime"
};
export const imageCard3: ImageCard = {
  imagePath: "imageCard/SonyMusicEditionCityPopAlbumArtbyEizinSuzuki.jpg",
  imageCaptions: "City Pop: Sony Music Edition Album Cover" + "\n" + " by Eizin Suzuki"
};

export const sections: Section[] = [
  { writeUp: writeUp1, imageCard: imageCard1 },
  { writeUp: writeUp2, imageCard: imageCard2 },
  { writeUp: writeUp3, imageCard: imageCard3 }
];
