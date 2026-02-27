// Kendrick Lamar song data organized by album/era for each cube face
// Stock photo URLs as placeholders - replace with your own film photography later

const stockPhotos = {
  urban: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
  concert: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
  microphone: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop',
  studio: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop',
  vinyl: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=300&h=300&fit=crop',
  streetArt: 'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=300&h=300&fit=crop',
  graffiti: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?w=300&h=300&fit=crop',
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
  turntable: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
  city: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=300&h=300&fit=crop',
  skyline: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=300&h=300&fit=crop',
  crowd: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop',
  neon: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300&h=300&fit=crop',
  speaker: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop',
  keyboard: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop',
  piano: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=300&h=300&fit=crop',
  guitar: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop',
  drums: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=300&h=300&fit=crop',
  stage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&h=300&fit=crop',
  night: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop',
  street: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=300&fit=crop',
  sunset: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=300&h=300&fit=crop',
  smoke: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=300&h=300&fit=crop',
  abstract: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=300&fit=crop',
  rain: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?w=300&h=300&fit=crop',
  butterfly: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=300&h=300&fit=crop',
  gold: 'https://images.unsplash.com/photo-1492892132812-a00a8b245c45?w=300&h=300&fit=crop',
  ocean: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop',
  fire: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop',
  crown: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=300&fit=crop',
};

const photoKeys = Object.keys(stockPhotos);

function getPhoto(index) {
  return stockPhotos[photoKeys[index % photoKeys.length]];
}

