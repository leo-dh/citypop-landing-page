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
    ],
    comments: { spotifyLink: "https://open.spotify.com/album/3sa814wrHO77FkSycZwhNf" }
  },
  {
    artist: "90yonge St.",
    title: "Kona (feat. Jennifer Choi)",
    cover: require("@/assets/albumcovers/90yonge st - Kona (Feat. Jennifer Choi).jpg"),
    tracks: [{ title: "Kona (feat. Jennifer Choi)", duration: "3:35", titleTrack: true }],
    comments: { spotifyLink: "https://open.spotify.com/album/2O6Q3bYc8H7mi2NkED3LA7" }
  },
  {
    artist: "Anri",
    title: "Heaven Beach",
    cover: require("@/assets/albumcovers/Anri-HeavensBeach.jpg"),
    tracks: [
      { title: "二番目のaffair", duration: "4:40", titleTrack: false },
      { title: "Last Summer Whisper", duration: "4:59", titleTrack: false },
      { title: "Lonely Driving", duration: "3:21", titleTrack: false },
      { title: "Resolution", duration: "4:26", titleTrack: false },
      { title: "Fly By Day", duration: "4:33", titleTrack: false },
      { title: "Flash Back Memories", duration: "4:07", titleTrack: false },
      { title: "Honesty Man", duration: "4:08", titleTrack: false },
      { title: "Memorial Story", duration: "4:04", titleTrack: false },
      { title: "夏に背を向けて", duration: "4:22", titleTrack: false },
      { title: "Heaven Beach", duration: "6:01", titleTrack: true },
      { title: "風の中でloving you (2011)", duration: "4:16", titleTrack: false }
    ],
    comments: { spotifyLink: "https://open.spotify.com/album/74XLaVRIeHY51nuXcC5RuS" }
  },
  {
    artist: "Tatsuro Yamashita",
    title: "Big Wave",
    cover: require("@/assets/albumcovers/BigWaveAlbumCover.jpg"),
    tracks: [
      { title: "The Theme From Big Wave", duration: " 3:39", titleTrack: true },
      { title: "Jody", duration: " 3:51", titleTrack: false },
      { title: "Only With You", duration: " 3:43", titleTrack: false },
      { title: "Magic Ways", duration: " 4:48", titleTrack: false },
      { title: "Your Eyes", duration: " 3:14", titleTrack: false },
      { title: "I Love You...(Part 2)", duration: " 2:07", titleTrack: false },
      { title: "Girls On The Beach", duration: " 2:45", titleTrack: false },
      { title: "Please Let Me Wonder", duration: " 3:09", titleTrack: false },
      { title: "Darlin'", duration: " 3:29", titleTrack: false },
      { title: "Guess I'm Dumb", duration: " 3:14", titleTrack: false },
      { title: "This Could Be The Night", duration: " 4:03", titleTrack: false },
      { title: "I Love You...( Part 1 )", duration: " 2:04", titleTrack: false }
    ]
  },
  {
    artist: "Tatsuro Yamashita",
    title: "For You",
    cover: require("@/assets/albumcovers/ForYouTatsuroYamashita.jpg"),
    tracks: [
      { title: "Sparkle", duration: "4:13", titleTrack: false },
      { title: "Music Book", duration: "5:08", titleTrack: false },
      { title: "Interlude A Part I", duration: "0:23", titleTrack: false },
      { title: "Morning Glory", duration: "3:28", titleTrack: false },
      { title: "Interlude A Part II", duration: "0:25", titleTrack: false },
      { title: "Futari", duration: "5:46", titleTrack: false },
      { title: "Loveland, Island", duration: "4:29", titleTrack: false },
      { title: "Interlude B Part I", duration: "0:16", titleTrack: false },
      { title: "Love Talkin' (Honey It's You)", duration: "5:50", titleTrack: false },
      { title: "Hey Reporter!", duration: "5:33", titleTrack: false },
      { title: "Interlude B Part II", duration: "0:17", titleTrack: false },
      { title: "Your Eyes", duration: "3:14", titleTrack: false }
    ]
  },
  {
    artist: "Kikuchi Momoko",
    title: "Adventure",
    cover: require("@/assets/albumcovers/KikuchiMomokoAdventureAlbumCover.jpg"),
    tracks: [
      { title: "Overture", duration: "2:23", titleTrack: false },
      { title: "Adventure", duration: "4:40", titleTrack: false },
      { title: "もう逢えないかもしれない", duration: "4:15", titleTrack: false },
      { title: "波になりたい", duration: "4:04", titleTrack: false },
      { title: "Night Cruising", duration: "4:58", titleTrack: false },
      { title: "雨の Realize", duration: "4:14", titleTrack: false },
      { title: "赤い稲妻", duration: "4:03", titleTrack: false },
      { title: "Good Friend", duration: "4:12", titleTrack: false },
      { title: "Mystical Composer", duration: "5:08", titleTrack: false },
      { title: "Tomorrow", duration: "4:22", titleTrack: false }
    ]
  },
  {
    artist: "MONDO GROSSO",
    title: "Labyrinth",
    cover: require("@/assets/albumcovers/LabyrinthMondoGrosso.jpg"),
    tracks: [{ title: "ラビリンス", duration: "4:54", titleTrack: true }],
    comments: { spotifyLink: "https://open.spotify.com/album/1pHD8AFu4z1CvuTPjZFOFi" }
  },
  {
    artist: "Takako Mamiya",
    title: "Love Trip",
    cover: require("@/assets/albumcovers/LoveTripTakakoMamiya.jpg"),
    tracks: [
      { title: "Love Trip", duration: "3:49", titleTrack: true },
      { title: "All Or Nothing", duration: "4:08", titleTrack: false },
      { title: "One More Night", duration: "3:52", titleTrack: false },
      { title: "What A Broken Heart Can Do", duration: "4:01", titleTrack: false }
    ]
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
