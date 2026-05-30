// ==========================================
// IELTS VOCABULARY & IDIOMS DATABASE
// ==========================================
// The game will randomly select 5 items from each array every time you play, 
// providing endless replayability for IELTS practice.

const s1Data = [
    { id: "i1", t: "A drop in the ocean", d: "A very small amount compared to what is needed." },
    { id: "i2", t: "A blessing in disguise", d: "A good thing that seemed bad at first." },
    { id: "i3", t: "Boils down to", d: "The essential or most important reason is..." },
    { id: "i4", t: "Running on fumes", d: "Operating with almost zero energy or resources left." },
    { id: "i5", t: "Foot the bill", d: "To pay for everything, especially something expensive." },
    { id: "i6", t: "Take with a pinch of salt", d: "To not completely believe something that you are told." },
    { id: "i7", t: "Learn the ropes", d: "To learn the basics of how to do a job or task." },
    { id: "i8", t: "Off the beaten track", d: "An isolated place, away from where people usually go." },
    { id: "i9", t: "Brush up on", d: "To improve your knowledge or skill in something." },
    { id: "i10", t: "Turn a blind eye", d: "To ignore something that you know is wrong." },
    { id: "i11", t: "A grey area", d: "An unclear situation that does not have strict rules." },
    { id: "i12", t: "Weigh up the pros and cons", d: "To consider the advantages and disadvantages." },
    { id: "i13", t: "Beat around the bush", d: "To avoid talking about what is important." },
    { id: "i14", t: "Bite the bullet", d: "To force yourself to do something unpleasant or difficult." },
    { id: "i15", t: "The elephant in the room", d: "An obvious problem that people do not want to talk about." },
    { id: "i16", t: "Cutting edge", d: "The most modern stage of development in a particular type of work." },
    { id: "i17", t: "Devil's advocate", d: "To pretend to disagree with someone in order to start an argument or discussion." },
    { id: "i18", t: "Miss the boat", d: "To lose an opportunity to do something by being slow to act." },
    { id: "i19", t: "By the skin of your teeth", d: "To only just succeed in doing something." },
    { id: "i20", t: "A double-edged sword", d: "Something that has both positive and negative consequences." },
    { id: "i21", t: "See eye to eye", d: "To completely agree with someone." },
    { id: "i22", t: "Tip of the iceberg", d: "A small, visible part of a much larger problem." }
];
// (Ad

const s2Data = [
    {w: "Pristine", s: "Unspoiled"}, 
    {w: "Lucrative", s: "Profitable"}, 
    {w: "Pragmatic", s: "Practical"}, 
    {w: "Pervasive", s: "Ubiquitous"}, 
    {w: "Exhilarating", s: "Thrilling"},
    {w: "Detrimental", s: "Harmful"},
    {w: "Indispensable", s: "Crucial"},
    {w: "Alleviate", s: "Mitigate"},
    {w: "Inevitable", s: "Unavoidable"},
    {w: "Ambiguous", s: "Unclear"},
    {w: "Trivial", s: "Insignificant"},
    {w: "Profound", s: "Deep/Significant"},
    {w: "Ameliorate", s: "Improve"}, 
    {w: "Exacerbate", s: "Worsen"}, 
    {w: "Meticulous", s: "Careful"}, 
    {w: "Obsolete", s: "Outdated"}, 
    {w: "Ephemeral", s: "Fleeting"},
    {w: "Prolific", s: "Productive"},
    {w: "Viable", s: "Feasible"},
    {w: "Substantiate", s: "Prove"},
    {w: "Fluctuate", s: "Vary"},
    {w: "Unprecedented", s: "Unparalleled"},
    {w: "Abundant", s: "Plentiful"},
    {w: "Cognitive", s: "Mental"}
];

