

 var app = angular.module('lingoApp', []);


 app.controller('lingoController', function($scope, $timeout, $window){


	// json array of song objects
    $scope.songs= [


	[

	//1.Swimming pool
	{
		id:1 ,
		title: 'Swimming Pools(Drank)',
		album: 'Good Kid, M.A.A.D. City',
		img:'drank.jpg',
		gif: 'drank.gif',
		clyric: 'Okay, now open your mind up and listen me, Kendrick I am your conscience, if you do not hear me, then you will be history, Kendrick ',
		inlyric:'Okay, now open your mind up and listen me, Kendrick I am your conscience, if you do not hear me, then you will be',
		mlyric:'history, Kendrick',
		youtube: 'https://youtu.be/8-ejyHzz3XE',
		genius: 'http://genius.com/Kendrick-lamar-swimming-pools-drank-lyrics'
	},
	//2.King Kunta
	{   id:2,
		title: 'King Kunta',
		album: 'To Pimp a Butterfly',
		img:'tpab.jpg',
		gif: 'kk.gif',
		clyric: 'Now I run the game got the whole world talkin, King Kunta Everybody wanna cut the legs off him, ',
		inlyric:'Now I run the game got the whole world talkin, King Kunta Everybody wanna cut the legs off him, ',
		mlyric:'Kunta Black man taking no losses, oh yeah',
		youtube: 'https://youtu.be/hRK7PVJFbS8',
		genius: 'http://genius.com/Kendrick-lamar-king-kunta-lyrics'
	},
	//3. mad city
	{   id:3,
		title: 'm.A.A.D City',
		album: 'Good kid, M.A.A.D City',
		img:'kendrick.jpg',
		gif: 'default.gif',
		clyric: "Bodies on top of bodies, IV's on top of IV's Obviously the coroner between the sheets like the Isleys",
		inlyric:"Bodies on top of bodies, IV's on top of IV's  ",
		mlyric:'Obviously the coroner between the sheets like the Isleys',
		youtube: 'https://youtu.be/O4ymPrV-02M?list=PLIen3IPVo_U1MwbZen4ne2I8CDcKy9lCk',
		genius: 'http://genius.com/Kendrick-lamar-maad-city-lyrics'
	},
	//4. Rigamortis
	{
	    id:4,
		title: 'Rigamortis',
		album: 'Section 80',
		img:'section80.jpg',
		gif: 'rigamortis.gif',
		clyric: "And this is rigamortus and it's gorgeous when you die Ali recorded, and I'm Morpheus, the matrix of my mind I'm out the orbit, you an orphan and a hairdresser combined I'm on the toilet when I rhyme, if you the shit then I decline",
		inlyric:"And this is rigamortus and it's gorgeous when you die Ali recorded, and I'm Morpheus, the matrix of my mind I'm out the orbit, you an orphan and a hairdresser combined ",
		mlyric:"I'm on the toilet when I rhyme, if you the shit then I decline",
		youtube: 'https://youtu.be/sBvngg87998',
		genius: 'http://genius.com/Kendrick-lamar-rigamortis-lyrics'
	},
	//5. Wesly Theory
	{   id:5,
		title: 'Wesly Theory',
		album: 'To Pimp A Butterfly',
		img:'tpab.jpg',
		gif: 'default.gif',
		clyric: "I can see the borrow in you, I can see the dollar in you Little white lies, but it's no white-collar in you But it's whatever though because I'm still followin' you",
		inlyric:"I can see the borrow in you, I can see the dollar in you Little white lies, but it's no white-collar in you   ",
		mlyric:"But it's whatever though because I'm still followin' you",
		youtube: 'https://youtu.be/s0QtdISwioc',
		genius: 'http://genius.com/Kendrick-lamar-wesleys-theory-lyrics'

	}],
	[
	//6. Backseat Freestyle
		{
		id:6,
		title: 'Backseat Freestyle',
		album: 'Good Kid M.A.A.D. City',
		img:'backseat.jpg',
		gif: 'backseat.gif',
		clyric: "Respect my mind or die from lead showers",
		inlyric:" Respect my mind ",
		mlyric:" or die from lead showers",
		youtube: 'https://www.youtube.com/watch?v=EZW7et3tPuQ',
		genius: 'http://genius.com/Kendrick-lamar-backseat-freestyle-lyrics'

		},

   //7. Money Tree
   {
	    id:7,
	    title: 'Money Trees',
		album: 'Good Kid M.A.A.D. City',
		img:'kendrick.jpg',
		gif: 'default.gif',
		clyric: "It go Halle Berry or hallelujah Pick your poison, tell me what you doing Everybody gon' respect the shooter But the one in front of the gun lives forever",
		inlyric:" It go Halle Berry or hallelujah Pick your poison, tell me what you doing Everybody gon' respect the shooter ",
		mlyric:" But the one in front of the gun lives forever",
		youtube: 'https://youtu.be/NtxmnBQmfZs',
		genius: 'http://genius.com/Kendrick-lamar-money-trees-lyrics'


   },
   //8. Alright
   {
        id:8,
	    title: 'Alright',
		album: 'To Pimp A Butterfly',
		img:'alright.png',
		gif: 'alright.gif',
		clyric: "Wouldn't you know We been hurt, been down before Nigga, when our pride was low Lookin' at the world like, 'Where do we go?' Nigga, and we hate po-po Wanna kill us dead in the street fo sho Nigga, I'm at the preacher's door My knees gettin' weak, and my gun might blow But we gon' be alright",
		inlyric:"Wouldn't you know We been hurt, been down before Nigga, when our pride was low Lookin' at the world like, 'Where do we go?' Nigga, and we hate po-po Wanna kill us dead in the street fo sho I'm at the preacher's door My knees gettin' weak, and my gun might blow ",
		mlyric:"But we gon' be alright",
		youtube: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
		genius: 'http://genius.com/Kendrick-lamar-alright-lyrics'

   },
//9. Untitled 2
{
    id:9,
	title:'Untitled 2',
	album: 'Untitled',
	img:'untl2.jpg',
	gif: 'untl2.gif',
	clyric: "Seen black turn 'em Burgundy Hundred of them, I know I'm greedy Stuck inside the belly of the beast Can you please pray for me?",
	inlyric:"Seen black turn 'em Burgundy Hundred of them, I know I'm greedy Stuck inside the belly of the beast ",
	mlyric:" Can you please pray for me ",
	youtube: 'https://youtu.be/qt3bNjORLe8',
	genius: 'http://genius.com/Kendrick-lamar-untitled-02-06232014-lyrics'
},

//10. Poetic Justice
{
	id:10,
	title:'Poetic Justice',
	album: 'Good Kid M.A.A.D City',
	img:'poetic.jpg',
	gif: 'poetic.gif',
	clyric: "I mean I write poems in these songs dedicated to you when You're in the mood for empathy, there's blood in my pen  ",
	inlyric:"I mean I write poems in these songs dedicated to you when You're in the mood for empathy, ",
	mlyric:" there's blood in my pen ",
	youtube: 'https://youtu.be/yyr2gEouEMM',
	genius: 'http://genius.com/Kendrick-lamar-poetic-justice-lyrics'
}],
[
//11. i
{
	id:11,
	title:'i',
	album: 'To Pimp A Butterfly',
	img:'i.jpg',
	gif: 'i.gif',
	clyric: "I went to war last night (Night, night, night, night, night) I've been dealing with depression ever since an adolescent Duckin' every other blessin', I can never see the message",
	inlyric:"I went to war last night (Night, night, night, night, night) I've been dealing with depression ever since an adolescent ",
	mlyric:" Duckin' every other blessin', I can never see the message",
	youtube: 'https://youtu.be/8aShfolR6w8',
	genius: 'http://genius.com/Kendrick-lamar-i-lyrics'
},
//12. Hol up
{
	id:12,
	title:"Hol' Up",
	album: 'Section 80',
	img:'section80.jpg',
	gif: 'default.gif',
	clyric: "I wrote this record while thirty thousand feet in the air Stewardess complimenting me on my nappy hair",
	inlyric:"I wrote this record while thirty thousand feet in the air ",
	mlyric:" Stewardess complimenting me on my nappy hair ",
	youtube: 'https://youtu.be/GDxkMYVDB5w',
	genius: " http://genius.com/Kendrick-lamar-hol-up-lyrics"

},
//13. Bitch, Don't Kill My Vibe
{    id:13,
    title:"Bitch, Don't Kill Vibe",
	album: 'Good Kid M.A.A.D City',
	img:'bitch.jpg',
	gif: 'bitch.gif',
	clyric: "I got my drink, I got my music I would share it but today I'm yelling Bitch don't kill my vibe, bitch don't kill my vibe Bitch don't kill my vibe, bitch don't kill my vibe",
	inlyric:"I got my drink, I got my music I would share it but today I'm yelling Bitch don't kill my vibe, bitch don't kill my vibe Bitch don't kill my vibe,",
	mlyric:"  bitch don't kill my vibe",
	youtube: 'https://youtu.be/GF8aaTu2kg0',
	genius: " http://genius.com/Kendrick-lamar-bitch-dont-kill-my-vibe-lyrics"
},
//14. Cartoon and Cereal
{
	id:14,
	title:"Cartoon and Cereal",
	album: 'Single Release',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "You told me 'Don't be like me, just finish watching cartoons' Which is funny now cause all I see is Wile E. Coyotes in the room",
	inlyric:"You told me 'Don't be like me, just finish watching cartoons'",
	mlyric:" Which is funny now cause all I see is Wile E. Coyotes in the room",
	youtube: 'https://youtu.be/uNTpPNo3LBg',
	genius: " http://genius.com/Kendrick-lamar-cartoon-and-cereal-lyrics "
},
//15. Westside, Right On TIme
{
	id:15,
	title: "Westside, Right On Time",
	album: 'Single Release',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "Came a long way from the ghetto, dog, but Westside, right on time, only thing fosho Eastside, right on time, gunning through your door",
	inlyric:"Came a long way from the ghetto, dog, but Westside, right on time, only thing fosho",
	mlyric:" Eastside, right on time, gunning through your door",
	youtube: 'https://youtu.be/wKgGXxoT5Ds',
	genius: "http://genius.com/1129370 "
}],
[
//16. Nosetalgia
{   id: 16,
	title: "Nosetalgia",
	album: 'My Name is My Name',
	img:'nostalgia.jpg',
	gif: 'nostalgia.gif',
	clyric: "He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect' He said 'Well nigga, then show me how it all makes sense 'Go figure, mothafucka, every verse is a brick, your son dope, nigga'",
	inlyric:" He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect' He said 'Well nigga, then show me how it all makes sense ",
	mlyric:"  'Go figure, mothafucka, every verse is a brick, our son dope, nigga'",
	youtube: 'https://youtu.be/u-2ckLBV21g',
	genius: "http://genius.com/Pusha-t-nosetalgia-lyrics"

},
//17. Collard Greens
{   id:17,
	title: "Collard Greens",
	album: 'Oxymoron',
	img:'collard.png',
	gif: 'collard.gif',
	clyric: "Hang in my penthouse roof, skyline the clearest Watch it, your optics, popping out, you look the weirdest Pop my top on the 105, head with no power steering, ah!",
	inlyric:"Hang in my penthouse roof, skyline the clearest Watch it, your optics, popping out, you look the weirdest ",
	mlyric:"Pop my top on the 105, head with no power steering, ah!",
	youtube: 'https://youtu.be/_L2vJEb6lVE',
	genius: "http://genius.com/Schoolboy-q-collard-greens-lyrics"
}
,
//18. Chapter  6
{
    id:18,
	title: "Chapter 6",
	album: 'Section 80',
	img:'section80.jpg',
	gif: 'default.gif',
	clyric: " The dysfunctional bastards of the Ronald Reagan Era. Young men that learned to do everything spiteful. This is your generation. Live fast and die young. ",
	inlyric:" The dysfunctional bastards of the Ronald Reagan Era. Young men that learned to do everything spiteful. ",
	mlyric:"This is your generation. Live fast and die young. ",
	youtube: 'https://youtu.be/okF5gOTX9uM',
	genius: "http://genius.com/Kendrick-lamar-chapter-six-lyrics"

},

//19. Black Friday
{
	id:19,
	title: "Black Friday",
	album: 'Single Release',
	img:'friday.jpg',
	gif: 'default2.gif',
	clyric: " Nothing more influential than rap music I merge jazz fusion with the trap music I mix black soul with some rock and roll They never box me in, I’m David Blaine-ing all you hoes",
	inlyric:" Nothing more influential than rap music I merge jazz fusion with the trap music I mix black soul with some rock and roll ",
	mlyric:" They never box me in, I’m David Blaine-ing all you hoes ",
	youtube: 'https://soundcloud.com/topdawgent/kendrick-lamar-black-friday',
	genius: "http://genius.com/Kendrick-lamar-black-friday-lyrics"

},

//20. No Parties in L.A.
{
	id:20,
	title: "No Parties in L.A.",
	album: 'The Life of Pablo',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "Lord have mercy, thou will not hurt me Five buddies all herded up on a Thursday Bottle service, head service, I came in first place",
	inlyric:" Lord have mercy, thou will not hurt me Five buddies all herded up on a Thursday Bottle service, head service, ",
	mlyric:"I came in first place",
	youtube: 'https://soundcloud.com/kanyewest/nomorepartiesinla',
	genius: "http://genius.com/Kanye-west-no-more-parties-in-la-lyrics"

}],
[
//21. These Walls
{
	id:21,
	title: "These Walls",
	album: 'To Pimp A Butterfly',
	img:'walls.jpg',
	gif: 'walls.gif',
	clyric: "These walls are vulnerable, exclamation Interior pink, color coordinated I interrogated, every nook and cranny",
	inlyric:" These walls are vulnerable, exclamation Interior pink, ",
	mlyric:"  color coordinated I interrogated, every nook and cranny",
	youtube: 'https://youtu.be/drV0QatqbRU',
	genius: "http://genius.com/Kendrick-lamar-these-walls-lyrics"

},
//22. Compton
{
    id:22,
	title: "Compton",
	album: 'good Kid m.a.a.d City',
	img:'bompton.jpeg',
	gif: 'compton.gif',
	clyric: "Now we can all celebrate We can all harvest the rap artists of NWA America target our rap market, as controversy and hate Harsh realities we in made our music translate",
	inlyric:" Now we can all celebrate We can all harvest the rap artists of NWA America target our rap market, as controversy and hate",
	mlyric:" Harsh realities we in made our music translate",
	youtube: 'https://youtu.be/48ZThugpVik',
	genius: "http://genius.com/Kendrick-lamar-compton-lyrics"

},
//23. Institutionalized
{
	id:23,
	title: "Institutionalized",
	album: 'To Pimp a Butterfly',
	img:'tpabalbum.jpg',
	gif: 'instit.gif',
	clyric: "I'm trapped inside the ghetto and I ain't proud to admit it Institutionalized, I keep runnin' back for a visit",
	inlyric:"I'm trapped inside the ghetto and I ain't proud to admit it ",
	mlyric:" Institutionalized, I keep runnin' back for a visit ",
	youtube: 'https://youtu.be/GQjprMppQ_8',
	genius: "http://genius.com/Kendrick-lamar-institutionalized-lyrics"

},
//24. 1 train
{   id:24,
	title: "1 Train",
	album: 'Long.Live.ASAP',
	img:'kendrick.jpg',
	gif: 'fuckin.gif',
	clyric: "I carry traits of a traumatized soldier Don't look in my face, I might snap, I might choke ya",
	inlyric:"I carry traits of a traumatized soldier ",
	mlyric:"  Don't look in my face, I might snap, I might choke ya",
	youtube: 'https://youtu.be/nU4OIAYwo5g',
	genius: "http://genius.com/A-ap-rocky-1-train-lyrics"
}
	,
//25. The Recipe
{   id:25,
	title: "The Recipe",
	album: 'good kid, m.A.A.d city',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: " Women, weed and weather They come for women, weed and weather For the women, weed and weather ",
	inlyric:" Women, weed and weather They come for women, weed and weather ",
	mlyric:" For the women, weed and weather",
	youtube: 'https://youtu.be/YpugK0RpEaU',
	genius: "http://genius.com/Kendrick-lamar-the-recipe-lyrics"
}
]
,[
//26. Cut You Off
{   id:26,
	title: "Cut You Off",
	album: 'Overly Dedicated',
	img:'xxl.jpg',
	gif: 'cut.gif',
	clyric: "I'm tryna find myself, I'm searching deep for Kendrick Lamar I read about Napoleon Hill and try to know God They say he the key to my blessings, and if I speak the good Into existence, that instant my dreams will unlock Money flow like water, I'll just wait at the dock",
	inlyric:"I'm tryna find myself, I'm searching deep for Kendrick Lamar I read about Napoleon Hill and try to know God They say he the key to my blessings, and if I speak the good Into existence, that instant my dreams will unlock Money flow like water,",
	mlyric:" I'll just wait at the dock",
	youtube: 'https://youtu.be/ZJzr2Dsputk',
	genius: "http://genius.com/Kendrick-lamar-cut-you-off-to-grow-closer-lyrics"
},
//27. Heart Pt. 2
{   id:27,
	title: "The Heart Pt.2",
	album: 'Overly Dedicated',
	img:'od.jpg',
	gif: 'cut.gif',
	clyric: "Never will I surrender I been a warrior when I came out my mom's placenta",
	inlyric:"Never will I surrender  ",
	mlyric:" I been a warrior when I came out my mom's placenta",
	youtube: 'https://youtu.be/2n5r6N7grNA',
	genius: "http://genius.com/Kendrick-lamar-the-heart-pt-2-lyrics"
},
//28. Sing About Me
{   id:28,
	title: "Sing About Me",
	album: 'good kid, m.a.a.d city',
	img:'goodkid.jpg',
	gif: 'default2.gif',
	clyric: "And I love you cause you love my brother like you did Just promise me you'll tell this story when you make it big And if I die before your album drop, I hope (gunshots)",
	inlyric:" And I love you cause you love my brother like you did Just promise me you'll tell this story when you make it big ",
	mlyric:"And if I die before your album drop, I hope (gunshots)",
	youtube: 'https://youtu.be/xtIr8k4eC7o',
	genius: "http://genius.com/Kendrick-lamar-sing-about-me-im-dying-of-thirst-lyrics"
},
//29. The Heart Pt.1
{  id:29,
	title: " Heart Pt.1",
	album: 'Unreleased',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "I believe there's one God, there's one love And I believe if I fly, we all doves I make a way for my people to see the light Brighter than yellow bones",
	inlyric:" I believe there's one God, there's one love And I believe if I fly, we all doves I make a way for my people to see the light ",
	mlyric:" Brighter than yellow bones",
	youtube: 'https://youtu.be/FjSfelCds6g',
	genius: "http://genius.com/Kendrick-lamar-the-heart-pt-1-lyrics"
},
//30. ADHD
{   id:30,
	title: "A.D.H.D.",
	album: 'Section 80',
	img:'section80.jpg',
	gif: 'adhd.gif',
	clyric: "Eight doobies to the face, fuck that Twelve bottles in the case, nigga, fuck that Two pills and a half-weight, nigga, fuck that Got a high tolerance when your age don't exist",
	inlyric:" Eight doobies to the face, fuck that Twelve bottles in the case, nigga, fuck that Two pills and a half-weight, nigga, fuck that ",
	mlyric:"  Got a high tolerance when your age don't exist ",
	youtube: 'https://youtu.be/QjlFqgRbICY',
	genius: "http://genius.com/Kendrick-lamar-adhd-lyrics"
}],[
//31. The Art of Peer Pressure
{
	id:31,
	title: "Art of Peer Pressure",
	album: 'good kid, m.A.A.d city',
	img:'goodkid.jpg',
	gif: 'art.gif',
	clyric: "I’m usually a true firm believer of bad karma Consequences from evil will make your past haunt you",
	inlyric:"I’m usually a true firm believer of bad karma ",
	mlyric:"  Consequences from evil will make your past haunt you ",
	youtube: 'https://youtu.be/VpRpzvV7K2s',
	genius: "http://genius.com/Kendrick-lamar-the-art-of-peer-pressure-lyrics"

},
//32. Forbidden Fruit
{
	id:32,
	title: "Forbidden Fruit",
	album: 'Born Sinner',
	img:'kj.jpg',
	gif: 'kj.gif',
	clyric: "Down to the garden, took a little dip (oh no) Apple juice falling from her lips took a little sip, little sip",
	inlyric:"Down to the garden, took a little dip (oh no) ",
	mlyric:"  Apple juice falling from her lips took a little sip, little sip ",
	youtube: 'https://youtu.be/9-kWlUbkHS4',
	genius: "http://genius.com/J-cole-forbidden-fruit-lyrics"

},
//33. Blacker the Berry
{
	id:33,
	title: "Blacker the Berry",
	album: 'To Pimp A Butterfly',
	img:'tpab.jpg',
	gif: 'tpabride.gif',
	clyric: "I'm African-American, I'm African I'm black as the moon, heritage of a small village",
	inlyric:"I'm African-American, I'm African ",
	mlyric:" I'm black as the moon, heritage of a small village  ",
	youtube: 'https://youtu.be/rMxNYQ71LOk',
	genius: "http://genius.com/Kendrick-lamar-the-blacker-the-berry-lyrics"

},
//34. Hiii Power
{
	id:34,
	title: "HiiiPower",
	album: 'Section80',
	img:'kendrick.jpg',
	gif: 'default2.gif',
	clyric: "Visions of Martin Luther staring at me If I see it how he seen it, that would make my parents happy",
	inlyric:" Visions of Martin Luther staring at me ",
	mlyric:" If I see it how he seen it, that would make my parents happy",
	youtube: 'https://youtu.be/RT2ZCdPVLAs',
	genius: "http://genius.com/170437"

},

//35. How much does a dollar Cost
{
	id:35,
	title: "How Much Does a Dollar Cost",
	album:'To Pimp a Butterfly',
	img:'tpab.jpg',
	gif: 'cost.gif',
	clyric: "Have you ever opened up Exodus 14? A humble man is all that we ever need",
	inlyric:" Have you ever opened up Exodus 14?",
	mlyric:" A humble man is all that we ever need",
	youtube: 'https://youtu.be/fJT3b4urwcU',
	genius: "http://genius.com/Kendrick-lamar-how-much-a-dollar-cost-lyrics"
}],[
//36. Complexion(Zulu Love)
{
	id:36,
	title: "Complexion(Zulu Love)",
	album:'To Pimp a Butterfly',
	img:'kendrick.jpg',
	gif: 'instit.gif',
	clyric: "By different shades of faces Then Whit told me, 'A woman is woman, love the creation' It all came from God then you was my confirmation",
	inlyric:" By different shades of faces Then Whit told me, 'A woman is woman, love the creation' ",
	mlyric:" It all came from God then you was my confirmation ",
	youtube: 'https://youtu.be/AH6qPuPSZHU',
	genius: "http://genius.com/Kendrick-lamar-complexion-a-zulu-love-lyrics"
},
//37. Untitled 3
{
	id:37,
	title: "Untitled 03",
	album:'Untitled',
	img:'xxl.jpg',
	gif: 'untitled.gif',
	clyric: "See you thinking too much, plus you too full of yourself Worried about your career, you ever think of your health?",
	inlyric:" See you thinking too much, plus you too full of yourself ",
	mlyric:" Worried about your career, you ever think of your health? ",
	youtube: 'https://www.youtube.com/watch?v=W06HM7JMN4k',
	genius: "http://genius.com/Kendrick-lamar-untitled-03-05282013-lyrics"
},
//38. Freedom
{
	id:38,
	title: "Freedom",
	album:'Lemonade',
	img:'kendrick.jpg',
	gif: 'grammy.gif',
	clyric: "Yeah, open our mind as we cast away oppression Yeah, open the streets and watch our beliefs",
	inlyric:"Yeah, open our mind as we cast away oppression ",
	mlyric:"Yeah, open the streets and watch our beliefs ",
	youtube: 'Sorry No Link This Song',
	genius: "http://genius.com/Beyonce-freedom-lyrics"
},
//39. You Ain't Gotta Lie
{
	id:39,
	title:"You Ain't Gotta Lie",
	album:'To Pimp A Butterfly',
	img:'tpabalbum.jpg',
	gif: 'lie.gif',
	clyric: "You ain't gotta lie to kick it, my nigga You ain't gotta try so hard",
	inlyric:"You ain't gotta lie to kick it, my nigga",
	mlyric:"You ain't gotta try so hard",
	youtube: 'Sorry No Link This Song',
	genius: "http://genius.com/Beyonce-freedom-lyrics"
},
//40. Untitled 7
{
	id:40,
	title:"Untitled 7",
	album:'To Pimp A Butterfly',
	img:'k2.png',
	gif: 'default2.gif',
	clyric: "Life won't get you high like this here, no He won't get you high like this here, no ",
	inlyric:" Life won't get you high like this here, no ",
	mlyric:"He won't get you high like this here, no ",
	youtube: 'https://youtu.be/uES9400qG_A',
	genius: "http://genius.com/8787410"

}],
[
//41. Fuck Your Ethnicity
{
    id:41,
	title:"Fuck Your Ethnicity",
	album:'Section 80',
	img:'section80.jpg',
	gif: 'adhd.gif',
	clyric: "Fire burning inside my eyes, this the music that saved my life Y'all be calling it hip-hop, I be calling it hypnotize Yeah, hypnotize, trapped my body but freed my mind",
	inlyric:" Fire burning inside my eyes, this the music that saved my life Y'all be calling it hip-hop, I be calling it hypnotize Yeah, hypnotize,",
	mlyric:" trapped my body but freed my mind",
	youtube: 'https://youtu.be/xWvWDu6IAyY',
	genius: "http://genius.com/Kendrick-lamar-fuck-your-ethnicity-lyrics"

},
//42. Control
{
    id:42,
	title:"Control",
	album:'Unreleased',
	img:'tpab.jpg',
	gif: 'kbet.gif',
	clyric: "I'm Makaveli's offspring, I'm the King of New York King of the Coast, one hand, I juggle them both",
	inlyric:" I'm Makaveli's offspring, I'm the King of New York King of the Coast, ",
	mlyric:"one hand, I juggle them both",
	youtube: 'https://youtu.be/W7zdMeZPkpY',
	genius: "http://genius.com/Big-sean-control-lyrics"

},
//43. Momma
{
    id:43,
	title:"Momma",
	album:'To Pimp a Butterfly',
	img:'tpab.jpg',
	gif: 'tpabride.gif',
	clyric: "I know loyalty, I know respect, I know those that's ornery I know everything, the highs, the lows, the groupies, the junkies ",
	inlyric:"I know loyalty, I know respect, I know those that's ornery  ",
	mlyric:" I know everything, the highs, the lows, the groupies, the junkies ",
	youtube: ' https://youtu.be/ZO-ZsW0orlk ',
	genius: "http://genius.com/Kendrick-lamar-momma-lyrics"

},
//44. Ab-Soul Outro
{
    id:44,
	title:"Ab-Soul Outro",
	album:'Section 80',
	img:'section80.jpg',
	gif: 'default2.gif',
	clyric: " See I've spent twenty three years on the earth searching for answers 'til one day I realized I had to come up with my own",
	inlyric:" See I've spent twenty three years on the earth searching for answers  ",
	mlyric:" 'til one day I realized I had to come up with my own ",
	youtube: 'https://www.youtube.com/watch?v=gtUsEbbVBuo',
	genius: "http://genius.com/Kendrick-lamar-ab-souls-outro-lyrics"
}
,
//45. good kid
{
    id:45,
	title:"good kid",
	album:'good kid, m.A.A.d city',
	img:'goodkid.jpg',
	gif: 'default2.gif',
	clyric: "I got animosity buildin', it's probably big as a buildin' Me jumpin' off of the roof is me just playin' it safe",
	inlyric:"I got animosity buildin', it's probably big as a buildin' ",
	mlyric:"Me jumpin' off of the roof is me just playin' it safe ",
	youtube: 'https://youtu.be/jcUFbU9bxdk',
	genius: "http://genius.com/Kendrick-lamar-good-kid-lyrics"
}],
[
//46
{
    id:46,
	title:"U.O.E.N.O.",
	album:'Single Released',
	img:'xxl.jpg',
	gif: 'art.gif',
	clyric: "Stuck in a rock and a hard place Eminem, Pac and where God stay Timberlands pop that jaw bone Now bitch nigga, tell me how that tar taste",
	inlyric:"Stuck in a rock and a hard place Eminem, Pac and where God stay Timberlands pop that jaw bone ",
	mlyric:"Now bitch nigga, tell me how that tar taste ",
	youtube: 'https://soundcloud.com/topdawgent/black-hippy-u-o-e-n-o-remix',
	genius: "http://genius.com/Black-hippy-uoeno-lyrics"
},
//47. Hood Politics
{
    id:47,
	title:"Hood Politics",
	album:'To Pimp a Buttterfly',
	img:'kendrick.jpg',
	gif: 'hood.gif',
	clyric: "Oh, yeah? Everythin' is everythin', it's scandalous Slow motion for the ambulance, the project filled with cameras",
	inlyric:" Oh, yeah? Everythin' is everythin', it's scandalous ",
	mlyric:" Slow motion for the ambulance, the project filled with cameras",
	youtube: 'https://youtu.be/xaB2g_eF6T8',
	genius: "http://genius.com/Kendrick-lamar-hood-politics-lyrics"
},
//48. Keisha Song
{
    id:48,
	title:"Keisha's Song",
	album:'Section80',
	img:'k2.jpg',
	gif: 'default2.gif',
	clyric: "She play Mr. Shakur, that's her favorite rapper Bumping 'Brenda's Got a Baby' while a pervert yelling at her",
	inlyric:" She play Mr. Shakur, that's her favorite rapper",
	mlyric:"Bumping 'Brenda's Got a Baby' while a pervert yelling at her",
	youtube: 'https://youtu.be/XX4la7LwwVk',
	genius: "http://genius.com/Kendrick-lamar-keishas-song-her-pain-lyrics"
},
//49. The Heart Pt. 3
{
    id:49,
	title:" The Heart Pt. 3",
	album:'Single Release',
	img:'kendrick.jpg',
	gif: 'untitled.gif',
	clyric: "My nigga got hit 25 times with a K Make the decision, ride the beat or ride in a hearse",
	inlyric:" My nigga got hit 25 times with a K ",
	mlyric:" Make the decision, ride the beat or ride in a hearse",
	youtube: 'https://youtu.be/duavU5KzO3U',
	genius: "http://genius.com/1150067"
},
{
    id:50,
	title:" The Jig is Up",
	album:'Single Release',
	img:'k2.jpg',
	gif: 'kj.gif',
	clyric: "Y'all too infatuated with the fucking numbers Which make it easy for me to divide and conquer",
	inlyric:" Y'all too infatuated with the fucking numbers ",
	mlyric:" Which make it easy for me to divide and conquer",
	youtube: 'https://youtu.be/7VbvTclAaqA',
	genius: "http://genius.com/Kendrick-lamar-the-jig-is-up-dumpn-lyrics"
}]
];




$scope.questions= [


	//1.Swimming pool
	{
		id:1 ,
		title: 'Swimming Pools(Drank)',
		album: 'Good Kid, M.A.A.D. City',
		img:'drank.jpg',
		gif: 'drank.gif',
		clyric: 'Okay, now open your mind up and listen me, Kendrick I am your conscience, if you do not hear me, then you will be history, Kendrick ',
		inlyric:'Okay, now open your mind up and listen me, Kendrick I am your conscience, if you do not hear me, then you will be',
		mlyric:'history, Kendrick',
		youtube: 'https://youtu.be/8-ejyHzz3XE',
		genius: 'http://genius.com/Kendrick-lamar-swimming-pools-drank-lyrics'
	},
	//2.King Kunta
	{   id:2,
		title: 'King Kunta',
		album: 'To Pimp a Butterfly',
		img:'tpab.jpg',
		gif: 'kk.gif',
		clyric: 'Now I run the game got the whole world talkin, King Kunta Everybody wanna cut the legs off him, ',
		inlyric:'Now I run the game got the whole world talkin, King Kunta Everybody wanna cut the legs off him, ',
		mlyric:'Kunta Black man taking no losses, oh yeah',
		youtube: 'https://youtu.be/hRK7PVJFbS8',
		genius: 'http://genius.com/Kendrick-lamar-king-kunta-lyrics'
	},
	//3. mad city
	{   id:3,
		title: 'm.A.A.D City',
		album: 'Good kid, M.A.A.D City',
		img:'kendrick.jpg',
		gif: 'default.gif',
		clyric: "Bodies on top of bodies, IV's on top of IV's Obviously the coroner between the sheets like the Isleys",
		inlyric:"Bodies on top of bodies, IV's on top of IV's  ",
		mlyric:'Obviously the coroner between the sheets like the Isleys',
		youtube: 'https://youtu.be/O4ymPrV-02M?list=PLIen3IPVo_U1MwbZen4ne2I8CDcKy9lCk',
		genius: 'http://genius.com/Kendrick-lamar-maad-city-lyrics'
	},
	//4. Rigamortis
	{
	    id:4,
		title: 'Rigamortis',
		album: 'Section 80',
		img:'section80.jpg',
		gif: 'rigamortis.gif',
		clyric: "And this is rigamortus and it's gorgeous when you die Ali recorded, and I'm Morpheus, the matrix of my mind I'm out the orbit, you an orphan and a hairdresser combined I'm on the toilet when I rhyme, if you the shit then I decline",
		inlyric:"And this is rigamortus and it's gorgeous when you die Ali recorded, and I'm Morpheus, the matrix of my mind I'm out the orbit, you an orphan and a hairdresser combined ",
		mlyric:"I'm on the toilet when I rhyme, if you the shit then I decline",
		youtube: 'https://youtu.be/sBvngg87998',
		genius: 'http://genius.com/Kendrick-lamar-rigamortis-lyrics'
	},
	//5. Wesly Theory
	{   id:5,
		title: 'Wesly Theory',
		album: 'To Pimp A Butterfly',
		img:'tpab.jpg',
		gif: 'default.gif',
		clyric: "I can see the borrow in you, I can see the dollar in you Little white lies, but it's no white-collar in you But it's whatever though because I'm still followin' you",
		inlyric:"I can see the borrow in you, I can see the dollar in you Little white lies, but it's no white-collar in you   ",
		mlyric:"But it's whatever though because I'm still followin' you",
		youtube: 'https://youtu.be/s0QtdISwioc',
		genius: 'http://genius.com/Kendrick-lamar-wesleys-theory-lyrics'

	},

	//6. Backseat Freestyle
		{
		id:6,
		title: 'Backseat Freestyle',
		album: 'Good Kid M.A.A.D. City',
		img:'backseat.jpg',
		gif: 'backseat.gif',
		clyric: "Respect my mind or die from lead showers",
		inlyric:" Respect my mind ",
		mlyric:" or die from lead showers",
		youtube: 'https://www.youtube.com/watch?v=EZW7et3tPuQ',
		genius: 'http://genius.com/Kendrick-lamar-backseat-freestyle-lyrics'

		},

   //7. Money Tree
   {
	    id:7,
	    title: 'Money Trees',
		album: 'Good Kid M.A.A.D. City',
		img:'kendrick.jpg',
		gif: 'default.gif',
		clyric: "It go Halle Berry or hallelujah Pick your poison, tell me what you doing Everybody gon' respect the shooter But the one in front of the gun lives forever",
		inlyric:" It go Halle Berry or hallelujah Pick your poison, tell me what you doing Everybody gon' respect the shooter ",
		mlyric:" But the one in front of the gun lives forever",
		youtube: 'https://youtu.be/NtxmnBQmfZs',
		genius: 'http://genius.com/Kendrick-lamar-money-trees-lyrics'


   },
   //8. Alright
   {
        id:8,
	    title: 'Alright',
		album: 'To Pimp A Butterfly',
		img:'alright.png',
		gif: 'alright.gif',
		clyric: "Wouldn't you know We been hurt, been down before Nigga, when our pride was low Lookin' at the world like, 'Where do we go?' Nigga, and we hate po-po Wanna kill us dead in the street fo sho Nigga, I'm at the preacher's door My knees gettin' weak, and my gun might blow But we gon' be alright",
		inlyric:"Wouldn't you know We been hurt, been down before Nigga, when our pride was low Lookin' at the world like, 'Where do we go?' Nigga, and we hate po-po Wanna kill us dead in the street fo sho Nigga, I'm at the preacher's door My knees gettin' weak, and my gun might blow ",
		mlyric:"But we gon' be alright",
		youtube: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
		genius: 'http://genius.com/Kendrick-lamar-alright-lyrics'

   },
//9. Untitled 2
{
    id:9,
	title:'Untitled 2',
	album: 'Untitled',
	img:'untl2.jpg',
	gif: 'untl2.gif',
	clyric: "Seen black turn 'em Burgundy Hundred of them, I know I'm greedy Stuck inside the belly of the beast Can you please pray for me?",
	inlyric:"Seen black turn 'em Burgundy Hundred of them, I know I'm greedy Stuck inside the belly of the beast ",
	mlyric:" Can you please pray for me ",
	youtube: 'https://youtu.be/qt3bNjORLe8',
	genius: 'http://genius.com/Kendrick-lamar-untitled-02-06232014-lyrics'
},

//10. Poetic Justice
{
	id:10,
	title:'Poetic Justice',
	album: 'Good Kid M.A.A.D City',
	img:'poetic.jpg',
	gif: 'poetic.gif',
	clyric: "I mean I write poems in these songs dedicated to you when You're in the mood for empathy, there's blood in my pen  ",
	inlyric:"I mean I write poems in these songs dedicated to you when You're in the mood for empathy, ",
	mlyric:" there's blood in my pen ",
	youtube: 'https://youtu.be/yyr2gEouEMM',
	genius: 'http://genius.com/Kendrick-lamar-poetic-justice-lyrics'
},

//11. i
{
	id:11,
	title:'i',
	album: 'To Pimp A Butterfly',
	img:'i.jpg',
	gif: 'i.gif',
	clyric: "I went to war last night (Night, night, night, night, night) I've been dealing with depression ever since an adolescent Duckin' every other blessin', I can never see the message",
	inlyric:"I went to war last night (Night, night, night, night, night) I've been dealing with depression ever since an adolescent ",
	mlyric:" Duckin' every other blessin', I can never see the message",
	youtube: 'https://youtu.be/8aShfolR6w8',
	genius: 'http://genius.com/Kendrick-lamar-i-lyrics'
},
//12. Hol up
{
	id:12,
	title:"Hol' Up",
	album: 'Section 80',
	img:'section80.jpg',
	gif: 'default.gif',
	clyric: "I wrote this record while thirty thousand feet in the air Stewardess complimenting me on my nappy hair",
	inlyric:"I wrote this record while thirty thousand feet in the air ",
	mlyric:" Stewardess complimenting me on my nappy hair ",
	youtube: 'https://youtu.be/GDxkMYVDB5w',
	genius: " http://genius.com/Kendrick-lamar-hol-up-lyrics"

},
//13. Bitch, Don't Kill My Vibe
{
    id:13,
    title:"Bitch, Don't Kill Vibe",
	album: 'Good Kid M.A.A.D City',
	img:'bitch.jpg',
	gif: 'bitch.gif',
	clyric: "I got my drink, I got my music I would share it but today I'm yelling Bitch don't kill my vibe, bitch don't kill my vibe Bitch don't kill my vibe, bitch don't kill my vibe",
	inlyric:"I got my drink, I got my music I would share it but today I'm yelling Bitch don't kill my vibe, bitch don't kill my vibe Bitch don't kill my vibe,",
	mlyric:"  bitch don't kill my vibe",
	youtube: 'https://youtu.be/GF8aaTu2kg0',
	genius: " http://genius.com/Kendrick-lamar-bitch-dont-kill-my-vibe-lyrics"
},
//14. Cartoon and Cereal
{
	id:14,
	title:"Cartoon and Cereal",
	album: 'Single Release',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "You told me 'Don't be like me, just finish watching cartoons' Which is funny now cause all I see is Wile E. Coyotes in the room",
	inlyric:"You told me 'Don't be like me, just finish watching cartoons'",
	mlyric:" Which is funny now cause all I see is Wile E. Coyotes in the room",
	youtube: 'https://youtu.be/uNTpPNo3LBg',
	genius: " http://genius.com/Kendrick-lamar-cartoon-and-cereal-lyrics "
},
//15. Westside, Right On TIme
{
	id:15,
	title: "Westside, Right On Time",
	album: 'Single Release',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "Came a long way from the ghetto, dog, but Westside, right on time, only thing fosho Eastside, right on time, gunning through your door",
	inlyric:"Came a long way from the ghetto, dog, but Westside, right on time, only thing fosho",
	mlyric:" Eastside, right on time, gunning through your door",
	youtube: 'https://youtu.be/wKgGXxoT5Ds',
	genius: "http://genius.com/1129370 "
},

//16. Nosetalgia
{   id: 16,
	title: "Nosetalgia",
	album: 'My Name is My Name',
	img:'nostalgia.jpg',
	gif: 'nostalgia.gif',
	clyric: "He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect' He said 'Well nigga, then show me how it all makes sense 'Go figure, mothafucka, every verse is a brick, your son dope, nigga'",
	inlyric:" He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect' He said 'Well nigga, then show me how it all makes sense ",
	mlyric:"  'Go figure, mothafucka, every verse is a brick, our son dope, nigga'",
	youtube: 'https://youtu.be/u-2ckLBV21g',
	genius: "http://genius.com/Pusha-t-nosetalgia-lyrics"

},
//17. Collard Greens
{   id:17,
	title: "Collard Greens",
	album: 'Oxymoron',
	img:'collard.png',
	gif: 'collard.gif',
	clyric: "Hang in my penthouse roof, skyline the clearest Watch it, your optics, popping out, you look the weirdest Pop my top on the 105, head with no power steering, ah!",
	inlyric:"Hang in my penthouse roof, skyline the clearest Watch it, your optics, popping out, you look the weirdest ",
	mlyric:"Pop my top on the 105, head with no power steering, ah!",
	youtube: 'https://youtu.be/_L2vJEb6lVE',
	genius: "http://genius.com/Schoolboy-q-collard-greens-lyrics"
}
,
//18. Chapter  6
{
    id:18,
	title: "Chapter 6",
	album: 'Section 80',
	img:'section80.jpg',
	gif: 'default.gif',
	clyric: " The dysfunctional bastards of the Ronald Reagan Era. Young men that learned to do everything spiteful. This is your generation. Live fast and die young. ",
	inlyric:" The dysfunctional bastards of the Ronald Reagan Era. Young men that learned to do everything spiteful. ",
	mlyric:"This is your generation. Live fast and die young. ",
	youtube: 'https://youtu.be/okF5gOTX9uM',
	genius: "http://genius.com/Kendrick-lamar-chapter-six-lyrics"

},

//19. Black Friday
{
	id:19,
	title: "Black Friday",
	album: 'Single Release',
	img:'friday.jpg',
	gif: 'default2.gif',
	clyric: " Nothing more influential than rap music I merge jazz fusion with the trap music I mix black soul with some rock and roll They never box me in, I’m David Blaine-ing all you hoes",
	inlyric:" Nothing more influential than rap music I merge jazz fusion with the trap music I mix black soul with some rock and roll ",
	mlyric:" They never box me in, I’m David Blaine-ing all you hoes ",
	youtube: 'https://soundcloud.com/topdawgent/kendrick-lamar-black-friday',
	genius: "http://genius.com/Kendrick-lamar-black-friday-lyrics"

},

//20. No Parties in L.A.
{
	id:20,
	title: "No Parties in L.A.",
	album: 'The Life of Pablo',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "Lord have mercy, thou will not hurt me Five buddies all herded up on a Thursday Bottle service, head service, I came in first place",
	inlyric:" Lord have mercy, thou will not hurt me Five buddies all herded up on a Thursday Bottle service, head service, ",
	mlyric:"I came in first place",
	youtube: 'https://soundcloud.com/kanyewest/nomorepartiesinla',
	genius: "http://genius.com/Kanye-west-no-more-parties-in-la-lyrics"

},

//21. These Walls
{
	id:21,
	title: "These Walls",
	album: 'To Pimp A Butterfly',
	img:'walls.jpg',
	gif: 'walls.gif',
	clyric: "These walls are vulnerable, exclamation Interior pink, color coordinated I interrogated, every nook and cranny",
	inlyric:" These walls are vulnerable, exclamation Interior pink, ",
	mlyric:"  color coordinated I interrogated, every nook and cranny",
	youtube: 'https://youtu.be/drV0QatqbRU',
	genius: "http://genius.com/Kendrick-lamar-these-walls-lyrics"

},
//22. Compton
{
    id:22,
	title: "Compton",
	album: 'good Kid m.a.a.d City',
	img:'bompton.jpeg',
	gif: 'compton.gif',
	clyric: "Now we can all celebrate We can all harvest the rap artists of NWA America target our rap market, as controversy and hate Harsh realities we in made our music translate",
	inlyric:" Now we can all celebrate We can all harvest the rap artists of NWA America target our rap market, as controversy and hate",
	mlyric:" Harsh realities we in made our music translate",
	youtube: 'https://youtu.be/48ZThugpVik',
	genius: "http://genius.com/Kendrick-lamar-compton-lyrics"

},
//23. Institutionalized
{
	id:23,
	title: "Institutionalized",
	album: 'To Pimp a Butterfly',
	img:'tpabalbum.jpg',
	gif: 'instit.gif',
	clyric: "I'm trapped inside the ghetto and I ain't proud to admit it Institutionalized, I keep runnin' back for a visit",
	inlyric:"I'm trapped inside the ghetto and I ain't proud to admit it ",
	mlyric:" Institutionalized, I keep runnin' back for a visit ",
	youtube: 'https://youtu.be/GQjprMppQ_8',
	genius: "http://genius.com/Kendrick-lamar-institutionalized-lyrics"

},
//24. 1 train
{   id:24,
	title: "1 Train",
	album: 'Long.Live.ASAP',
	img:'kendrick.jpg',
	gif: 'fuckin.gif',
	clyric: "I carry traits of a traumatized soldier Don't look in my face, I might snap, I might choke ya",
	inlyric:"I carry traits of a traumatized soldier ",
	mlyric:"  Don't look in my face, I might snap, I might choke ya",
	youtube: 'https://youtu.be/nU4OIAYwo5g',
	genius: "http://genius.com/A-ap-rocky-1-train-lyrics"
}
	,
//25. The Recipe
{   id:25,
	title: "The Recipe",
	album: 'good kid, m.A.A.d city',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: " Women, weed and weather They come for women, weed and weather For the women, weed and weather ",
	inlyric:" Women, weed and weather They come for women, weed and weather ",
	mlyric:" For the women, weed and weather",
	youtube: 'https://youtu.be/YpugK0RpEaU',
	genius: "http://genius.com/Kendrick-lamar-the-recipe-lyrics"
}

,
//26. Cut You Off
{   id:26,
	title: "Cut You Off",
	album: 'Overly Dedicated',
	img:'xxl.jpg',
	gif: 'cut.gif',
	clyric: "I'm tryna find myself, I'm searching deep for Kendrick Lamar I read about Napoleon Hill and try to know God They say he the key to my blessings, and if I speak the good Into existence, that instant my dreams will unlock Money flow like water, I'll just wait at the dock",
	inlyric:"I'm tryna find myself, I'm searching deep for Kendrick Lamar I read about Napoleon Hill and try to know God They say he the key to my blessings, and if I speak the good Into existence, that instant my dreams will unlock Money flow like water,",
	mlyric:" I'll just wait at the dock",
	youtube: 'https://youtu.be/ZJzr2Dsputk',
	genius: "http://genius.com/Kendrick-lamar-cut-you-off-to-grow-closer-lyrics"
},
//27. Heart Pt. 2
{   id:27,
	title: "The Heart Pt.2",
	album: 'Overly Dedicated',
	img:'od.jpg',
	gif: 'cut.gif',
	clyric: "Never will I surrender I been a warrior when I came out my mom's placenta",
	inlyric:"Never will I surrender  ",
	mlyric:" I been a warrior when I came out my mom's placenta",
	youtube: 'https://youtu.be/2n5r6N7grNA',
	genius: "http://genius.com/Kendrick-lamar-the-heart-pt-2-lyrics"
},
//28. Sing About Me
{   id:28,
	title: "Sing About Me",
	album: 'good kid, m.a.a.d city',
	img:'goodkid.jpg',
	gif: 'default2.gif',
	clyric: "And I love you cause you love my brother like you did Just promise me you'll tell this story when you make it big And if I die before your album drop, I hope (gunshots)",
	inlyric:" And I love you cause you love my brother like you did Just promise me you'll tell this story when you make it big ",
	mlyric:"And if I die before your album drop, I hope (gunshots)",
	youtube: 'https://youtu.be/xtIr8k4eC7o',
	genius: "http://genius.com/Kendrick-lamar-sing-about-me-im-dying-of-thirst-lyrics"
},
//29. The Heart Pt.1
{  id:29,
	title: " Heart Pt.1",
	album: 'Unreleased',
	img:'kendrick.jpg',
	gif: 'default.gif',
	clyric: "I believe there's one God, there's one love And I believe if I fly, we all doves I make a way for my people to see the light Brighter than yellow bones",
	inlyric:" I believe there's one God, there's one love And I believe if I fly, we all doves I make a way for my people to see the light ",
	mlyric:" Brighter than yellow bones",
	youtube: 'https://youtu.be/FjSfelCds6g',
	genius: "http://genius.com/Kendrick-lamar-the-heart-pt-1-lyrics"
},
//30. ADHD
{   id:30,
	title: "A.D.H.D.",
	album: 'Section 80',
	img:'section80.jpg',
	gif: 'adhd.gif',
	clyric: "Eight doobies to the face, fuck that Twelve bottles in the case, nigga, fuck that Two pills and a half-weight, nigga, fuck that Got a high tolerance when your age don't exist",
	inlyric:" Eight doobies to the face, fuck that Twelve bottles in the case, nigga, fuck that Two pills and a half-weight, nigga, fuck that ",
	mlyric:"  Got a high tolerance when your age don't exist ",
	youtube: 'https://youtu.be/QjlFqgRbICY',
	genius: "http://genius.com/Kendrick-lamar-adhd-lyrics"
},
//31. The Art of Peer Pressure
{
	id:31,
	title: "Art of Peer Pressure",
	album: 'good kid, m.A.A.d city',
	img:'goodkid.jpg',
	gif: 'art.gif',
	clyric: "I’m usually a true firm believer of bad karma Consequences from evil will make your past haunt you",
	inlyric:"I’m usually a true firm believer of bad karma ",
	mlyric:"  Consequences from evil will make your past haunt you ",
	youtube: 'https://youtu.be/VpRpzvV7K2s',
	genius: "http://genius.com/Kendrick-lamar-the-art-of-peer-pressure-lyrics"

},
//32. Forbidden Fruit
{
	id:32,
	title: "Forbidden Fruit",
	album: 'Born Sinner',
	img:'kj.jpg',
	gif: 'kj.gif',
	clyric: "Down to the garden, took a little dip (oh no) Apple juice falling from her lips took a little sip, little sip",
	inlyric:"Down to the garden, took a little dip (oh no) ",
	mlyric:"  Apple juice falling from her lips took a little sip, little sip ",
	youtube: 'https://youtu.be/9-kWlUbkHS4',
	genius: "http://genius.com/J-cole-forbidden-fruit-lyrics"

},
//33. Blacker the Berry
{
	id:33,
	title: "Blacker the Berry",
	album: 'To Pimp A Butterfly',
	img:'tpab.jpg',
	gif: 'tpabride.gif',
	clyric: "I'm African-American, I'm African I'm black as the moon, heritage of a small village",
	inlyric:"I'm African-American, I'm African ",
	mlyric:" I'm black as the moon, heritage of a small village  ",
	youtube: 'https://youtu.be/rMxNYQ71LOk',
	genius: "http://genius.com/Kendrick-lamar-the-blacker-the-berry-lyrics"

},
//34. Hiii Power
{
	id:34,
	title: "HiiiPower",
	album: 'Section80',
	img:'kendrick.jpg',
	gif: 'default2.gif',
	clyric: "Visions of Martin Luther staring at me If I see it how he seen it, that would make my parents happy",
	inlyric:" Visions of Martin Luther staring at me ",
	mlyric:" If I see it how he seen it, that would make my parents happy",
	youtube: 'https://youtu.be/RT2ZCdPVLAs',
	genius: "http://genius.com/170437"

},

//35. How much does a dollar Cost
{
	id:35,
	title: "How Much Does a Dollar Cost",
	album:'To Pimp a Butterfly',
	img:'tpab.jpg',
	gif: 'cost.gif',
	clyric: "Have you ever opened up Exodus 14? A humble man is all that we ever need",
	inlyric:" Have you ever opened up Exodus 14?",
	mlyric:" A humble man is all that we ever need",
	youtube: 'https://youtu.be/fJT3b4urwcU',
	genius: "http://genius.com/Kendrick-lamar-how-much-a-dollar-cost-lyrics"
},
//36. Complexion(Zulu Love)
{
	id:36,
	title: "Complexion(Zulu Love)",
	album:'To Pimp a Butterfly',
	img:'kendrick.jpg',
	gif: 'instit.gif',
	clyric: "By different shades of faces Then Whit told me, 'A woman is woman, love the creation' It all came from God then you was my confirmation",
	inlyric:" By different shades of faces Then Whit told me, 'A woman is woman, love the creation' ",
	mlyric:" It all came from God then you was my confirmation ",
	youtube: 'https://youtu.be/AH6qPuPSZHU',
	genius: "http://genius.com/Kendrick-lamar-complexion-a-zulu-love-lyrics"
},
//37. Untitled 3
{
	id:37,
	title: "Untitled 03",
	album:'Untitled',
	img:'xxl.jpg',
	gif: 'untitled.gif',
	clyric: "See you thinking too much, plus you too full of yourself Worried about your career, you ever think of your health?",
	inlyric:" See you thinking too much, plus you too full of yourself ",
	mlyric:" Worried about your career, you ever think of your health? ",
	youtube: 'https://www.youtube.com/watch?v=W06HM7JMN4k',
	genius: "http://genius.com/Kendrick-lamar-untitled-03-05282013-lyrics"
},
//38. Freedom
{
	id:38,
	title: "Freedom",
	album:'Lemonade',
	img:'kendrick.jpg',
	gif: 'grammy.gif',
	clyric: "Yeah, open our mind as we cast away oppression Yeah, open the streets and watch our beliefs",
	inlyric:" Yeah, open our mind as we cast away oppression ",
	mlyric:"Yeah, open the streets and watch our beliefs ",
	youtube: 'Sorry No Link This Song',
	genius: "http://genius.com/Beyonce-freedom-lyrics"
},
//39. You Ain't Gotta Lie
{
	id:39,
	title:"You Ain't Gotta Lie",
	album:'To Pimp A Butterfly',
	img:'tpabalbum.jpg',
	gif: 'lie.gif',
	clyric: " ",
	inlyric:" Yeah, open our mind as we cast away oppression ",
	mlyric:"Yeah, open the streets and watch our beliefs ",
	youtube: 'Sorry No Link This Song',
	genius: "http://genius.com/Beyonce-freedom-lyrics"
},
//40. Untitled 7
{
	id:40,
	title:"Untitled 7",
	album:'To Pimp A Butterfly',
	img:'k2.png',
	gif: 'default2.gif',
	clyric: "Life won't get you high like this here, no He won't get you high like this here, no ",
	inlyric:" Life won't get you high like this here, no ",
	mlyric:"He won't get you high like this here, no ",
	youtube: 'https://youtu.be/uES9400qG_A',
	genius: "http://genius.com/8787410"

},

//41. Fuck Your Ethnicity
{
    id:41,
	title:"Fuck Your Ethnicity",
	album:'Section 80',
	img:'section80.jpg',
	gif: 'adhd.gif',
	clyric: "Fire burning inside my eyes, this the music that saved my life Y'all be calling it hip-hop, I be calling it hypnotize Yeah, hypnotize, trapped my body but freed my mind",
	inlyric:" Fire burning inside my eyes, this the music that saved my life Y'all be calling it hip-hop, I be calling it hypnotize Yeah, hypnotize,",
	mlyric:" trapped my body but freed my mind",
	youtube: 'https://youtu.be/xWvWDu6IAyY',
	genius: "http://genius.com/Kendrick-lamar-fuck-your-ethnicity-lyrics"

},
//42. Control
{
    id:42,
	title:"Control",
	album:'Unreleased',
	img:'kendrick.jpg',
	gif: 'kbet.gif',
	clyric: "I'm Makaveli's offspring, I'm the King of New York King of the Coast, one hand, I juggle them both",
	inlyric:" I'm Makaveli's offspring, I'm the King of New York King of the Coast, ",
	mlyric:"one hand, I juggle them both",
	youtube: 'https://youtu.be/W7zdMeZPkpY',
	genius: "http://genius.com/Big-sean-control-lyrics"

},
//43. Momma
{
    id:43,
	title:"Momma",
	album:'To Pimp a Butterfly',
	img:'tpab.jpg',
	gif: 'tpabride.gif',
	clyric: "I know loyalty, I know respect, I know those that's ornery I know everything, the highs, the lows, the groupies, the junkies ",
	inlyric:"I know loyalty, I know respect, I know those that's ornery  ",
	mlyric:" I know everything, the highs, the lows, the groupies, the junkies ",
	youtube: ' https://youtu.be/ZO-ZsW0orlk ',
	genius: "http://genius.com/Kendrick-lamar-momma-lyrics"

},
//44. Ab-Soul Outro
{
    id:44,
	title:"Ab-Soul Outro",
	album:'Section 80',
	img:'section80.jpg',
	gif: 'default2.gif',
	clyric: " See I've spent twenty three years on the earth searching for answers 'til one day I realized I had to come up with my own",
	inlyric:" See I've spent twenty three years on the earth searching for answers  ",
	mlyric:" 'til one day I realized I had to come up with my own ",
	youtube: 'https://www.youtube.com/watch?v=gtUsEbbVBuo',
	genius: "http://genius.com/Kendrick-lamar-ab-souls-outro-lyrics"
}
,
//45. good kid
{
    id:45,
	title:"good kid",
	album:'good kid, m.A.A.d city',
	img:'goodkid.jpg',
	gif: 'default2.gif',
	clyric: "I got animosity buildin', it's probably big as a buildin' Me jumpin' off of the roof is me just playin' it safe",
	inlyric:"I got animosity buildin', it's probably big as a buildin' ",
	mlyric:"Me jumpin' off of the roof is me just playin' it safe ",
	youtube: 'https://youtu.be/jcUFbU9bxdk',
	genius: "http://genius.com/Kendrick-lamar-good-kid-lyrics"
},

//46
{
    id:46,
	title:"U.O.E.N.O.",
	album:'Single Released',
	img:'xxl.jpg',
	gif: 'art.gif',
	clyric: "Stuck in a rock and a hard place Eminem, Pac and where God stay Timberlands pop that jaw bone Now bitch nigga, tell me how that tar taste",
	inlyric:"Stuck in a rock and a hard place Eminem, Pac and where God stay Timberlands pop that jaw bone ",
	mlyric:"Now bitch nigga, tell me how that tar taste ",
	youtube: 'https://soundcloud.com/topdawgent/black-hippy-u-o-e-n-o-remix',
	genius: "http://genius.com/Black-hippy-uoeno-lyrics"
},
//47. Hood Politics
{
    id:47,
	title:"Hood Politics",
	album:'To Pimp a Buttterfly',
	img:'kendrick.jpg',
	gif: 'hood.gif',
	clyric: "Oh, yeah? Everythin' is everythin', it's scandalous Slow motion for the ambulance, the project filled with cameras",
	inlyric:" Oh, yeah? Everythin' is everythin', it's scandalous ",
	mlyric:" Slow motion for the ambulance, the project filled with cameras",
	youtube: 'https://youtu.be/xaB2g_eF6T8',
	genius: "http://genius.com/Kendrick-lamar-hood-politics-lyrics"
},
//48. Keisha Song
{
    id:48,
	title:"Keisha's Song",
	album:'Section80',
	img:'k2.jpg',
	gif: 'default2.gif',
	clyric: "She play Mr. Shakur, that's her favorite rapper Bumping 'Brenda's Got a Baby' while a pervert yelling at her",
	inlyric:" She play Mr. Shakur, that's her favorite rapper",
	mlyric:"Bumping 'Brenda's Got a Baby' while a pervert yelling at her",
	youtube: 'https://youtu.be/XX4la7LwwVk',
	genius: "http://genius.com/Kendrick-lamar-keishas-song-her-pain-lyrics"
},
//49. The Heart Pt. 3
{
    id:49,
	title:" The Heart Pt. 3",
	album:'Single Release',
	img:'kendrick.jpg',
	gif: 'untitled.gif',
	clyric: "My nigga got hit 25 times with a K Make the decision, ride the beat or ride in a hearse",
	inlyric:" My nigga got hit 25 times with a K ",
	mlyric:" Make the decision, ride the beat or ride in a hearse",
	youtube: 'https://youtu.be/duavU5KzO3U',
	genius: "http://genius.com/1150067"
},
{
    id:50,
	title:" The Jig is Up",
	album:'Single Release',
	img:'kendrick.jpg',
	gif: 'kj.gif',
	clyric: "Y'all too infatuated with the fucking numbers Which make it easy for me to divide and conquer",
	inlyric:" Y'all too infatuated with the fucking numbers ",
	mlyric:" Which make it easy for me to divide and conquer",
	youtube: 'https://youtu.be/7VbvTclAaqA',
	genius: "http://genius.com/Kendrick-lamar-the-jig-is-up-dumpn-lyrics"
}
 ];


$scope.idx=0;

$scope.shuffleQ = function(){
	var m=$scope.questions.length, t, i;
	// While there remain elements to shuffle
	while(m){
		//// Pick a remaining element…
		i= Math.floor(Math.random() * (m--));

		//and swapp it with current element
		t=$scope.questions[m];
		$scope.questions[m]=$scope.questions[i];
		$scope.questions[i]=t;
	}


return $scope.questions;
}

$scope.shuffleQ();

var c1=0;
var c2 =0;
var c3=0;
var c4 =0;
var c5 =0;

var r1=0;
var r2 =0;
var r3=0;
var r4 =0;
var r5 =0;

var d1=0;
var d2 =0;

var arr = [];

$scope.shuffleSongs = function(array){

 c1=0;
 c2 =0;
 c3=0;
 c4 =0;
 c5 =0;

 r1=0;
 r2 =0;
 r3=0;
 r4 =0;
 r5 =0;

 d1=0;
 d2 =0;


	var m=array.length, t, i;
	// While there remain elements to shuffle
	while(m){
		//// Pick a remaining element…
		i= Math.floor(Math.random() * (m--));

		//and swapp it with current element
		t=array[m];
		array[m]=array[i];
		array[i]=t;
	}

	$scope.shuffleQ();

	return array;
}


$scope.rowOne=0;
$scope.rowTwo=0;
$scope.rowThree=0;
$scope.rowFour=0;
$scope.rowFive=0;

$scope.colOne=0;
$scope.colTwo=0;
$scope.colThree=0;
$scope.colFour=0;
$scope.colFive=0;

$scope.leftDiag=0;
$scope.rightDiag=0;


$scope.match=function(col, row, song, ques, id, gif){

var gifLink= gif;

//console.log( $scope.shuffleQ().indexOf(ques));
console.log(song);

if (song == ques )
{
 $scope.matched="Correct Match!"
var cell = document.getElementById( id );
cell.style.background = "black";

//$scope.match = "Correct Match!"


angular.element(cell).unbind();


	//Diagonal Bingo Algorithm
	  if(row[0][0]== col ||  row[1][1] ==col || row[3][3] ==col || row[4][4]==col)
		 {
			 d1++;
			 $scope.leftDiag=4-d1;
		 }

		 if(row[0][4] ==col || row[1][3]==col || row [3][1] ==col  || row[4][0]==col)
		 {
			 d2++;
			 $scope.rightDiag=4-d2;
			}

		 if(d1 ==4 || d2==4){
			 console.log("Bingo");
			 bingoAlert();
		 }

    for(var i= 0; i<5; i++){

		if(row[0][i]==col)
		  {
		  	r1++;
            $scope.rowOne = 5-r1;
          }
		else if(row[1][i]== col) // && row[0][1] == arr[i] && row[0][2] == arr[i] )// && row[i][3] == arr[i] && row[i][4]== arr[i] )
		{
		  r2++;
	      $scope.rowTwo = 5-r2;

        }
		else if(row[2][i]== col)
		{
			r3++;
			 $scope.rowThree = 4-r3;
		}
		else if(row[3][i]== col)
		{
			r4++;
			$scope.rowFour = 5-r4;
		}
		else if(row[4][i]== col)
		{
			r5++;
			$scope.rowFive= 5-r5;

		}


		 if(r1==5 ||  r2==5 || r3 == 4 || r4 ==5 || r5 ==5){
			 console.log("Bingo");
			 bingoAlert();
			 r1=0;
             r2=0;
             r3=0;
             r4=0;
             r5=0;
		 }

		if(row[i][0]==col)
		  {
		  	c1++;
            $scope.colOne=5-c1;
		  }
		else if(row[i][1]== col) // && row[0][1] == arr[i] && row[0][2] == arr[i] )// && row[i][3] == arr[i] && row[i][4]== arr[i] )
		   {
		    c2++;
            $scope.colTwo=5-c2;
		   }
		else if(row[i][2]== col)
		   {
             c3++;
             $scope.colThree=4-c3;
		   }
		else if(row[i][3]== col){
		    c4++;
		    $scope.colFour=5-c4;
		  }
		else if(row[i][4]== col)
		   {
		   	c5++;
             $scope.colFive=5-c5;
		   }

		 if(c1==5 ||  c2==5 || c3 == 4 || c4 == 5 || c5 ==5){
			 console.log("Bingo");
			 bingoAlert();
			 c1=0;
             c2=0;
             c3=0;
             c4=0;
             c5=0;
		 }

	   }



	 function correct(){
		 setBack();
	 }
    $timeout(correct, 500);
	function setBack(){
		$scope.matched="";
	}

   }

	else{
		console.log("Incorrect match");
		 $scope.matched="Try Again Homie!";
		//$scope.match="Sorry, Try Again Homie!"
        document.getElementById(id).style.background = "red";

		function wrong(){
		   setNormal();
		}

	  $timeout(wrong, 500);

	function setNormal(){
		    $scope.matched="";
            document.getElementById(id).style.background = "url('gifs/" + gifLink + "')";
			document.getElementById(id).style.backgroundRepeat = "no-repeat";
			document.getElementById(id).style.backgroundSize = "cover";
			}


	}



}



function bingoAlert(){

 var pop = document.createElement('div');
 pop.setAttribute('id', 'pop-up');


 var pCont= document.createElement('div');
 pCont.setAttribute('class', 'win');
 pop.appendChild(pCont);


 var winMsg= document.createElement('h1');
 winMsg.setAttribute('class', 'winner')
 winMsg.innerHTML="Bingo Biatchhhh!";
 pCont.appendChild(winMsg);

 var msg = document.createElement('h3');
 msg.setAttribute('class', 'msgWin');
 msg.innerHTML="Congratulations! You Won! You're a lyrical connoisseur!";
 pCont.appendChild(msg);

 var ng= document.getElementById('newGame');
 var ex= document.getElementById('exit');

 var gmeCtrl = document.createElement('div');
 gmeCtrl.setAttribute('id', 'gmeCtrl');
 gmeCtrl.appendChild(ng);
 gmeCtrl.appendChild(ex);
 pCont.appendChild(gmeCtrl);

 var bing = document.getElementById('body');
 bing.appendChild(pop);
}



 });
