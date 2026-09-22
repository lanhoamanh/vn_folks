// Data for Vietnamese folklore topics and stories

const VNFOLKS_DATA = {
  explore: [
    {
      id: "sleep-paralysis",
      title: "Sleep Paralysis (Bóng Đè)",
      vietnameseName: "Hiện Tượng Bóng Đè",
      subtitle: "The nocturnal shadow pressing upon the sleeper's chest.",
      summary: "In Vietnamese folk culture, waking up unable to move while sensing a suffocating presence on one's chest has long been attributed to 'Bóng Đè'—an unseen entity or restless shadow spirit pinning the sleeper down.",
      badge: "Folklore & Science",
      category: "mind-body",
      image: "assets/images/explore-sleep-paralysis.jpg",
      articleBottomImage: "https://uploads.nguoidothi.net.vn/content/5fe4aa95-542b-40cf-b652-3809dcf33f2d.jpg",
      belief: {
        heading: "THE BELIEF",
        content: "In Vietnamese folk tradition, 'Bóng Đè' (literally 'pressed by a shadow') refers to a terrifying night experience. A person wakes up in the middle of the night fully conscious, but finds their body completely frozen, unable to speak or move, feeling a heavy weight crushing their chest. Traditional stories often describe an unseen shadowy figure sitting on the sleeper or standing near the bed."
      },
      culturalStory: {
        heading: "THE CULTURAL STORY",
        content: "Folk remedies across rural Vietnam reflected the belief that wandering spirits or unsettled entities caused this phenomenon. To keep Bóng Đè away, elders often placed a kitchen knife, an iron nail, or a head of garlic under the pillow, believing iron and sharp smells repelled bad spirits. Others recited prayers or hung peach wood branches over doors."
      },
      historicalContext: {
        heading: "HISTORICAL CONTEXT",
        content: "Stories of night suffocation appear in folklore around the world (like the 'Old Hag' in old English stories). In ancient agrarian communities, hard physical labor was part of daily life. Without modern science, people naturally explained sudden body paralysis in the dark through stories of unseen spirits, creating rituals to help feel safe."
      },
      scienceSays: {
        heading: "WHAT SCIENCE SAYS",
        content: "Modern science calls this experience Sleep Paralysis. It happens during a mix-up between dreaming (REM sleep) and waking up. During REM sleep, your brain naturally relaxes your muscles so you don't physically act out your dreams.\n\nIf you wake up before your body switches out of this state, your mind is alert but your muscles can't move yet. Your chest can feel tight because breathing is happening automatically. Because your brain is still partly dreaming, it can project shadowy shapes or sounds into the room. Common triggers include lack of sleep, sleeping on your back, stress, and irregular sleep routines."
      },
      whyItMatters: {
        heading: "WHY IT STILL MATTERS TODAY",
        content: "Sleep paralysis shows how people turned scary bodily experiences into cultural stories. Far from being silly superstitions, traditions like Bóng Đè gave people practical ways to cope with fear. Understanding both the science and the folklore helps us appreciate how our ancestors tried to make sense of the scary space between sleep and waking up."
      },
      sources: [
        "American Academy of Sleep Medicine (AASM) - Sleep Disorders Guide",
        "Sharpless, B. A., & Doghramji, K. E. (2015). Sleep Paralysis: Historical and Medical Perspectives.",
        "Nguyễn Đổng Chi (1965). Kho tàng truyện cổ tích Việt Nam."
      ]
    },
    {
      id: "eclipses",
      title: "Solar & Lunar Eclipses",
      vietnameseName: "Nhật Thực & Nguyệt Thực",
      subtitle: "The celestial battle when darkness swallowed the sun and moon.",
      summary: "Across early Vietnamese oral traditions, eclipses were seen as cosmic emergencies where celestial monsters swallowed the heavenly luminaries—spurring villagers to bang brass mortars and drums to rescue the sky.",
      badge: "Astronomy & Myths",
      category: "celestial",
      image: "assets/images/explore-eclipses.jpg",
      articleBottomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLB0mqpXQxCqNmiJ0iwVWCR9lT5mw6QpDUeg3FhLnhi2xWK8lHGyrvv8U&s=10",
      belief: {
        heading: "THE BELIEF",
        content: "When the sun darkened in the middle of the day or the full moon turned blood-red at night, traditional Vietnamese folklore explained it with a scary myth: a huge sky beast—often described as a giant heavenly toad (Cóc) or sky dog (Chó trời)—was eating the sun or moon."
      },
      culturalStory: {
        heading: "THE CULTURAL STORY",
        content: "Old stories describe how entire villages worked together during an eclipse. People ran out with metal pots, pestles, and drums, banging them loudly into the night sky. The loud noise was supposed to scare the sky beast into spitting the sun or moon back out.\n\nThis connects with famous tales like 'Con cóc là cậu ông Trời' (The Toad is Heaven's Uncle), where even a small toad had the power to demand rain from Heaven."
      },
      historicalContext: {
        heading: "HISTORICAL CONTEXT",
        content: "For a society built on farming rice, the sun and moon were everything. The moon calendar guided planting and harvesting, while the sun warmed the crops. Any sudden change in the sky felt like a threat to survival. Making noise during eclipses was a common tradition across many ancient farming cultures to deal with panic together."
      },
      scienceSays: {
        heading: "WHAT SCIENCE SAYS",
        content: "Modern astronomy explains eclipses through the movement of the Earth, Moon, and Sun in space:\n\nA Solar Eclipse happens when the Moon passes directly between the Earth and the Sun, casting its shadow on Earth. A Lunar Eclipse happens when the Earth gets between the Sun and the Moon, blocking sunlight from reaching the lunar surface. The reddish 'blood moon' color happens because of Rayleigh scattering—the same reason sunsets look red. Earth's atmosphere filters out blue light and lets red light bend onto the Moon."
      },
      whyItMatters: {
        heading: "WHY IT STILL MATTERS TODAY",
        content: "Looking at ancient eclipse myths alongside modern space science shows how humans always try to restore balance when faced with scary sky events. Knowing how eclipses mathematically work doesn't take away the wonder—it just deepens our appreciation for sky watching."
      },
      sources: [
        "NASA Eclipse Web Site",
        "Toan Ánh (1969). Nếp Cũ: Tín Ngưỡng Việt Nam.",
        "Nguyễn Từ Chi (1996). Góp phần nghiên cứu văn hóa."
      ]
    },
    {
      id: "animal-omens",
      title: "Animal Omens & Instincts",
      vietnameseName: "Điềm Báo Từ Động Vật",
      subtitle: "The barn owl's cry, barking at empty spaces, and serpent omens.",
      summary: "From the ominous call of the barn owl to dogs barking at vacant thresholds, traditional folklore interpreted animal behaviors as prophecies—blending genuine animal sensory biology with human confirmation bias.",
      badge: "Animals & Psychology",
      category: "nature",
      image: "assets/images/explore-animal-omens.jpg",
      articleBottomImage: "https://media.chuabavang.com/files/content/2025/01/20/chim-lon-0843.jpg",
      belief: {
        heading: "THE BELIEF",
        content: "Vietnamese folk culture has many stories about animal behavior as omens (điềm báo). The scary call of a barn owl (chim lợn) flying over a village at night was feared as a sign of sickness or bad luck. A dog barking at an empty corner was believed to see invisible spirits, and a snake crossing your path could be an ancestral warning."
      },
      culturalStory: {
        heading: "THE CULTURAL STORY",
        content: "Village elders taught kids to pay close attention to animals around the village. If an owl perched on a roof and cried out, people burned incense to protect the house. On the other hand, swallows (chim én) nesting under the roof meant good luck and peace for the family."
      },
      historicalContext: {
        heading: "HISTORICAL CONTEXT",
        content: "In old Vietnam, villages were right next to dense forests and rivers. People lived very close to wildlife. Because animals often spot storms or danger before humans can, villagers turned real animal warnings into spiritual stories passed down through generations."
      },
      scienceSays: {
        heading: "WHAT SCIENCE SAYS",
        content: "Science shows that animals have senses far beyond human ability:\n\n1. <strong>Barn Owls:</strong> Owls have super sensitive hearing and hunting instincts. They hunt rodents and insects that gather around farms or decaying matter. In old villages without modern medicine, subtle environmental changes might draw pests, which in turn attracted owls.\n\n2. <strong>Dog Senses:</strong> Dogs hear high frequencies up to 45,000 Hz (humans only reach 20,000 Hz) and have an incredible sense of smell. A dog barking at an 'empty' wall is often hearing tiny insects behind wood or small animals underground.\n\n3. <strong>Confirmation Bias:</strong> We remember the one spooky night an owl cried before bad news happened, but forget the hundreds of quiet nights it cried with nothing happening."
      },
      whyItMatters: {
        heading: "WHY IT STILL MATTERS TODAY",
        content: "Animal omen stories show how closely connected our ancestors were to nature. Even though we understand animal senses better today, these stories remind us to pay attention to the environment around us."
      },
      sources: [
        "Taylor, I. (2004). Barn Owls: Ecology and Behavior.",
        "Miklósi, Á. (2015). Dog Behaviour, Evolution, and Cognition.",
        "Toan Ánh (1968). Phong Tục Việt Nam."
      ]
    },
    {
      id: "hungry-ghosts",
      title: "Hungry Ghosts & Wandering Souls",
      vietnameseName: "Cô Hồn & Xá Tội Vong Nhân",
      subtitle: "The seventh lunar month, roadside offerings, and collective remembrance.",
      summary: "During the Seventh Lunar Month, Vietnamese tradition welcomes the pardon of wandering souls ('Cô Hồn')—balancing ancient Buddhist compassion, ancestral respect, and the communal processing of unresolved death.",
      badge: "Culture & Memory",
      category: "spiritual",
      image: "assets/images/explore-hungry-ghosts.jpg",
      articleBottomImage: "https://sohanews.sohacdn.com/160588918557773824/2024/8/4/1gnbjrc1qdexukbfsmvioaq-0042229-16325729-1722765650903-1722765651278785857785.jpeg",
      belief: {
        heading: "THE BELIEF",
        content: "In Vietnamese spiritual tradition, the Seventh Lunar Month is when the underworld gates open, allowing wandering spirits to visit the living world. While ancestors return to family altars for Vu Lan, there are also 'Cô Hồn' (wandering souls)—spirits who died far from home with no family left to offer incense for them."
      },
      culturalStory: {
        heading: "THE CULTURAL STORY",
        content: "To comfort these lost spirits, families set up small altars outside on street corners during 'Xá Tội Vong Nhân'. Offerings include light rice porridge (cháo loãng), sweet potatoes, popcorn, and paper clothes.\n\nAfter prayers, local kids join in 'cướp cô hồn'—a fun tradition where kids gather the snacks, symbolically sharing food and bringing energy back to the neighborhood."
      },
      historicalContext: {
        heading: "HISTORICAL CONTEXT",
        content: "Vietnam's history faced many floods, storms, and wars where people lost loved ones away from home. Famous poems like Nguyễn Du's 'Văn Chiêu Hồn' expressed deep compassion for forgotten souls, giving communities a shared way to honor everyone who passed away."
      },
      scienceSays: {
        heading: "WHAT SCIENCE SAYS",
        content: "From psychology and sociology perspectives, the Hungry Ghost month helps people process loss and build community:\n\n1. <strong>Healing Grief:</strong> Having a annual ritual helps families feel closure for loved ones lost long ago.\n\n2. <strong>Community Kindness:</strong> The ritual encourages sharing food with strangers and helping people in need, building trust across neighborhoods.\n\n3. <strong>Hygiene Practices:</strong> Cleaning houses and yards before rituals helped keep living spaces tidy during humid monsoon months."
      },
      whyItMatters: {
        heading: "WHY IT STILL MATTERS TODAY",
        content: "The Seventh Lunar Month is really about kindness and empathy. Taking time to remember those who have nobody left to care for them is a timeless lesson in compassion."
      },
      sources: [
        "Nguyễn Du (c. 1800). Văn Chiêu Hồn.",
        "Phan Kế Bính (1915). Việt Nam Phong Tục.",
        "Cadière, L. (1958). Croyances et pratiques des Viêtnamiens."
      ]
    },
    {
      id: "astronomy-mythology",
      title: "Astronomy in Vietnamese Mythology",
      vietnameseName: "Thiên Văn Trong Thần Thoại Việt",
      subtitle: "The Bronze Drum starburst, Weaver and Cowherd, and agricultural sky-clocks.",
      summary: "Long before optical telescopes, ancient Vietnamese ancestors encoded deep astronomical cycles into myths of solar maidens, lunar banyans, and cosmic monsoon rains.",
      badge: "History & Astronomy",
      category: "celestial",
      image: "assets/images/explore-astronomy.jpg",
      articleBottomImage: "https://lh3.googleusercontent.com/sUy3TxVB2t75ejaQ42GAdD1h1koNwkIyHQ7YKKnpOc9zk1dIH84tfWotfRnjiz3ji51m9sCAOOydSs9nFvHONUHZT13HK71L1Q=rw-w1200",
      belief: {
        heading: "THE BELIEF",
        content: "Early Vietnamese myths viewed the sky as a lively world ruled by Ông Trời (Heaven). The Sun and Moon were described as royal sky maidens riding glowing carriages across the heavens. How fast day turned into night depended on whether their escorts were moving quickly or taking a slow walk."
      },
      culturalStory: {
        heading: "THE CULTURAL STORY",
        content: "Other popular sky stories include 'Chú Cuội ngồi gốc cây đa' (the man sitting under the lunar banyan tree) and 'Ngưu Lang - Chức Nữ' (the Cowherd and Weaver Maiden). In Vietnamese lore, the lovers meet once a year in the 7th lunar month across a bridge of birds, causing the gentle seasonal rain known as 'Mưa Ngâu'."
      },
      historicalContext: {
        heading: "HISTORICAL CONTEXT",
        content: "Ancient Dong Son bronze drums (over 2,000 years old) feature a starburst pattern right in the center, surrounded by birds and dancers. Archaeologists believe this shows early farmers tracked the sun and seasons to know when to plant rice."
      },
      scienceSays: {
        heading: "WHAT SCIENCE SAYS",
        content: "Science shows how ancient sky myths matched real weather patterns:\n\n1. <strong>Monsoon Rains:</strong> The 'Mưa Ngâu' rains in August match real seasonal weather shifts across Northern Vietnam.\n\n2. <strong>Star Tracking:</strong> Stars like Altair (the Cowherd) and Vega (the Weaver Maiden) shift positions across the Milky Way, helping early farmers tell time at night.\n\n3. <strong>Shapes on the Moon:</strong> Seeing Chú Cuội on the moon is an example of pareidolia—our brain finding familiar human shapes in dark lunar plains formed by ancient lava."
      },
      whyItMatters: {
        heading: "WHY IT STILL MATTERS TODAY",
        content: "Vietnamese sky myths show how curiosity began. Storytellers looked up at the stars and connected natural cycles with human feelings, showing that storytelling and science share the same spark."
      },
      sources: [
        "Hà Văn Tấn (1994). Văn hóa Đông Sơn ở Việt Nam.",
        "Nguyễn Đổng Chi (1957). Thần thoại Việt Nam.",
        "Kelley, D. H., & Milone, E. F. (2011). Exploring Ancient Skies."
      ]
    },
    {
      id: "tet-traditions",
      title: "Tết Nguyên Đán: Rituals & Renewal",
      vietnameseName: "Phong Tục & Tín Ngưỡng Ngày Tết",
      subtitle: "The tall bamboo Cây Nêu, Kitchen Gods, and taboos of the threshold.",
      summary: "Tết Nguyên Đán represents far more than a calendar turnover—it is a spiritual reset rooted in ancient agrarian survival, domestic hygiene, and protective boundary lore.",
      badge: "Traditions & Seasons",
      category: "tradition",
      image: "assets/images/explore-tet.jpg",
      articleBottomImage: "https://image3.luatvietnam.vn/uploaded/images/original/2026/02/04/thoi-quen-vi-pham-ngay-tet-can-tranh_0402170436.jpg",
      belief: {
        heading: "THE BELIEF",
        content: "Tết Nguyên Đán (Lunar New Year) is the most important holiday in Vietnamese culture. It marks a fresh start for the family and year ahead. It starts when Ông Công Ông Táo (The Kitchen Gods) ride golden carps up to Heaven on the 23rd of the last lunar month to report on the household."
      },
      culturalStory: {
        heading: "THE CULTURAL STORY",
        content: "To protect the home while the Kitchen Gods are away, families put up a 'Cây Nêu'—a tall bamboo pole decorated with red banners and small wind chimes. Traditional customs include not sweeping the floor on the first day of Tết (so fortune isn't swept away) and paying off debts before the new year starts."
      },
      historicalContext: {
        heading: "HISTORICAL CONTEXT",
        content: "In old agricultural times, late winter was a transitional season before spring rice planting. Tết customs brought communities together, shared food, and gave everyone rest before heavy farm work started."
      },
      scienceSays: {
        heading: "WHAT SCIENCE SAYS",
        content: "Tết customs served practical health and social purposes:\n\n1. <strong>Spring Cleaning:</strong> Cleaning out the house removed dust and stagnant water right before humid spring weather.\n\n2. <strong>Fresh Start:</strong> Clearing debts and starting fresh lowers stress and helps people start the year feeling positive.\n\n3. <strong>Weather Watching:</strong> Wind chimes on the bamboo pole helped farmers gauge spring breezes for crop planning."
      },
      whyItMatters: {
        heading: "WHY IT STILL MATTERS TODAY",
        content: "Tết combines family traditions with fresh beginnings. Traditions like gathering together, cooking traditional food, and wishing good health remind us of what matters most."
      },
      sources: [
        "Toan Ánh (1974). Nếp Cũ: Hội Hè Đình Đám.",
        "Phan Kế Bính (1915). Việt Nam Phong Tục.",
        "Dai, H., Milkman, K. L., & Riis, J. (2014). The Fresh Start Effect."
      ]
    }
  ],

  stories: [
    {
      id: "ong-ba-bi",
      name: "Ông Ba Bị",
      vietnameseName: "Ông Ba Bị (Chín Quai, Mười Hai Con Mắt)",
      epithet: "The Three-Sacked Boogeyman",
      category: "warnings",
      region: "Northern & Coastal Central Vietnam",
      atmosphericSummary: "A tall shadowy figure carrying three big sacks, mentioned by parents to warn kids not to wander alone after dark.",
      image: "assets/images/story-ong-ba-bi.jpg",
      articleBottomImage: "https://media.techz.vn/media2019/upload2019/2024/09/30/thumb_30092024161820.jpg",
      legend: {
        heading: "THE LEGEND",
        content: "In Vietnamese families, kids often heard: 'Bớt khóc đi, không thì Ông Ba Bị bắt bây giờ!' (Stop crying or Ông Ba Bị will catch you!). Old nursery rhymes describe him with 'Ba bị, chín quai, mười hai con mắt' (Three sacks, nine handles, twelve eyes). He was said to walk village paths at dusk looking for misbehaving kids."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "Folklorists say this figure came from a mix of local history and rhymes:\n\n1. <strong>Woven Bags:</strong> The phrase 'Ba bị, chín quai, mười hai con mắt' originally described woven storage bags. Three bags ('ba bị') had three handles each ('chín quai'), and four weave holes ('mười hai con mắt'). Over time, kids imagined it as a monster with twelve eyes!\n\n2. <strong>Coastal Safety:</strong> In coastal towns, old warnings reminded kids not to wander off near strange boats or dark roads after dusk."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "In rural villages with rivers and dark woods, parents didn't have fences. Stories of Ông Ba Bị worked as a quick safety warning to keep kids close to home at night."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "The story reflects classic bedtime safety warnings used around the world to keep children safe from real-world dangers after dark."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Similar to 'Ông Kẹ' in Vietnam, or 'El Hombre del Saco' (The Sack Man) in Spanish stories."
      }
    },
    {
      id: "hungry-ghosts-story",
      name: "Ma Đói (Hungry Ghosts)",
      vietnameseName: "Ma Đói & Cô Hồn Lang Thang",
      epithet: "The Unconsecrated Starved Wanderers",
      category: "spirits",
      region: "Pan-Vietnamese",
      atmosphericSummary: "Restless spirits seeking food and remembrance during the seventh lunar month.",
      image: "assets/images/story-hungry-ghosts.jpg",
      articleBottomImage: "https://daophatmuonmau.com/wp-content/uploads/2021/07/Sam-hoi-can-phai-vao-luc-con-song-moi-duoc.jpg",
      legend: {
        heading: "THE LEGEND",
        content: "Unlike family ancestors, Ma Đói (hungry ghosts) are believed to be spirits who passed away with no family left to remember them. Stories describe them drifting through village lanes looking for kindness and snacks during the Ghost Month."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "The tradition combines local beliefs with Buddhist and Taoist ghost month traditions. Across river delta regions, people left simple street offerings so all wandering spirits could feel welcomed."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "In traditional culture, honoring ancestors is very important. Annual roadside offerings of rice porridge and fruit offer temporary comfort to forgotten souls."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "This story highlights empathy and community care—making sure nobody is left out or forgotten."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Related to roadside offering customs and traditional poems of remembrance."
      }
    },
    {
      id: "ma-lon",
      name: "Ma Lon",
      vietnameseName: "Trò Chơi Ma Lon",
      epithet: "The Rolling Tin-Can Game",
      category: "rituals",
      region: "Rural & Suburban Vietnam",
      atmosphericSummary: "A midnight game where an empty tin can allegedly begins rolling and chasing players across the ground.",
      image: "assets/images/story-ma-lon.jpg",
      articleBottomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6dpzrxnV2X0P41NitoMw7qDiTEUVGxHbi8YseioMMCrkTr3A86OKR7XD&s=10",
      legend: {
        heading: "THE LEGEND",
        content: "Ma Lon is a famous Vietnamese youth urban legend. According to local lore, if teens put an empty milk tin can upside down on sand at midnight with incense, the tin can would start wobbling and rolling after players like a game of tag!"
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "This game became popular in the mid-1900s after canned condensed milk became common. In rural villages, playing games outdoors at night created lots of spooky fun and laughter among friends."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "Ma Lon functions like classic sleepover dare games (such as Bloody Mary in Western countries). It combines adrenaline, darkness, and playing tag with friends."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "The rolling can is usually explained by practical jokes, light wind catching lightweight hollow cans, or uneven ground made exciting by dark night adrenaline!"
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Similar to traditional pencil or bowl games played by kids around the world."
      }
    },
    {
      id: "the-restless-dead",
      name: "Vietnamese Vampire (Ma Cà Rồng & Phi Phông)",
      vietnameseName: "Ma Cà Rồng & Truyền Thuyết Phi Phông",
      epithet: "Highland Legend of the Nocturnal Wanderer",
      category: "spirits",
      region: "Northwestern Highlands",
      atmosphericSummary: "Highland legends about villagers who lived normally by day, but were believed to wander into the woods at night.",
      image: "assets/images/story-restless-dead.jpg",
      articleBottomImage: "https://i.ytimg.com/vi/A2BOOA-1gY0/maxresdefault.jpg",
      legend: {
        heading: "INTRODUCTION & FOLKLORE",
        content: "In Vietnam, 'Ma Cà Rồng' is often used to translate vampire stories. But long ago, scholar Lê Quý Đôn wrote in 1777 about local legends in northwestern mountain villages describing strange night wanderers called Phi Phông."
      },
      origins: {
        heading: "THE HIGHLAND LEGEND",
        content: "In mountain lore, Phi Phông lived normal lives during the day—farming and weaving alongside neighbors. But at night, stories claimed they wandered near misty rivers looking for fish or frogs before returning home by sunrise."
      },
      culturalContext: {
        heading: "CULTURAL DIFFERENCES",
        content: "Unlike Western movie vampires who are undead monsters, Phi Phông were living neighbors. Communities saw it as a strange sickness or bad charm rather than something evil, using peaceful protective leaves to keep spirits away."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "1. <strong>Sleepwalking:</strong> Severe sleepwalking led people to wander outdoors in their sleep without remembering it the next day.\n\n2. <strong>Swamp Lights:</strong> Eerie glowing lights over bogs were natural marsh gas emissions (will-o'-the-wisp)."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Connects with mountain village lore and local bedtime stories."
      }
    },
    {
      id: "quy-nhap-trang",
      name: "Quỷ Nhập Tràng",
      vietnameseName: "Hiện Tượng Quỷ Nhập Tràng",
      epithet: "The Corpse Reanimation Legend",
      category: "spirits",
      region: "Traditional Agrarian Villages",
      atmosphericSummary: "Folk tales about keep pets away from funeral mats so dark energies wouldn't startle the room.",
      image: "assets/images/story-quy-nhap-trang.jpg",
      articleBottomImage: "https://img.vietcetera.com/uploads/images/30-oct-2021/4-quynhaptrang-quy-mot-gio-1635574262242.jpg",
      legend: {
        heading: "THE LEGEND",
        content: "Quỷ Nhập Tràng is an old village story warning families to keep pets away from the room during a wake, fearing that an animal jumping past might startle people or disturb the atmosphere."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "Across village traditions, families stayed awake together throughout the night, lighting oil lamps and keeping quiet watch."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "This belief encouraged families to stay close and support one another throughout night wakes, showing respect for the deceased."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "Natural body reflexes or small muscle twitches after death combined with shadow lighting often startled nervous observers in dimly lit rooms."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Linked with traditional wake vigils ('thức tang')."
      }
    },
    {
      id: "ma-xo",
      name: "Ma Xó",
      vietnameseName: "Ma Xó (Ma Góc Nhà)",
      epithet: "The Corner Guardian Spirit",
      category: "rituals",
      region: "Upland & Border Regions",
      atmosphericSummary: "A traditional story about hidden guardian spirits kept in house corners to protect home wealth.",
      image: "assets/images/story-ma-xo.jpg",
      articleBottomImage: "https://i.redd.it/this-is-a-creepy-image-about-a-creature-name-ma-x%C3%B3-corner-v0-46zq43457ax81.jpg?width=720&format=pjpg&auto=webp&s=9becca7870ca6ead2f7c785933f6fb6f55c2ae6f",
      legend: {
        heading: "THE LEGEND",
        content: "Ma Xó refers to a story about guardian spirits kept in quiet house corners ('xó') to guard family belongings against thieves."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "In remote mountain houses without door locks or police, believing that a house had a guardian spirit warned off intruders."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "It acted as an early psychological lock—everyone in the village knew not to steal from neighbors."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "Reflects ancient ways communities protected home safety and warned against dishonesty."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Similar to guardian spirit lore found in traditional houses across Southeast Asia."
      }
    },
    {
      id: "ma-da",
      name: "Ma Da",
      vietnameseName: "Ma Da (Linh Hồn Vùng Nước)",
      epithet: "The Restless Water Spirit",
      category: "nature",
      region: "Red River & Mekong Delta Waterways",
      atmosphericSummary: "Restless water spirits said to hide near deep river bends to pull unsuspecting swimmers.",
      image: "assets/images/story-ma-da.jpg",
      articleBottomImage: "https://image.lag.vn/upload/news/19/07/06/su-that-ve-bai-hat-Bac-Kim-Thang__1__XUIB.jpg",
      legend: {
        heading: "THE LEGEND",
        content: "Ma Da are famous water spirits in Vietnamese folklore, said to hide under murky riverbanks or deep canals waiting to grab swimmers by the feet."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "Because Vietnam has so many rivers and canals, Ma Da stories exist in almost every province. Elders told these stories so kids wouldn't swim unsupervised."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "In farming villages near swift river currents, Ma Da warnings saved lives by keeping kids away from slippery banks and deep water."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "Real water hazards: deep whirlpools, sudden cold water shocks, underwater plants that tangle feet, and slippery mud banks."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Similar to water spirit stories worldwide, like the Japanese Kappa or Scottish Kelpie."
      }
    },
    {
      id: "linh-mieu",
      name: "Linh Miêu",
      vietnameseName: "Linh Miêu (Mèo Ma Ám)",
      epithet: "The Mysterious Black Cat",
      category: "nature",
      region: "Rural & Coastal Vietnam",
      atmosphericSummary: "A mysterious black cat in folklore associated with omens and night shadows.",
      image: "assets/images/story-linh-mieu.jpg",
      articleBottomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN7Fp4njhG69xR_K8ijr-N1GS0WbEzqHNpR2un4QrAjNMwlZawU54L5Y&s=10",
      legend: {
        heading: "THE LEGEND",
        content: "Linh Miêu is a mysterious black cat in Vietnamese lore, described as having glowing eyes and silent footsteps, associated with nocturnal omens."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "Cats were respected on farms for catching mice and protecting rice storage, but their quiet night habits also inspired ghost stories."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "Cats hold a unique spot in folklore—independent, quiet, and active at night."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "Feline biology: glowing eyes in dim light, static electricity in cat fur, and silent hunting."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Similar to black cat myths around the world."
      }
    },
    {
      id: "quy-mot-gio",
      name: "Quỷ Một Giò (Thần Độc Cước)",
      vietnameseName: "Quỷ Một Giò / Thần Độc Cước",
      epithet: "The One-Legged Coastal Guardian",
      category: "guardians",
      region: "Coastal Northern Vietnam (Sầm Sơn, Thanh Hóa)",
      atmosphericSummary: "A heroic guardian spirit who split his body in half to protect fishermen at sea and farmers on land.",
      image: "assets/images/story-quy-mot-gio.jpg",
      articleBottomImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOVRXc1cQ5j9uopXdqi9EVZOZovhiajSk96ESITiRqOU41dtuEO6zPJlo&s=10",
      legend: {
        heading: "THE LEGEND",
        content: "Thần Độc Cước (The One-Legged God) is a famous hero guardian in Sầm Sơn, Thanh Hóa. According to legend, a giant hero split himself in two to guard sea fishermen with one half while protecting land farmers with the other."
      },
      origins: {
        heading: "ORIGINS & VARIATIONS",
        content: "His temple still stands on Cổ Giải mountain in Sầm Sơn, where coastal fishermen pray for peaceful ocean voyages."
      },
      culturalContext: {
        heading: "CULTURAL CONTEXT",
        content: "Seaside fishing was dangerous. Praying to Độc Cước gave fishermen courage before sailing into storms."
      },
      whatReflects: {
        heading: "WHAT THE STORY REFLECTS",
        content: "Themes of courage and protecting your community."
      },
      relatedBeliefs: {
        heading: "RELATED BELIEFS",
        content: "Connected with coastal marine guardian legends in Vietnam."
      }
    }
  ]
};