export const allSongs = [
  { id: 1, title: 'Swimming Pools(Drank)', album: 'Good Kid, M.A.A.D. City', inlyric: 'Okay, now open your mind up and listen me, Kendrick I am your conscience, if you do not hear me, then you will be', mlyric: 'history, Kendrick', youtube: 'https://youtu.be/8-ejyHzz3XE', genius: 'http://genius.com/Kendrick-lamar-swimming-pools-drank-lyrics', photo: getPhoto(0) },
  { id: 2, title: 'King Kunta', album: 'To Pimp a Butterfly', inlyric: 'Now I run the game got the whole world talkin, King Kunta Everybody wanna cut the legs off him,', mlyric: 'Kunta Black man taking no losses, oh yeah', youtube: 'https://youtu.be/hRK7PVJFbS8', genius: 'http://genius.com/Kendrick-lamar-king-kunta-lyrics', photo: getPhoto(1) },
  { id: 3, title: 'm.A.A.D City', album: 'Good kid, M.A.A.D City', inlyric: "Bodies on top of bodies, IV's on top of IV's", mlyric: 'Obviously the coroner between the sheets like the Isleys', youtube: 'https://youtu.be/O4ymPrV-02M', genius: 'http://genius.com/Kendrick-lamar-maad-city-lyrics', photo: getPhoto(2) },
  { id: 4, title: 'Rigamortis', album: 'Section 80', inlyric: "And this is rigamortus and it's gorgeous when you die Ali recorded, and I'm Morpheus, the matrix of my mind I'm out the orbit, you an orphan and a hairdresser combined", mlyric: "I'm on the toilet when I rhyme, if you the shit then I decline", youtube: 'https://youtu.be/sBvngg87998', genius: 'http://genius.com/Kendrick-lamar-rigamortis-lyrics', photo: getPhoto(3) },
  { id: 5, title: 'Wesleys Theory', album: 'To Pimp A Butterfly', inlyric: "I can see the borrow in you, I can see the dollar in you Little white lies, but it's no white-collar in you", mlyric: "But it's whatever though because I'm still followin' you", youtube: 'https://youtu.be/s0QtdISwioc', genius: 'http://genius.com/Kendrick-lamar-wesleys-theory-lyrics', photo: getPhoto(4) },
  { id: 6, title: 'Backseat Freestyle', album: 'Good Kid M.A.A.D. City', inlyric: 'Respect my mind', mlyric: 'or die from lead showers', youtube: 'https://www.youtube.com/watch?v=EZW7et3tPuQ', genius: 'http://genius.com/Kendrick-lamar-backseat-freestyle-lyrics', photo: getPhoto(5) },
  { id: 7, title: 'Money Trees', album: 'Good Kid M.A.A.D. City', inlyric: "It go Halle Berry or hallelujah Pick your poison, tell me what you doing Everybody gon' respect the shooter", mlyric: 'But the one in front of the gun lives forever', youtube: 'https://youtu.be/NtxmnBQmfZs', genius: 'http://genius.com/Kendrick-lamar-money-trees-lyrics', photo: getPhoto(6) },
  { id: 8, title: 'Alright', album: 'To Pimp A Butterfly', inlyric: "Wouldn't you know We been hurt, been down before Nigga, when our pride was low Lookin' at the world like, 'Where do we go?'", mlyric: "But we gon' be alright", youtube: 'https://www.youtube.com/watch?v=Z-48u_uWMHY', genius: 'http://genius.com/Kendrick-lamar-alright-lyrics', photo: getPhoto(7) },
  { id: 9, title: 'Untitled 2', album: 'Untitled', inlyric: "Seen black turn 'em Burgundy Hundred of them, I know I'm greedy Stuck inside the belly of the beast", mlyric: 'Can you please pray for me', youtube: 'https://youtu.be/qt3bNjORLe8', genius: 'http://genius.com/Kendrick-lamar-untitled-02-06232014-lyrics', photo: getPhoto(8) },
  { id: 10, title: 'Poetic Justice', album: 'Good Kid M.A.A.D City', inlyric: "I mean I write poems in these songs dedicated to you when You're in the mood for empathy,", mlyric: "there's blood in my pen", youtube: 'https://youtu.be/yyr2gEouEMM', genius: 'http://genius.com/Kendrick-lamar-poetic-justice-lyrics', photo: getPhoto(9) },
  { id: 11, title: 'i', album: 'To Pimp A Butterfly', inlyric: "I went to war last night I've been dealing with depression ever since an adolescent", mlyric: "Duckin' every other blessin', I can never see the message", youtube: 'https://youtu.be/8aShfolR6w8', genius: 'http://genius.com/Kendrick-lamar-i-lyrics', photo: getPhoto(10) },
  { id: 12, title: "Hol' Up", album: 'Section 80', inlyric: 'I wrote this record while thirty thousand feet in the air', mlyric: 'Stewardess complimenting me on my nappy hair', youtube: 'https://youtu.be/GDxkMYVDB5w', genius: 'http://genius.com/Kendrick-lamar-hol-up-lyrics', photo: getPhoto(11) },
  { id: 13, title: "Bitch, Don't Kill Vibe", album: 'Good Kid M.A.A.D City', inlyric: "I got my drink, I got my music I would share it but today I'm yelling Bitch don't kill my vibe", mlyric: "bitch don't kill my vibe", youtube: 'https://youtu.be/GF8aaTu2kg0', genius: 'http://genius.com/Kendrick-lamar-bitch-dont-kill-my-vibe-lyrics', photo: getPhoto(12) },
  { id: 14, title: 'Cartoon and Cereal', album: 'Single Release', inlyric: "You told me 'Don't be like me, just finish watching cartoons'", mlyric: "Which is funny now cause all I see is Wile E. Coyotes in the room", youtube: 'https://youtu.be/uNTpPNo3LBg', genius: 'http://genius.com/Kendrick-lamar-cartoon-and-cereal-lyrics', photo: getPhoto(13) },
  { id: 15, title: 'Westside, Right On Time', album: 'Single Release', inlyric: 'Came a long way from the ghetto, dog, but Westside, right on time, only thing fosho', mlyric: 'Eastside, right on time, gunning through your door', youtube: 'https://youtu.be/wKgGXxoT5Ds', genius: 'http://genius.com/1129370', photo: getPhoto(14) },
  { id: 16, title: 'Nosetalgia', album: 'My Name is My Name', inlyric: "He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect'", mlyric: "'Go figure, mothafucka, every verse is a brick, our son dope, nigga'", youtube: 'https://youtu.be/u-2ckLBV21g', genius: 'http://genius.com/Pusha-t-nosetalgia-lyrics', photo: getPhoto(15) },
  { id: 17, title: 'Collard Greens', album: 'Oxymoron', inlyric: 'Hang in my penthouse roof, skyline the clearest Watch it, your optics, popping out, you look the weirdest', mlyric: 'Pop my top on the 105, head with no power steering, ah!', youtube: 'https://youtu.be/_L2vJEb6lVE', genius: 'http://genius.com/Schoolboy-q-collard-greens-lyrics', photo: getPhoto(16) },
  { id: 18, title: 'Chapter 6', album: 'Section 80', inlyric: 'The dysfunctional bastards of the Ronald Reagan Era. Young men that learned to do everything spiteful.', mlyric: 'This is your generation. Live fast and die young.', youtube: 'https://youtu.be/okF5gOTX9uM', genius: 'http://genius.com/Kendrick-lamar-chapter-six-lyrics', photo: getPhoto(17) },
  { id: 19, title: 'Black Friday', album: 'Single Release', inlyric: 'Nothing more influential than rap music I merge jazz fusion with the trap music I mix black soul with some rock and roll', mlyric: "They never box me in, I'm David Blaine-ing all you hoes", youtube: 'https://soundcloud.com/topdawgent/kendrick-lamar-black-friday', genius: 'http://genius.com/Kendrick-lamar-black-friday-lyrics', photo: getPhoto(18) },
  { id: 20, title: 'No Parties in L.A.', album: 'The Life of Pablo', inlyric: 'Lord have mercy, thou will not hurt me Five buddies all herded up on a Thursday Bottle service, head service,', mlyric: 'I came in first place', youtube: 'https://soundcloud.com/kanyewest/nomorepartiesinla', genius: 'http://genius.com/Kanye-west-no-more-parties-in-la-lyrics', photo: getPhoto(19) },
  { id: 21, title: 'These Walls', album: 'To Pimp A Butterfly', inlyric: 'These walls are vulnerable, exclamation Interior pink,', mlyric: 'color coordinated I interrogated, every nook and cranny', youtube: 'https://youtu.be/drV0QatqbRU', genius: 'http://genius.com/Kendrick-lamar-these-walls-lyrics', photo: getPhoto(20) },
  { id: 22, title: 'Compton', album: 'good Kid m.a.a.d City', inlyric: 'Now we can all celebrate We can all harvest the rap artists of NWA America target our rap market, as controversy and hate', mlyric: 'Harsh realities we in made our music translate', youtube: 'https://youtu.be/48ZThugpVik', genius: 'http://genius.com/Kendrick-lamar-compton-lyrics', photo: getPhoto(21) },
  { id: 23, title: 'Institutionalized', album: 'To Pimp a Butterfly', inlyric: "I'm trapped inside the ghetto and I ain't proud to admit it", mlyric: "Institutionalized, I keep runnin' back for a visit", youtube: 'https://youtu.be/GQjprMppQ_8', genius: 'http://genius.com/Kendrick-lamar-institutionalized-lyrics', photo: getPhoto(22) },
  { id: 24, title: '1 Train', album: 'Long.Live.ASAP', inlyric: 'I carry traits of a traumatized soldier', mlyric: "Don't look in my face, I might snap, I might choke ya", youtube: 'https://youtu.be/nU4OIAYwo5g', genius: 'http://genius.com/A-ap-rocky-1-train-lyrics', photo: getPhoto(23) },
  { id: 25, title: 'The Recipe', album: 'good kid, m.A.A.d city', inlyric: 'Women, weed and weather They come for women, weed and weather', mlyric: 'For the women, weed and weather', youtube: 'https://youtu.be/YpugK0RpEaU', genius: 'http://genius.com/Kendrick-lamar-the-recipe-lyrics', photo: getPhoto(24) },
  { id: 26, title: 'Cut You Off', album: 'Overly Dedicated', inlyric: "I'm tryna find myself, I'm searching deep for Kendrick Lamar I read about Napoleon Hill and try to know God", mlyric: "I'll just wait at the dock", youtube: 'https://youtu.be/ZJzr2Dsputk', genius: 'http://genius.com/Kendrick-lamar-cut-you-off-to-grow-closer-lyrics', photo: getPhoto(25) },
  { id: 27, title: 'The Heart Pt.2', album: 'Overly Dedicated', inlyric: 'Never will I surrender', mlyric: "I been a warrior when I came out my mom's placenta", youtube: 'https://youtu.be/2n5r6N7grNA', genius: 'http://genius.com/Kendrick-lamar-the-heart-pt-2-lyrics', photo: getPhoto(26) },
  { id: 28, title: 'Sing About Me', album: 'good kid, m.a.a.d city', inlyric: "And I love you cause you love my brother like you did Just promise me you'll tell this story when you make it big", mlyric: 'And if I die before your album drop, I hope (gunshots)', youtube: 'https://youtu.be/xtIr8k4eC7o', genius: 'http://genius.com/Kendrick-lamar-sing-about-me-im-dying-of-thirst-lyrics', photo: getPhoto(27) },
  { id: 29, title: 'Heart Pt.1', album: 'Unreleased', inlyric: "I believe there's one God, there's one love And I believe if I fly, we all doves I make a way for my people to see the light", mlyric: 'Brighter than yellow bones', youtube: 'https://youtu.be/FjSfelCds6g', genius: 'http://genius.com/Kendrick-lamar-the-heart-pt-1-lyrics', photo: getPhoto(28) },
  { id: 30, title: 'A.D.H.D.', album: 'Section 80', inlyric: 'Eight doobies to the face, fuck that Twelve bottles in the case, nigga, fuck that Two pills and a half-weight, nigga, fuck that', mlyric: "Got a high tolerance when your age don't exist", youtube: 'https://youtu.be/QjlFqgRbICY', genius: 'http://genius.com/Kendrick-lamar-adhd-lyrics', photo: getPhoto(29) },
  { id: 31, title: 'Art of Peer Pressure', album: 'good kid, m.A.A.d city', inlyric: "I'm usually a true firm believer of bad karma", mlyric: 'Consequences from evil will make your past haunt you', youtube: 'https://youtu.be/VpRpzvV7K2s', genius: 'http://genius.com/Kendrick-lamar-the-art-of-peer-pressure-lyrics', photo: getPhoto(0) },
  { id: 32, title: 'Forbidden Fruit', album: 'Born Sinner', inlyric: 'Down to the garden, took a little dip (oh no)', mlyric: 'Apple juice falling from her lips took a little sip, little sip', youtube: 'https://youtu.be/9-kWlUbkHS4', genius: 'http://genius.com/J-cole-forbidden-fruit-lyrics', photo: getPhoto(1) },
  { id: 33, title: 'Blacker the Berry', album: 'To Pimp A Butterfly', inlyric: "I'm African-American, I'm African", mlyric: "I'm black as the moon, heritage of a small village", youtube: 'https://youtu.be/rMxNYQ71LOk', genius: 'http://genius.com/Kendrick-lamar-the-blacker-the-berry-lyrics', photo: getPhoto(2) },
  { id: 34, title: 'HiiiPower', album: 'Section80', inlyric: 'Visions of Martin Luther staring at me', mlyric: 'If I see it how he seen it, that would make my parents happy', youtube: 'https://youtu.be/RT2ZCdPVLAs', genius: 'http://genius.com/170437', photo: getPhoto(3) },
  { id: 35, title: 'How Much Does a Dollar Cost', album: 'To Pimp a Butterfly', inlyric: 'Have you ever opened up Exodus 14?', mlyric: 'A humble man is all that we ever need', youtube: 'https://youtu.be/fJT3b4urwcU', genius: 'http://genius.com/Kendrick-lamar-how-much-a-dollar-cost-lyrics', photo: getPhoto(4) },
  { id: 36, title: 'Complexion(Zulu Love)', album: 'To Pimp a Butterfly', inlyric: "By different shades of faces Then Whit told me, 'A woman is woman, love the creation'", mlyric: 'It all came from God then you was my confirmation', youtube: 'https://youtu.be/AH6qPuPSZHU', genius: 'http://genius.com/Kendrick-lamar-complexion-a-zulu-love-lyrics', photo: getPhoto(5) },
  { id: 37, title: 'Untitled 03', album: 'Untitled', inlyric: 'See you thinking too much, plus you too full of yourself', mlyric: 'Worried about your career, you ever think of your health?', youtube: 'https://www.youtube.com/watch?v=W06HM7JMN4k', genius: 'http://genius.com/Kendrick-lamar-untitled-03-05282013-lyrics', photo: getPhoto(6) },
  { id: 38, title: 'Freedom', album: 'Lemonade', inlyric: 'Yeah, open our mind as we cast away oppression', mlyric: 'Yeah, open the streets and watch our beliefs', youtube: '', genius: 'http://genius.com/Beyonce-freedom-lyrics', photo: getPhoto(7) },
  { id: 39, title: "You Ain't Gotta Lie", album: 'To Pimp A Butterfly', inlyric: "You ain't gotta lie to kick it, my nigga", mlyric: "You ain't gotta try so hard", youtube: '', genius: 'http://genius.com/Beyonce-freedom-lyrics', photo: getPhoto(8) },
  { id: 40, title: 'Untitled 7', album: 'To Pimp A Butterfly', inlyric: "Life won't get you high like this here, no", mlyric: "He won't get you high like this here, no", youtube: 'https://youtu.be/uES9400qG_A', genius: 'http://genius.com/8787410', photo: getPhoto(9) },
  { id: 41, title: 'Fuck Your Ethnicity', album: 'Section 80', inlyric: "Fire burning inside my eyes, this the music that saved my life Y'all be calling it hip-hop, I be calling it hypnotize Yeah, hypnotize,", mlyric: 'trapped my body but freed my mind', youtube: 'https://youtu.be/xWvWDu6IAyY', genius: 'http://genius.com/Kendrick-lamar-fuck-your-ethnicity-lyrics', photo: getPhoto(10) },
  { id: 42, title: 'Control', album: 'Unreleased', inlyric: "I'm Makaveli's offspring, I'm the King of New York King of the Coast,", mlyric: 'one hand, I juggle them both', youtube: 'https://youtu.be/W7zdMeZPkpY', genius: 'http://genius.com/Big-sean-control-lyrics', photo: getPhoto(11) },
  { id: 43, title: 'Momma', album: 'To Pimp a Butterfly', inlyric: "I know loyalty, I know respect, I know those that's ornery", mlyric: 'I know everything, the highs, the lows, the groupies, the junkies', youtube: 'https://youtu.be/ZO-ZsW0orlk', genius: 'http://genius.com/Kendrick-lamar-momma-lyrics', photo: getPhoto(12) },
  { id: 44, title: 'Ab-Soul Outro', album: 'Section 80', inlyric: "See I've spent twenty three years on the earth searching for answers", mlyric: "'til one day I realized I had to come up with my own", youtube: 'https://www.youtube.com/watch?v=gtUsEbbVBuo', genius: 'http://genius.com/Kendrick-lamar-ab-souls-outro-lyrics', photo: getPhoto(13) },
  { id: 45, title: 'good kid', album: 'good kid, m.A.A.d city', inlyric: "I got animosity buildin', it's probably big as a buildin'", mlyric: "Me jumpin' off of the roof is me just playin' it safe", youtube: 'https://youtu.be/jcUFbU9bxdk', genius: 'http://genius.com/Kendrick-lamar-good-kid-lyrics', photo: getPhoto(14) },
  { id: 46, title: 'U.O.E.N.O.', album: 'Single Released', inlyric: "Stuck in a rock and a hard place Eminem, Pac and where God stay Timberlands pop that jaw bone", mlyric: 'Now bitch nigga, tell me how that tar taste', youtube: 'https://soundcloud.com/topdawgent/black-hippy-u-o-e-n-o-remix', genius: 'http://genius.com/Black-hippy-uoeno-lyrics', photo: getPhoto(15) },
  { id: 47, title: 'Hood Politics', album: 'To Pimp a Butterfly', inlyric: "Oh, yeah? Everythin' is everythin', it's scandalous", mlyric: "Slow motion for the ambulance, the project filled with cameras", youtube: 'https://youtu.be/xaB2g_eF6T8', genius: 'http://genius.com/Kendrick-lamar-hood-politics-lyrics', photo: getPhoto(16) },
  { id: 48, title: "Keisha's Song", album: 'Section80', inlyric: "She play Mr. Shakur, that's her favorite rapper", mlyric: "Bumping 'Brenda's Got a Baby' while a pervert yelling at her", youtube: 'https://youtu.be/XX4la7LwwVk', genius: 'http://genius.com/Kendrick-lamar-keishas-song-her-pain-lyrics', photo: getPhoto(17) },
  { id: 49, title: 'The Heart Pt. 3', album: 'Single Release', inlyric: 'My nigga got hit 25 times with a K', mlyric: 'Make the decision, ride the beat or ride in a hearse', youtube: 'https://youtu.be/duavU5KzO3U', genius: 'http://genius.com/1150067', photo: getPhoto(18) },
  { id: 50, title: 'The Jig is Up', album: 'Single Release', inlyric: "Y'all too infatuated with the fucking numbers", mlyric: 'Which make it easy for me to divide and conquer', youtube: 'https://youtu.be/7VbvTclAaqA', genius: 'http://genius.com/Kendrick-lamar-the-jig-is-up-dumpn-lyrics', photo: getPhoto(19) },
];

