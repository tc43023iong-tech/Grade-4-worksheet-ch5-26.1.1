import { SectionData, VerbRow } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'A',
    title: 'Verb Master',
    titleCn: '動詞大師',
    description: 'Finish the verb table! 完成動詞表格！',
    type: 'verb-table',
    theme: 'pink',
    content: [
      { id: 1, base: 'hurt', past: 'hurt', pastParticiple: 'hurt', presentParticiple: 'hurting' },
      { id: 2, base: 'hit', past: 'hit', pastParticiple: 'hit', presentParticiple: 'hitting' },
      { id: 3, base: 'keep', past: 'kept', pastParticiple: 'kept', presentParticiple: 'keeping' },
      { id: 4, base: 'know', past: 'knew', pastParticiple: 'known', presentParticiple: 'knowing' },
      { id: 5, base: 'hold', past: 'held', pastParticiple: 'held', presentParticiple: 'holding' },
      { id: 6, base: 'learn', past: 'learnt', pastParticiple: 'learnt', presentParticiple: 'learning' },
      { id: 7, base: 'grow', past: 'grew', pastParticiple: 'grown', presentParticiple: 'growing' },
    ] as VerbRow[]
  },
  {
    id: 'B',
    title: 'Vocabulary Hunt',
    titleCn: '單字尋寶',
    description: 'Fill in the blanks with expressions from the box.',
    type: 'quiz',
    theme: 'yellow',
    content: [
      { 
        id: 1, 
        question: 'We went to the _____ to buy new school bags.', 
        questionCn: '我們去___買新書包。', 
        options: ['airport', 'shopping centre', 'factory', 'air conditioners', 'food online', 'used smartphone'], 
        answer: 'shopping centre' 
      },
      { 
        id: 2, 
        question: 'Fifty years ago, there wasn’t an _____ in Macau.', 
        questionCn: '五十年前澳門沒有___。', 
        options: ['factory', 'used smartphone', 'airport', 'food online', 'shopping centre', 'air conditioners'], 
        answer: 'airport' 
      },
      { 
        id: 3, 
        question: 'My dad works in a big _____. He makes toys every day.', 
        questionCn: '我爸爸在一家大___工作。他每天做玩具。', 
        options: ['food online', 'factory', 'shopping centre', 'airport', 'air conditioners', 'used smartphone'], 
        answer: 'factory' 
      },
      { 
        id: 4, 
        question: 'Mum likes to buy _____. It is fast and easy.', 
        questionCn: '媽媽喜歡___。這又快又方便。', 
        options: ['used smartphone', 'air conditioners', 'food online', 'factory', 'airport', 'shopping centre'], 
        answer: 'food online' 
      },
      { 
        id: 5, 
        question: 'Nobody _____ 60 years ago.', 
        questionCn: '六十年前沒有人___。', 
        options: ['shopping centre', 'food online', 'airport', 'used smartphone', 'factory', 'air conditioners'], 
        answer: 'used smartphone' 
      },
      { 
        id: 6, 
        question: 'There weren’t any _____ in classrooms before. It was so hot!', 
        questionCn: '以前教室裡沒有任何___。天氣真熱！', 
        options: ['air conditioners', 'factory', 'used smartphone', 'shopping centre', 'airport', 'food online'], 
        answer: 'air conditioners' 
      },
    ]
  },
  {
    id: 'C',
    title: 'Translation',
    titleCn: '翻譯小站',
    description: 'Choose the best translation. 選出最好的翻譯。',
    type: 'quiz',
    theme: 'blue',
    content: [
      { 
        id: 1, 
        question: '150年前澳門是沒有機場的。', 
        questionCn: 'Choose the English translation',
        options: [
          'There weren\'t airport in Macau 150 years ago.',
          'There wasn’t an airport in Macau 150 years ago.',
          'There isn\'t an airport in Macau 150 years ago.'
        ], 
        answer: 'There wasn’t an airport in Macau 150 years ago.' 
      },
      { 
        id: 2, 
        question: '每個人都用現金和智能手機。', 
        questionCn: 'Choose the English translation',
        options: [
          'Nobody uses cash and smartphones.',
          'Everybody uses cash and smartphones.',
          'Everybody use cash and smartphone.'
        ], 
        answer: 'Everybody uses cash and smartphones.' 
      },
      { 
        id: 3, 
        question: 'What kind of phones did people use before?', 
        questionCn: '選出中文翻譯',
        options: [
          '以前的人有電話嗎？',
          '人們現在使用什麼類型的電話？',
          '人們在以前會使用什麼類型的電話？'
        ], 
        answer: '人們在以前會使用什麼類型的電話？' 
      },
      { 
        id: 4, 
        question: 'They did not even have lights and smartphones in the past.', 
        questionCn: '選出中文翻譯',
        options: [
          '在過去，他們甚至沒有燈和智能電話。',
          '在過去，他們有很多燈和智能電話。',
          '他們現在沒有燈和智能電話。'
        ], 
        answer: '在過去，他們甚至沒有燈和智能電話。' 
      },
    ]
  },
  {
    id: 'D',
    title: 'Simple Past',
    titleCn: '過去式練習',
    description: 'Fill in the blanks. 填入正確的過去式動詞。',
    type: 'quiz',
    theme: 'green',
    content: [
      { id: 1, question: 'Tom _____ (hit) the ball so hard.', questionCn: 'Tom 很用力地___(打)球。', options: ['hat', 'hit', 'hitted'], answer: 'hit' },
      { id: 2, question: 'Mum _____ (not keep) the secret.', questionCn: '媽媽___(沒有保守)秘密。', options: ['did not keep', 'no kept', 'did not kept'], answer: 'did not keep' },
      { id: 3, question: '_____ you _____ (know) the answer?', questionCn: '你___(知道)答案嗎？', options: ['Do / know', 'Did / knew', 'Did / know'], answer: 'Did / know' },
      { id: 4, question: 'Grandma _____ (hold) my hand.', questionCn: '奶奶___(牽)我的手。', options: ['holded', 'held', 'holds'], answer: 'held' },
      { id: 5, question: '_____ you _____ (hurt) your finger?', questionCn: '你___(弄傷)你的手指了嗎？', options: ['Do / hurt', 'Did / hurted', 'Did / hurt'], answer: 'Did / hurt' },
      { id: 6, question: 'We _____ (keep) the kitten last night.', questionCn: '我們昨晚___(收留)了那隻小貓。', options: ['keeped', 'kept', 'keep'], answer: 'kept' },
      { id: 7, question: 'I _____ (know) her name yesterday.', questionCn: '我昨天___(知道)她的名字。', options: ['knew', 'knowed', 'known'], answer: 'knew' },
    ]
  },
  {
    id: 'E',
    title: 'Was or Were?',
    titleCn: 'Was 還是 Were?',
    description: 'Choose was, wasn\'t, were or weren\'t. 選擇正確的動詞。',
    type: 'quiz',
    theme: 'purple',
    content: [
      { id: 1, question: 'There _____ a big fireworks show last night. (✓)', questionCn: '昨晚有一場盛大的煙火秀。', options: ['weren\'t', 'was', 'were'], answer: 'was' },
      { id: 2, question: 'There _____ a cinema near my old home. (✗)', questionCn: '我家附近沒有電影院。', options: ['wasn\'t', 'was', 'weren\'t'], answer: 'wasn\'t' },
      { id: 3, question: 'There _____ any computers in school 40 years ago. (✗)', questionCn: '40年前學校裡沒有任何電腦。', options: ['weren\'t', 'wasn\'t', 'were'], answer: 'weren\'t' },
      { id: 4, question: 'There _____ ten candles on my birthday cake. (✓)', questionCn: '我的生日蛋糕上有十根蠟燭。', options: ['was', 'were', 'weren\'t'], answer: 'were' },
      { id: 5, question: 'There _____ a small pet shop in the market yesterday. (✓)', questionCn: '昨天市場裡有一家小寵物店。', options: ['were', 'wasn\'t', 'was'], answer: 'was' },
      { id: 6, question: 'There _____ any robots 100 years ago. (✗)', questionCn: '100年前沒有任何機器人。', options: ['wasn\'t', 'weren\'t', 'were'], answer: 'weren\'t' },
      { id: 7, question: 'There _____ lots of people at the beach last Sunday. (✓)', questionCn: '上週日海灘上有很多人。', options: ['was', 'weren\'t', 'were'], answer: 'were' },
      { id: 8, question: 'There _____ any milk in the fridge this morning. (✗)', questionCn: '今天早上冰箱裡沒有牛奶。', options: ['wasn\'t', 'were', 'weren\'t'], answer: 'wasn\'t' },
      { id: 9, question: 'There _____ any electric cars in Macau 50 years ago. (✗)', questionCn: '50年前澳門沒有任何電動車。', options: ['weren\'t', 'wasn\'t', 'was'], answer: 'weren\'t' },
    ]
  },
  {
    id: 'F',
    title: 'Anybody & Nobody',
    titleCn: '有人 & 沒人',
    description: 'Choose anybody, nobody or everybody. 選擇正確的代名詞。',
    type: 'quiz',
    theme: 'pink',
    content: [
      { id: 1, question: 'Did _____ use air-cons 150 years ago?', questionCn: '150年前___用冷氣嗎？', options: ['nobody (沒有人)', 'everybody (所有人)', 'anybody (有沒有人)'], answer: 'anybody (有沒有人)' },
      { id: 2, question: '_____ uses laptops nowadays.', questionCn: '現在___都在用筆記型電腦。', options: ['Anybody (有沒有人)', 'Everybody (所有人)', 'Nobody (沒有人)'], answer: 'Everybody (所有人)' },
      { id: 3, question: 'Does _____ want to try this blueberry cheesecake?', questionCn: '___想試試這個藍莓起司蛋糕嗎？', options: ['anybody (有沒有人)', 'somebody (有人)', 'nobody (沒有人)'], answer: 'anybody (有沒有人)' },
      { id: 4, question: '_____ wants to live a happy life!', questionCn: '___都想過快樂的生活！', options: ['Everybody (所有人)', 'Nobody (沒有人)', 'Anybody (有沒有人)'], answer: 'Everybody (所有人)' },
      { id: 5, question: '_____ used washing machines 80 years ago.', questionCn: '80年前___用洗衣機。', options: ['Everybody (所有人)', 'Anybody (有沒有人)', 'Nobody (沒有人)'], answer: 'Nobody (沒有人)' },
    ]
  },
  {
    id: 'G',
    title: 'Sentence Builder',
    titleCn: '句子重組',
    description: 'Complete the sentences. 完成句子。',
    type: 'quiz',
    theme: 'yellow',
    content: [
      { id: 1, question: '_____ there any refrigerators 80 years ago?', questionCn: '80年前有冰箱嗎？', options: ['Did', 'Was', 'Were'], answer: 'Were' },
      { id: 2, question: 'No, there _____ refrigerators then.', questionCn: '不，那時候沒有冰箱。', options: ['wasn\'t', 'didn\'t', 'weren\'t'], answer: 'weren\'t' },
      { id: 3, question: '_____ there any microwave ovens?', questionCn: '有微波爐嗎？', options: ['Were', 'Did', 'Was'], answer: 'Were' },
      { id: 4, question: 'Yes, _____ were.', questionCn: '是的，有。', options: ['their', 'there', 'they'], answer: 'there' },
      { id: 5, question: 'Did _____ use air-conditioners 100 years ago?', questionCn: '100年前有人用冷氣嗎？', options: ['anybody', 'nobody', 'everybody'], answer: 'anybody' },
      { id: 6, question: 'No, _____ had air-conditioners then.', questionCn: '不，那時候沒有人有冷氣。', options: ['somebody', 'nobody', 'anybody'], answer: 'nobody' },
    ]
  }
];