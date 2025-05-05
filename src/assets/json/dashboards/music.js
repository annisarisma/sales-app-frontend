import singer1 from '/assets/images/dashboards/music/singer/img-01.jpg'
import singer2 from '/assets/images/dashboards/music/singer/img-02.jpg'
import singer3 from '/assets/images/dashboards/music/singer/img-03.jpg'
import singer4 from '/assets/images/dashboards/music/singer/img-04.jpg'
import singer5 from '/assets/images/dashboards/music/singer/img-05.jpg'
import song1 from '/assets/images/dashboards/music/square/img-01.jpg'
import song2 from '/assets/images/dashboards/music/square/img-02.jpg'
import song3 from '/assets/images/dashboards/music/square/img-03.jpg'
import song4 from '/assets/images/dashboards/music/square/img-04.jpg'
import song5 from '/assets/images/dashboards/music/square/img-05.jpg'

const featuredSongs = [
  {
    id: 1,
    title: 'Love Me Like You Do',
    artist: 'Ellie Goulding',
    duration: '4:12 min',
    image: song1,
  },
  {
    id: 2,
    title: 'Cheri Cheri Lady',
    artist: 'Modern Talking',
    duration: '3:45 min',
    image: song2,
  },
  {
    id: 3,
    title: 'Summertime Sadness',
    artist: 'Lana Del Rey',
    duration: '4:25 min',
    image: song3,
  },
  {
    id: 4,
    title: 'Until I Found You',
    artist: 'Stephen Sanchez',
    duration: '2:58 min',
    image: song4,
  },
  {
    id: 5,
    title: 'Broken Angel (feat. Helena)',
    artist: 'Arash, Helena',
    duration: '3:11 min',
    image: song5,
  },
]
const popularSingers = [
  {
    id: 1,
    name: 'Ariana Grande',
    description:
      'A well-known pop singer with many hit albums, singles, and awards. She has a large fan base and connects with her followers on social media.',
    image: singer1,
  },
  {
    id: 2,
    name: 'Dua Lipa',
    description:
      "A British-Albanian singer who has sold over 107.7 million records and won three Grammys. Her music video for 'New Rules' has over 2.9 billion views on YouTube.",
    image: singer2,
  },
  {
    id: 3,
    name: 'Ed Sheeran',
    description:
      "An English singer-songwriter and record producer who has sold more than 150 million records worldwide. He's known for his folk-pop style and romantic ballads, and has won multiple awards including Grammys and Brit Awards.",
    image: singer3,
  },
  {
    id: 4,
    name: 'Lady Gaga',
    description:
      "An American singer, songwriter, and actress who's known for her versatile music and image reinventions. She's also one of the world's best-selling music artists.",
    image: singer4,
  },
  {
    id: 5,
    name: 'Olivia Rodrigo',
    description:
      'A 19-year-old pop star who was up for 13 awards at the 2022 BBMAs.',
    image: singer5,
  },
]
export { featuredSongs, popularSingers }
