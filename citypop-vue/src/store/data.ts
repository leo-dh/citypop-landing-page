import { WriteUp, ImageCard, Album, Section } from "@/types/model";
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

export const videoId = "_cOFCiiQIvI";

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

export const albums: Album[] = [
  {
    artist: "dosii",
    title: "dosii",
    cover: require("@/assets/albumcovers/170355-dosii.jpg"),
    tracks: [
      { title: "Yeowool", duration: "4:25", titleTrack: false },
      { title: "Moon", duration: "2:22", titleTrack: false },
      { title: "Even so", duration: "2:44", titleTrack: false },
      { title: "starstarstar", duration: "3:38", titleTrack: false },
      { title: "Goyeol", duration: "4:27", titleTrack: false },
      { title: "lovememore.", duration: "3:52", titleTrack: true },
      { title: "Orbit of yours", duration: "3:54", titleTrack: false },
      { title: "Half Clear", duration: "4:26", titleTrack: false },
      { title: "Jogeum", duration: "3:37", titleTrack: false },
      { title: "To you", duration: "3:03", titleTrack: false }
    ]
  },
  {
    cover: require("@/assets/albumcovers/90yonge st - Kona (Feat. Jennifer Choi).jpg")
  },
  {
    cover: require("@/assets/albumcovers/Anri-HeavensBeach.jpg")
  },
  {
    cover: require("@/assets/albumcovers/BigWaveAlbumCover.jpg")
  },
  {
    cover: require("@/assets/albumcovers/ForYouTatsuroYamashita.jpg")
  },
  {
    cover: require("@/assets/albumcovers/KikuchiMomokoAdventureAlbumCover.jpg")
  },
  {
    cover: require("@/assets/albumcovers/LabyrinthMondoGrosso.jpg")
  },
  {
    cover: require("@/assets/albumcovers/LoveTripTakakoMamiya.jpg")
  },
  {
    cover: require("@/assets/albumcovers/MariyaTakeuchiPlasticLoveVinylCover.jpg")
  },
  {
    cover: require("@/assets/albumcovers/Piper-SummerBreeze.jpg")
  },
  {
    cover: require("@/assets/albumcovers/Rideontime_tatsyamashita.jpg")
  },
  {
    cover: require("@/assets/albumcovers/The-Solutions-Mood-For-Love.jpg")
  },
  {
    cover: require("@/assets/albumcovers/Yubin_solo_debut_album_cover.jpg")
  },
  {
    cover: require("@/assets/albumcovers/Yukika_Cherries_Jubiles_album_cover.jpg")
  },
  {
    cover: require("@/assets/albumcovers/givemethelight-uju.jpg")
  },
  {
    cover: require("@/assets/albumcovers/muzie-new-wave-city.jpg")
  },
  {
    cover: require("@/assets/albumcovers/neon-yukika.jpg")
  },
  {
    cover: require("@/assets/albumcovers/nightinseoul-uju.jpg")
  }
];
