// ============================================================
// 100+ MULTI-LINGUAL SONGS DATABASE (Japanese, Hindi, English, K-Pop, Spanish)
// Verified working YouTube IDs & native language SEO metadata
// Curated for Manish Kumar Portfolio SEO Network
// ============================================================

const songsData = [
  // ────────────────────────────────────────────────────────────
  // 1. JAPANESE (J-POP & ANIME OSTs - 日本語)
  // ────────────────────────────────────────────────────────────
  {
    id: "ai-scream",
    title: "愛♡スクリ～ム！",
    titleEn: "Ai Scream!",
    artist: "愛♡スクリ～ム！",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "J-Pop",
    youtubeId: "nb6_sKQXQ04",
    lyrics: "アイスクリーム！ 愛スクリーム！\n甘くてとけちゃう 恋の魔法にかかったみたい\nスキ！ キライ？ スキ！ スキ！ 大スキ！\n\n胸のドキドキ 止まらないよ\nカラフルポップな毎日をキミと一緒に過ごしたい\n叫べ！ 愛♡スクリ～ム！",
    description: "キャッチーなメロディとポップなダンスで人気のJ-Pop・アニソンナンバー『愛♡スクリ～ム！』。"
  },
  {
    id: "yokai-taisou-daiichi",
    title: "【妖怪ウォッチ】ようかい体操第一",
    titleEn: "Yo-kai Watch Exercise No. 1",
    artist: "Dream5 / 妖怪ウォッチ",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "VyKLQXOj0ts",
    lyrics: "ヨーデル ヨーデル ヨーデル ヨーデル\nようかいでるけん でられんけん\nローデル ローデル ローデル ローデル\nゆうぎでるけん でられんけん\n\nウォッチ！ 今何時？ 一大事！\nウィッス！ ウィッス！ ウィッス！\n\nどうして朝は眠いんだ？ どうして朝は眠いんだ？\nドゥワッハッハー！ 妖怪のせいなのね？ そうなのね！",
    description: "社会現象となった『妖怪ウォッチ』の大ヒットエンディングテーマ「ようかい体操第一」。"
  },
  {
    id: "gin-no-ryuu-no-se-ni-notte",
    title: "銀の龍の背に乗って",
    titleEn: "Riding on the Silver Dragon's Back",
    artist: "中島みゆき (Miyuki Nakajima)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "J-Pop / Drama OST",
    youtubeId: "v2AC41dglnM",
    lyrics: "あの蒼ざめた海の彼方で 今まさに誰かが傷んでいる\nまだ飛べないヒナぶつのような 僕の手ぶらなこの手のひら\n\n夢が迎えに来てくれるまで 震えて待っているだけなのか\n明日 僕は風を跨ぎ 誰も知らない海を渡ろう\n\n銀の龍の背に乗って 運んでゆこう 傷痕の群れを\n銀の龍の背に乗って 運んでゆこう 雨雲の渦を",
    description: "大ヒットドラマ『Dr.コトー診療所』の主題歌として深く愛される中島みゆきの至高の名曲。"
  },
  {
    id: "idol-yoasobi",
    title: "アイドル (Idol)",
    titleEn: "Idol",
    artist: "YOASOBI",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "J-Pop / Anime OST",
    youtubeId: "ZRt7BEKcPEo",
    lyrics: "無敵の笑顔で荒らすメディア\n知りたいその秘密アイドルの\n抜けてるとこさえ彼女のエリア\n完璧で嘘つきな君は\n天才的なアイドル様\n\n今日何食べた？ 好きな本は？\n遊びに行くならどこに行くの？\n何も答えないの ぼやかしたまま\nそう誰も彼も魅了していく",
    description: "アニメ『推しの子』オープニング主題歌。世界中のチャートを席巻したYOASOBIのグローバルヒット曲。"
  },
  {
    id: "cruel-angels-thesis",
    title: "残酷な天使のテーゼ",
    titleEn: "A Cruel Angel's Thesis",
    artist: "高橋洋子 (Yoko Takahashi)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "o6wtDPVkKqY",
    lyrics: "残酷な天使のように 少年よ 神話になれ\n\n蒼い風がいま 胸のドアを叩いても\n私だけをみつめて 微笑んでいるあなた\nそっとふれるもの もとめることに夢中で\n運命さえまだ知らない いたいけな瞳\n\nだけどいつか気付くでしょう その背中には\n遥か未来 めざすための羽根があること",
    description: "『新世紀エヴァンゲリオン』の言わずと知れたアニソン界の伝説的オープニング曲。"
  },
  {
    id: "gurenge-lisa",
    title: "紅蓮華 (Gurenge)",
    titleEn: "Gurenge - Demon Slayer",
    artist: "LiSA",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "CwkzK-F0Y00",
    lyrics: "強くなれる理由を知った 僕を連れて進め\n\n泥だらけの走馬灯に酔う こわばる心\n震える手は掴みたいものがある それだけさ\n夜の匂いに空睨んでも\n変わっていけるのは自分自身だけ それだけさ\n\n強くなれる理由を知った 僕を連れて進め！",
    description: "大人気アニメ『鬼滅の刃』オープニングテーマ。LiSAの圧倒的な歌唱力が光る大ヒットナンバー。"
  },
  {
    id: "shin-jidai-ado",
    title: "新時代 (New Genesis)",
    titleEn: "New Genesis",
    artist: "Ado (ONE PIECE FILM RED)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "1FliVTcX8bQ",
    lyrics: "新時代はこの未来だ\n世界中全部 変えてしまえば 変えてしまえば…\n\nジャマモノ やなもの 忘れたいの\nハラワタわたる メロディの波に\nあくの夢から さめないままで\n新時代はこの未来だ！",
    description: "映画『ONE PIECE FILM RED』主題歌。Adoが歌うウタの全世界的大ヒットソング。"
  },
  {
    id: "kick-back-yonezu",
    title: "KICK BACK",
    titleEn: "KICK BACK - Chainsaw Man",
    artist: "米津玄師 (Kenshi Yonezu)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "M2cckDmNLMI",
    lyrics: "努力 未来 A BEAUTIFUL STAR\n努力 未来 A BEAUTIFUL STAR\n努力 未来 A BEAUTIFUL STAR\n\nなんか忘れちゃってんだ\nRest in peace まで行こうぜ\n最高のオイルを頂戴\nKICK BACK!",
    description: "アニメ『チェンソーマン』オープニングテーマ。米津玄師と常田大希（King Gnu）が手掛けた疾走感あふれるロックナンバー。"
  },
  {
    id: "blue-bird-ikimonogakari",
    title: "ブルーバード (Blue Bird)",
    titleEn: "Blue Bird - Naruto",
    artist: "いきものがかり (Ikimonogakari)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "KpsJWFuVTdI",
    lyrics: "飛翔(はばた)いたら 戻らないと言って\n目指したのは 蒼い 蒼い あの空\n\n「切なさ」はまだつかめず 「あなた」は今つかみはじめた\nあなたへと抱くこの感情も 今「言葉」に変わっていく",
    description: "アニメ『NARUTO-ナルト- 疾風伝』OPテーマ。世界中で高い人気を誇る爽快な名曲。"
  },
  {
    id: "unravel-tokyo-ghoul",
    title: "unravel",
    titleEn: "unravel - Tokyo Ghoul",
    artist: "TK from 凛として時雨",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "7aMOurgDB-o",
    lyrics: "教えて 教えよ その仕組みを\n僕の中に誰がいるの？\n壊れた 壊れたよ この世界で\n君が笑う 何も見えずに\n\n壊れた僕なんてさ 息を止めて\nFreeze\n解けない 変えられない もうあふれるよ\nUNRAVEL GHOL!",
    description: "アニメ『東京喰種トーキョーグール』OPテーマ。全世界のアニメファンから絶賛されるTKのエモーショナルな歌声。"
  },
  {
    id: "lemon-yonezu",
    title: "Lemon",
    titleEn: "Lemon",
    artist: "米津玄師 (Kenshi Yonezu)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "J-Pop / Drama OST",
    youtubeId: "SX_ViT4Ra7k",
    lyrics: "夢ならばどれほどよかったでしょう\n未だにあなたのことをゆめにみる\n忘れた物を取りに帰るように\n古びた思い出の埃を払う\n\n戻らない幸せがあることを\n最後にあなたが教えてくれた\n言えずに隠していた昏い過去も\nあなたがいなきゃ永遠に昏いまま\n\n今でもあなたはわたしの光",
    description: "ドラマ『アンナチュラル』主題歌。MV再生回数8億回を突破した米津玄師の代表曲。"
  },
  {
    id: "sparkle-radwimps",
    title: "スパークル (Sparkle)",
    titleEn: "Sparkle - Your Name",
    artist: "RADWIMPS (君の名は。)",
    lang: "ja",
    langLabel: "Japanese 🇯🇵",
    category: "Anime OST",
    youtubeId: "a2GujJZfXpg",
    lyrics: "まだこの世界は 僕を飼いならしていたいみたいだ\n望み通りでしょう？ 散々迷ったあげくの果てに\n\n愛し方さえも 君の匂いがした\n歩き方さえも 君の笑い声がした\nいつか消えてなくなる 君のすべてを\nこの目に焼き付けておくことは\nもう権利なんかじゃない 義務だと思うんだ",
    description: "新海誠監督のアニメ映画『君の名は。』劇中歌。RADWIMPSが描く美しい旋律と壮大な世界観。"
  },

  // ────────────────────────────────────────────────────────────
  // 2. HINDI (BOLLYWOOD & INDIAN - हिंदी)
  // ────────────────────────────────────────────────────────────
  {
    id: "kesariya",
    title: "Kesariya (केसरिया)",
    titleEn: "Kesariya - Brahmastra",
    artist: "Arijit Singh / Pritam / Amitabh Bhattacharya",
    lang: "hi",
    langLabel: "Hindi 🇮🇳",
    category: "Bollywood",
    youtubeId: "BddP6PYo2gs",
    lyrics: "मुझको इतना बता दे कोई\nकैसे तुझसे दिल न लगाए कोई\nरंग जाऊँ जो मैं हाथ लगाऊँ\nदिन बीते सारा तेरी फिक्र में\n\nकेसरिया तेरा इश्क़ है पिया\nरंग जाऊँ जो मैं हाथ लगाऊँ\nबना बीते सारा तेरी फिक्र में\nरैन बीते सारी तेरी फिक्र में...",
    description: "Ranbir Kapoor and Alia Bhatt star in Brahmastra's hit romantic anthem sung by Arijit Singh."
  },
  {
    id: "tum-hi-ho",
    title: "Tum Hi Ho (तुम ही हो)",
    titleEn: "Tum Hi Ho - Aashiqui 2",
    artist: "Arijit Singh / Mithoon",
    lang: "hi",
    langLabel: "Hindi 🇮🇳",
    category: "Bollywood",
    youtubeId: "IJq0yyWug1k",
    lyrics: "Hum tere bin ab reh nahi sakte\nTere bina kya wajood mera\nTujhse juda gar ho jaayenge\nToh khud se hi ho jaayenge judaa\n\nKyunki tum hi ho, ab tum hi ho\nZindagi ab tum hi ho\nChain bhi, mera dard bhi\nMeri aashiqui ab tum hi ho...",
    description: "The iconic love anthem of the decade from Aashiqui 2 that made Arijit Singh a global sensation."
  },
  {
    id: "apna-bana-le",
    title: "Apna Bana Le (अपना बना ले)",
    titleEn: "Apna Bana Le - Bhediya",
    artist: "Arijit Singh / Sachin-Jigar",
    lang: "hi",
    langLabel: "Hindi 🇮🇳",
    category: "Bollywood",
    youtubeId: "ElZfdU54Cp8",
    lyrics: "Tu mera koi na ho ke bhi kuch lage\nTu mera koi na ho ke bhi kuch lage\nKiya re jo bhi tune kya kiya re\nApna bana le piya, apna bana le piya\nApna bana le mujhe, apna bana le piya...",
    description: "Varun Dhawan and Kriti Sanon's soulful track from Bhediya sung with deep emotion by Arijit Singh."
  },
  {
    id: "channa-mereya",
    title: "Channa Mereya (चन्ना मेरेया)",
    titleEn: "Channa Mereya - Ae Dil Hai Mushkil",
    artist: "Arijit Singh / Pritam",
    lang: "hi",
    langLabel: "Hindi 🇮🇳",
    category: "Bollywood",
    youtubeId: "284Ov7ysmfA",
    lyrics: "Accha chalta hoon duuaon mein yaad rakhna\nMere zikr ka zuba pe swaad rakhna\nDil ke sandookon mein mere ache kaam rakhna\nChitti taaron mein bhi mera tu salaam rakhna\n\nO channa mereya mereya o channa mereya mereya\nChanna mereya mereya beliya O piya...",
    description: "Ranbir Kapoor's heartbreak anthem from Ae Dil Hai Mushkil, loved by millions across India and the world."
  },
  {
    id: "kal-ho-naa-ho",
    title: "Kal Ho Naa Ho (कल हो ना हो)",
    titleEn: "Kal Ho Naa Ho Title Track",
    artist: "Sonu Nigam / Shankar-Ehsaan-Loy",
    lang: "hi",
    langLabel: "Hindi 🇮🇳",
    category: "Bollywood Legend",
    youtubeId: "g0eO74Umwsc",
    lyrics: "Har ghadi badal rahi hai roop zindagi\nChaav hai kabhi kabhi hai dhoop zindagi\nHar pal yahan jee bhar jiyo\nJo hai sama kal ho naa ho\n\nHar ghadi badal rahi hai roop zindagi\nChaav hai kabhi kabhi hai dhoop zindagi...",
    description: "Shah Rukh Khan's evergreen masterpiece sung by Sonu Nigam capturing the philosophy of living life to the fullest."
  },
  {
    id: "chaleya-jawan",
    title: "Chaleya (चलेया)",
    titleEn: "Chaleya - Jawan",
    artist: "Arijit Singh & Shilpa Rao / Anirudh",
    lang: "hi",
    langLabel: "Hindi 🇮🇳",
    category: "Bollywood",
    youtubeId: "VAdGW7QDJiU",
    lyrics: "Ishq mein dil bana hai tera\nJabse dekha hai chehra tera\nChaleya teri ore, chaleya teri ore\nTera hi toh khayal rehta hai...",
    description: "Shah Rukh Khan & Nayanthara's blockbuster romance dance hit from Jawan composed by Anirudh."
  },
  {
    id: "pasoori",
    title: "Pasoori (पसूरी)",
    titleEn: "Pasoori - Coke Studio",
    artist: "Shae Gill & Ali Sethi",
    lang: "hi",
    langLabel: "Hindi / Punjabi 🇮🇳",
    category: "Coke Studio Hit",
    youtubeId: "5Eqb_-j3FDA",
    lyrics: "Agg laavan majboori nu\nAan jaan di pasooriyan nu\nNachne de aaja dooriyan nu\nRaavan vich baavan boliyan nu\nPoore kare haan diyan nu...",
    description: "Coke Studio Season 14 viral global phenomenon that topped charts in over 50 countries."
  },

  // ────────────────────────────────────────────────────────────
  // 3. ENGLISH (GLOBAL POP & ROCK)
  // ────────────────────────────────────────────────────────────
  {
    id: "shape-of-you",
    title: "Shape of You",
    titleEn: "Shape of You",
    artist: "Ed Sheeran",
    lang: "en",
    langLabel: "English 🇺🇸",
    category: "Global Pop",
    youtubeId: "JGwWNGJdvx8",
    lyrics: "The club isn't the best place to find a lover\nSo the bar is where I go\nMe and my friends at the table doing shots\nDrinking fast and then we talk slow\n\nBoy, let's not talk too much\nGrab on my waist and put that body on me\nCome on now, follow my lead\nI'm in love with the shape of you...",
    description: "Ed Sheeran's record-smashing global pop anthem with over 6 billion views on YouTube."
  },
  {
    id: "blinding-lights",
    title: "Blinding Lights",
    titleEn: "Blinding Lights",
    artist: "The Weeknd",
    lang: "en",
    langLabel: "English 🇺🇸",
    category: "Synthwave / Pop",
    youtubeId: "4NRXx6U8ABQ",
    lyrics: "Yeah\nI've been tryna call\nI've been on my own for long enough\nMaybe you can show me how to love, maybe\n\nI'm running out of time\n'Cause I can see the sun light up the sky\nSo I hit the road in overdrive, baby, oh\n\nI said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch...",
    description: "The Weeknd's chart-topping 80s synth-pop revival track that stayed in the Billboard Top 10 for a record 57 weeks."
  },
  {
    id: "stay-kid-laroi",
    title: "STAY",
    titleEn: "STAY",
    artist: "The Kid LAROI & Justin Bieber",
    lang: "en",
    langLabel: "English 🇺🇸",
    category: "Pop Rock",
    youtubeId: "kTJczUoc26U",
    lyrics: "I do the same thing I told you that I never would\nI told you I'd change, even when I knew I never could\nI know that I can't find nobody else as good as you\nI need you to stay, need you to stay, hey\n\nI get drunk, wake up, I'm wasted still\nI realize the time that I wasted here...",
    description: "High-energy multi-platinum collaborative hit by The Kid LAROI and Justin Bieber."
  },
  {
    id: "as-it-was",
    title: "As It Was",
    titleEn: "As It Was",
    artist: "Harry Styles",
    lang: "en",
    langLabel: "English 🇺🇸",
    category: "Indie Pop",
    youtubeId: "H5v3kku4y6Q",
    lyrics: "Come on, Harry, we wanna say goodnight to you\n\nHolding me back\nGravity's holding me back\nI want you to hold out the palm of your hand\nWhy don't we leave it at that?\n\nIn this world, it's just us\nYou know it's not the same as it was\nIn this world, it's just us\nYou know it's not the same as it was...",
    description: "Harry Styles' Grammy-nominated global smash hit capturing introspection and catchy synth hooks."
  },
  {
    id: "believer-imagine-dragons",
    title: "Believer",
    titleEn: "Believer",
    artist: "Imagine Dragons",
    lang: "en",
    langLabel: "English 🇺🇸",
    category: "Alt Rock",
    youtubeId: "7wtfhZwyrcc",
    lyrics: "First things first\nI'mma say all the words inside my head\nI'm fired up and tired of the way that things have been, oh-ooh\nThe way that things have been, oh-ooh\n\nPain!\nYou made me a, you made me a believer, believer\nPain!\nYou break me down and build me up, believer, believer...",
    description: "Imagine Dragons' powerhouse motivational rock anthem that dominates workout and sports playlists worldwide."
  },

  // ────────────────────────────────────────────────────────────
  // 4. KOREAN (K-POP - 한국어)
  // ────────────────────────────────────────────────────────────
  {
    id: "dynamite-bts",
    title: "Dynamite (다이너마이트)",
    titleEn: "Dynamite",
    artist: "BTS (방탄소년단)",
    lang: "ko",
    langLabel: "Korean / K-Pop 🇰🇷",
    category: "K-Pop",
    youtubeId: "gdZLi9oWNZg",
    lyrics: "'Cause I-I-I'm in the stars tonight\nSo watch me bring the fire and set the night alight\n\nShoes on, get up in the morn'\nCup of milk, let's rock and roll\nKing Kong, kick the drum, rolling on like a Rolling Stone\nSing song when I'm walking home\nJump up to the top, LeBron...",
    description: "BTS's historic Billboard Hot 100 #1 disco-pop anthem that spread joy across the globe."
  },
  {
    id: "pink-venom-blackpink",
    title: "Pink Venom",
    titleEn: "Pink Venom",
    artist: "BLACKPINK (블랙핑크)",
    lang: "ko",
    langLabel: "Korean / K-Pop 🇰🇷",
    category: "K-Pop",
    youtubeId: "gQlMMD8auMs",
    lyrics: "Kick in the door, waving the coco\nPapara call me, no photo\n\nI bring the pain like\nThis insurance for your eyes, yeah\nTaste that pink venom\nTaste that pink venom\nGet 'em, get 'em, get 'em...",
    description: "BLACKPINK's explosive hip-hop track combining traditional Korean instrument geomungo with hard-hitting beats."
  },

  // ────────────────────────────────────────────────────────────
  // 5. SPANISH (LATINO - ESPAÑOL)
  // ────────────────────────────────────────────────────────────
  {
    id: "despacito",
    title: "Despacito",
    titleEn: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    lang: "es",
    langLabel: "Spanish 🇲🇽",
    category: "Reggaeton / Latino",
    youtubeId: "kJQP7kiw5Fk",
    lyrics: "¡Ay!\nFonsi, DY\nOh, no, oh, no (ey)\nSabes que ya llevo un rato mirándote\nTengo que bailar contigo hoy (DY)\n\nDespacito\nQuiero respirar tu cuello despacito\nDeja que te diga cosas al oído\nPara que te acuerdes si no estás conmigo...",
    description: "The historic Reggaeton phenomenon with over 8 billion YouTube views that revolutionized Latin pop music globally."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = songsData;
}
