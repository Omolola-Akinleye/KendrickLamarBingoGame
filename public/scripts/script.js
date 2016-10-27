 
 var app = angular.module('lingoApp', []);
 
 app.controller('lingoController', function($scope){
	
	// json array of song objects
    $scope.songs= [
	
	//1.Swimming pool
	{
		id:1,
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
		mlyric:'Kunta Black man taking no losses, oh yeah ',
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
		clyric: "Bodies on top of bodies, IV's on top of IV's Obviously the coroner between the sheets like the Isleys",
		inlyric:"Bodies on top of bodies, IV's on top of IV's  ",
		mlyric:'Obviously the coroner between the sheets like the Isleys',
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
		inlyric:" Wouldn't you know We been hurt, been down before Nigga, when our pride was low Lookin' at the world like, 'Where do we go?' Nigga, and we hate po-po Wanna kill us dead in the street fo sho",
		mlyric:" I'm at the preacher's door My knees gettin' weak, and my gun might blow But we gon' be alright",
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
    title:"Bitch, Don't Kill Vibe",
	album: 'Good Kid M.A.A.D City',
	img:'bitch.jpg',
	gif: 'bitch.gif',
	clyric: "I got my drink, I got my music I would share it but today I'm yelling Bitch don't kill my vibe, bitch don't kill my vibe Bitch don't kill my vibe, bitch don't kill my vibe",
	inlyric:"I got my drink, I got my music I would share it but today I'm yelling ",
	mlyric:" Bitch don't kill my vibe, bitch don't kill my vibe Bitch don't kill my vibe, bitch don't kill my vibe",
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
	clyric: "He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect' He said 'Well nigga, then show me how it all makes sense 'Go figure, mothafucka, every verse is a brick, your son dope, nigga'",
	inlyric:" He said 'Son, how come you think you be my connect?' I said 'Pops, your ass is washed up, with all due respect' He said 'Well nigga, then show me how it all makes sense ",
	mlyric:"  'Go figure, mothafucka, every verse is a brick, our son dope, nigga'",
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
	inlyric:"I'm tryna find myself, I'm searching deep for Kendrick Lamar I read about Napoleon Hill and try to know God They say he the key to my blessings, and if I speak the good Into existence",
	mlyric:" that instant my dreams will unlock Money flow like water, I'll just wait at the dock",
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
}

];
 });