// Album themes for each cube face with colors
export const cubeFaces = [
  { name: 'Good Kid, M.A.A.D City', color: '#1a1a2e', accent: '#e94560', icon: '🏙️' },
  { name: 'To Pimp A Butterfly', color: '#16213e', accent: '#f0a500', icon: '🦋' },
  { name: 'Section 80', color: '#0f3460', accent: '#53d8fb', icon: '📻' },
  { name: 'DAMN.', color: '#533483', accent: '#e94560', icon: '🔥' },
  { name: 'Untitled Unmastered', color: '#2b2b2b', accent: '#ffd700', icon: '🎤' },
  { name: 'Features & Singles', color: '#1b1b2f', accent: '#1faa59', icon: '💿' },
];

// Fisher-Yates shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate a bingo board (5x5 = 25 songs, center is free)
export function generateBoard(faceIndex) {
  const shuffled = shuffle(allSongs);
  const board = shuffled.slice(0, 25).map((song, i) => ({
    ...song,
    matched: i === 12, // center cell is free
    isFree: i === 12,
  }));
  return board;
}

// Generate a random question from the pool
export function getRandomQuestion(songs) {
  const available = songs.filter(s => !s.isFree);
  return available[Math.floor(Math.random() * available.length)];
}

export { shuffle };