const s3Data = [
    {q: "The news outlet tried to ___ the minor crash to get more clicks.", a: "sensationalize", o: ["scrutinize","sensationalize","incentivize"]},
    {q: "Urban ___ is a major issue for commuters travelling to the city center.", a: "gridlock", o: ["itinerary","gridlock","remuneration"]},
    {q: "Climbing to the highest rank in the industry is a grueling and ___ task.", a: "arduous", o: ["arduous","lucrative","impartial"]},
    {q: "Judges must remain ___ when scoring international teams.", a: "impartial", o: ["pervasive","impartial","frivolous"]},
    {q: "Spending excessive amounts on cosmetic items is a ___ habit.", a: "frivolous", o: ["frivolous","pragmatic","pervasive"]},
    {q: "The government must implement strict measures to ___ the housing crisis.", a: "tackle", o: ["tackle","provoke","succumb"]},
    {q: "There is a ___ difference between the traditional and modern approaches.", a: "fundamental", o: ["trivial","fundamental","superficial"]},
    {q: "Technology has completely ___ the way we communicate globally.", a: "revolutionized", o: ["diminished","revolutionized","stagnated"]},
    {q: "The graph illustrates that the crime rate ___ wildly between 2010 and 2015.", a: "fluctuated", o: ["fluctuated", "stagnated", "ameliorated"]},
    {q: "It is ___ that governments take immediate action against climate change.", a: "imperative", o: ["imperative", "trivial", "frivolous"]},
    {q: "The researcher provided ample evidence to ___ her controversial hypothesis.", a: "substantiate", o: ["substantiate", "mitigate", "exacerbate"]},
    {q: "A sedentary lifestyle has a highly ___ impact on long-term cardiovascular health.", a: "detrimental", o: ["lucrative", "detrimental", "prolific"]},
    {q: "___ the clear advantages of remote work, some managers still prefer in-office teams.", a: "Notwithstanding", o: ["Furthermore", "Consequently", "Notwithstanding"]},
    {q: "The invention of the smartphone was a major ___ shift in human communication.", a: "paradigm", o: ["paradigm", "hindrance", "catalyst"]},
    {q: "Many traditional farming methods have been rendered ___ by modern machinery.", a: "obsolete", o: ["pervasive", "obsolete", "pragmatic"]}
];

const s4Text = `
    For many teenagers, the transition from casual gaming to competitive esports is an <strong>arduous</strong> journey. Moving away from the <strong>frivolous</strong> hobbyist mindset, aspiring players must adopt a <strong>pragmatic</strong> approach to their training itinerary. The esports industry has become highly <strong>lucrative</strong>, but getting noticed requires players to navigate a <strong>pervasive</strong> social media landscape. Rather than remaining in an <strong>echo chamber</strong> of their own fans, players must <strong>scrutinize</strong> strategies from international teams. 
    <br><br>
    Tournaments often take teams completely <strong>off the beaten track</strong>. However, hitting the road is sometimes overshadowed by logistical nightmares, such as urban <strong>gridlock</strong>. When a team finally arrives, often <strong>running on fumes</strong>, they must perform instantly. Moreover, acquiring the best hardware can <strong>cost an arm and a leg</strong>. Unless a player secures a major sponsor to <strong>foot the bill</strong>, the financial burden makes it difficult to <strong>make ends meet</strong>. Despite the <strong>detrimental</strong> impact on their sleep schedule, the experience remains thoroughly <strong>exhilarating</strong>.
`;

const s4Data = [
    {q: "Esports players need a practical and realistic approach to their training.", a: "T"},
    {q: "Players should only listen to the opinions and praises of their own fans.", a: "F"},
    {q: "Tournaments always take place in major, well-known capital cities.", a: "NG"},
    {q: "Acquiring top-tier competitive hardware is extremely expensive.", a: "T"},
    {q: "A lack of sleep generally improves the reaction times of esports players.", a: "F"},
    {q: "Sponsors always pay for all travel expenses of amateur players.", a: "NG"},
    {q: "Esports has developed into a highly profitable industry.", a: "T"}
];

const s5Pairs = [
    {id:1, t:"Echo Chamber"}, {id:1, t:"Only encountering your own opinions"},
    {id:2, t:"Make ends meet"}, {id:2, t:"Earn just enough for basic expenses"},
    {id:3, t:"Hot off the press"}, {id:3, t:"Freshly released news or info"},
    {id:4, t:"Scrutinize"}, {id:4, t:"To examine something very closely"},
    {id:5, t:"Take for granted"}, {id:5, t:"Fail to properly appreciate someone/something"},
    {id:6, t:"Step up to the plate"}, {id:6, t:"Take responsibility for doing something"},
    {id:7, t:"Deteriorate"}, {id:7, t:"Become progressively worse"},
    {id:8, t:"Look down on"}, {id:8, t:"To think you are better than someone"},
    {id:9, t:"Carry out"}, {id:9, t:"To conduct or perform an experiment/research"},
    {id:10, t:"Look into"}, {id:10, t:"To investigate a situation or problem"},
    {id:11, t:"Bring up"}, {id:11, t:"To start discussing a subject"},
    {id:12, t:"Rule out"}, {id:12, t:"To eliminate something as a possibility"},
    {id:13, t:"Come across"}, {id:13, t:"To find something by chance"},
    {id:14, t:"Boil down to"}, {id:14, t:"To be the main or most important result of something"},
    {id:15, t:"Phase out"}, {id:15, t:"To gradually stop using something"},
    {id:16, t:"Cut down on"}, {id:16, t:"To reduce the amount or number of something"}
];

const s6Data = [
    "REMUNERATION", "ITINERARY", "SCRUTINIZE", "UBIQUITOUS", 
    "ACCOMMODATION", "CONSCIENTIOUS", "SUSCEPTIBLE", "ENVIRONMENT",
    "GOVERNMENT", "TECHNOLOGY", "KNOWLEDGE", "ENTREPRENEUR",
    "HINDRANCE", "PARADIGM", "CATALYST", "PREVALENT", 
    "QUESTIONNAIRE", "ACCOMMODATE", "DETERIORATE", "MAINTENANCE",
    "FLUCTUATION", "IMPLEMENTATION", "CONSEQUENCE", "SUSTAINABLE"
];

const s7Data = [
    {q: "Which idiom means 'to start a process or activity'?", o:["Learn the ropes", "Get the ball rolling"], a:1},
    {q: "Which word is a formal synonym for 'route' or 'travel plan'?", o:["Itinerary", "Gridlock"], a:0},
    {q: "Taking news with a 'pinch of salt' implies...", o:["Skepticism", "Total Belief"], a:0},
    {q: "'Ubiquitous' means that something is...", o:["Found everywhere", "Extremely rare"], a:0},
    {q: "Which phrasal verb means 'to tolerate'?", o:["Put up with", "Look forward to"], a:0},
    {q: "If an issue is a 'grey area', it is...", o:["Clearly defined", "Unclear and ambiguous"], a:1},
    {q: "To 'mitigate' a problem means to...", o:["Make it worse", "Make it less severe"], a:1},
    {q: "Which word means 'crucial' or 'absolutely necessary'?", o:["Indispensable", "Trivial"], a:0},
    {q: "If an argument is 'compelling', it is...", o:["Weak and illogical", "Strong and convincing"], a:1},
    {q: "Which verb correctly collocates with 'research'?", o:["Conduct research", "Make research"], a:0},
    {q: "What is the meaning of 'to turn a blind eye'?", o:["To go blind", "To actively ignore something wrong"], a:1},
    {q: "A 'catalyst' is something that...", o:["Slows a process down", "Causes a process to speed up/begin"], a:1},
    {q: "Which word means 'existing everywhere at the same time'?", o:["Ubiquitous", "Ephemeral"], a:0},
    {q: "If you 'miss the boat', you...", o:["Are late for a ferry", "Lose an opportunity by being slow"], a:1},
    {q: "Which phrase means to 'weigh up the pros and cons'?", o:["Evaluate advantages and disadvantages", "Complain about a difficult situation"], a:0},
    {q: "To 'mitigate' environmental damage means to...", o:["Make it less severe", "Study it closely"], a:0}
];