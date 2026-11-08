export const QUESTIONNAIRE_VERSION="custom-clear-4.1.0-beta.9.4";
export const LEGACY_QUESTIONNAIRE_VERSION="custom-clear-4.0.0-beta.8";
export const LEGACY_ITEM_VERSIONS={
  "1": "clear-8-1-1",
  "2": "clear-8-2-1",
  "3": "clear-8-3-1",
  "4": "clear-8-4-1",
  "5": "clear-8-5-1",
  "6": "clear-8-6-1",
  "7": "clear-8-7-1",
  "8": "clear-8-8-1",
  "9": "clear-8-9-1",
  "10": "clear-8-10-1",
  "11": "clear-8-11-1",
  "12": "clear-8-12-1",
  "13": "clear-8-13-1",
  "14": "clear-8-14-1",
  "15": "clear-8-15-1",
  "16": "clear-8-16-1",
  "17": "clear-8-17-1",
  "18": "clear-8-18-1",
  "19": "clear-8-19-1",
  "20": "clear-8-20-1",
  "21": "clear-8-21-1",
  "22": "clear-8-22-1",
  "23": "clear-8-23-1",
  "24": "clear-8-24-1",
  "25": "clear-8-25-1",
  "26": "clear-8-26-1",
  "27": "clear-8-27-1",
  "28": "clear-8-28-1",
  "29": "clear-8-29-1",
  "30": "clear-8-30-1",
  "31": "clear-8-31-1",
  "32": "clear-8-32-1",
  "33": "clear-8-33-1",
  "34": "clear-8-34-1",
  "35": "clear-8-35-1",
  "36": "clear-8-36-1",
  "37": "clear-8-37-1",
  "38": "clear-8-38-1",
  "39": "clear-8-39-1",
  "40": "clear-8-40-1",
  "41": "clear-8-41-1",
  "42": "clear-8-42-1",
  "43": "clear-8-43-1",
  "44": "clear-8-44-1",
  "45": "clear-8-45-1",
  "46": "clear-8-46-1",
  "47": "clear-8-47-1",
  "48": "clear-8-48-1",
  "101": "clear-8-101-1",
  "102": "clear-8-102-1",
  "103": "clear-8-103-1",
  "104": "clear-8-104-1",
  "105": "clear-8-105-1",
  "106": "clear-8-106-1",
  "107": "clear-8-107-1",
  "108": "clear-8-108-1",
  "109": "clear-8-109-1",
  "110": "clear-8-110-1",
  "111": "clear-8-111-1",
  "112": "clear-8-112-1"
};
export const SCORING_VERSION="six-axis-valid-5.0.0";
export const SCHEMA_VERSION="5.0";
export const BASE_COUNT=24;
export const MAX_COUNT=60;
export const ANSWER_EXIT="這個情境不適用，或我目前無法判斷（不計分）";
export const SUPPLEMENT_PROMPT="如果這些回答沒說到你的情況，可以留下一個實際例子。";
export const AXES=[
  {
    "key": "EI",
    "left": "E",
    "right": "I",
    "name": "互動與獨處",
    "leftName": "互動整理",
    "rightName": "獨處整理",
    "leftDescription": "在這些情境中，你較常透過熟人互動恢復精神或梳理想法。",
    "rightDescription": "在這些情境中，你較常透過獨處恢復精神或梳理想法。"
  },
  {
    "key": "SN",
    "left": "S",
    "right": "N",
    "name": "理解資訊",
    "leftName": "具體例子",
    "rightName": "概念關聯",
    "leftDescription": "在這些情境中，你較常先注意具體例子、事實或片段。",
    "rightDescription": "在這些情境中，你較常先注意概念、主題或整體關聯。"
  },
  {
    "key": "TF",
    "left": "T",
    "right": "F",
    "name": "判斷起點",
    "leftName": "比較條件",
    "rightName": "價值與處境",
    "leftDescription": "在這些情境中，你較常從理由與可一致比較的條件形成看法。",
    "rightDescription": "在這些情境中，你較常從個人價值、相關人的處境與需要形成看法。"
  },
  {
    "key": "JP",
    "left": "J",
    "right": "P",
    "name": "安排方式",
    "leftName": "先定大概",
    "rightName": "邊做邊定",
    "leftDescription": "在能自己安排的情境中，你較常先定大概內容或順序。",
    "rightDescription": "在能自己安排的情境中，你較常隨進行過程決定後續內容或順序。"
  },
  {
    "key": "AO",
    "left": "A",
    "right": "O",
    "name": "嘗試起點",
    "leftName": "先試一小步",
    "rightName": "先多了解",
    "leftDescription": "在低風險且可回頭的情境中，你較常先試一小步，從結果了解。",
    "rightDescription": "在低風險且可回頭的情境中，你較常先補充一些資訊，再開始嘗試。"
  },
  {
    "key": "HC",
    "left": "H",
    "right": "C",
    "name": "關心表達",
    "leftName": "話語表達",
    "rightName": "行動支持",
    "leftDescription": "在兩種方式都合適的情境中，你較常先把關心、感謝或支持說出來。",
    "rightDescription": "在兩種方式都合適的情境中，你較常先用實際幫忙回應對方的需要。"
  }
];
export const TYPE_NAMES={
  "ISTJ": [
    "穩健執行者",
    "Steady Executor",
    "偏好依據可靠資訊與清楚結構推進事情，重視責任與可持續的成果。",
    "You prefer reliable information and clear structure, valuing responsibility and sustainable results."
  ],
  "ISFJ": [
    "細緻守護者",
    "Considerate Guardian",
    "善於察覺實際需要並維持穩定關係，重視承諾、照顧與日常細節。",
    "You notice practical needs and maintain stable relationships, valuing commitment, care, and detail."
  ],
  "INFJ": [
    "深層洞察者",
    "Insightful Guide",
    "傾向從長期意義與人際脈絡理解事物，重視內在價值與一致方向。",
    "You understand things through long-term meaning and human context, valuing inner purpose and coherence."
  ],
  "INTJ": [
    "策略建構者",
    "Strategic Architect",
    "習慣建立整體架構並尋找更有效的方法，重視自主思考與長期改善。",
    "You build frameworks and seek effective methods, valuing independent thought and long-term improvement."
  ],
  "ISTP": [
    "冷靜解題者",
    "Calm Troubleshooter",
    "偏好透過觀察與實作理解問題，面對變化時通常能快速調整。",
    "You understand problems through observation and action, adapting quickly when conditions change."
  ],
  "ISFP": [
    "感知創作者",
    "Attentive Creator",
    "重視真實體驗、個人價值與自由空間，對環境和他人狀態保持敏銳。",
    "You value genuine experience, personal values, and freedom, staying sensitive to people and surroundings."
  ],
  "INFP": [
    "價值追尋者",
    "Values Seeker",
    "重視內在信念與可能性，傾向以同理和想像理解人與未來。",
    "You value inner beliefs and possibilities, using empathy and imagination to understand people and the future."
  ],
  "INTP": [
    "概念分析者",
    "Concept Analyst",
    "喜歡拆解原理、比較解釋並建立模型，通常保留彈性以持續修正理解。",
    "You enjoy analyzing principles and models, keeping flexibility to revise your understanding."
  ],
  "ESTP": [
    "即時行動者",
    "Adaptive Doer",
    "善於掌握現場資訊並快速回應，偏好直接體驗與可調整的行動。",
    "You read the situation and respond quickly, preferring direct experience and adaptable action."
  ],
  "ESFP": [
    "活力連結者",
    "Energetic Connector",
    "傾向從互動與實際經驗獲得能量，重視當下感受並能察覺氣氛。",
    "You gain energy from interaction and experience, valuing the present and noticing group atmosphere."
  ],
  "ENFP": [
    "靈感推動者",
    "Inspiration Catalyst",
    "容易從人與事物中看見新可能，重視自由、意義與交流。",
    "You readily see new possibilities in people and situations, valuing freedom, meaning, and connection."
  ],
  "ENTP": [
    "創意辯證者",
    "Inventive Challenger",
    "喜歡探索新觀點、測試想法並連結不同可能，重視思考空間與變化。",
    "You explore perspectives, test ideas, and connect possibilities, valuing intellectual room and change."
  ],
  "ESTJ": [
    "務實組織者",
    "Practical Organizer",
    "傾向建立標準與順序來完成目標，重視效率、責任和清楚分工。",
    "You create standards and order to reach goals, valuing efficiency, responsibility, and clear roles."
  ],
  "ESFJ": [
    "關係協調者",
    "Supportive Coordinator",
    "重視實際照顧與團體合作，常主動維持關係和日常運作。",
    "You value practical care and cooperation, actively supporting relationships and everyday functioning."
  ],
  "ENFJ": [
    "共感引導者",
    "Empathic Mentor",
    "善於理解人際需要並凝聚共同方向，重視成長、溝通和影響力。",
    "You understand interpersonal needs and build shared direction, valuing growth, communication, and impact."
  ],
  "ENTJ": [
    "目標統整者",
    "Goal Strategist",
    "傾向整合資源、訂出方向並推動改進，重視成果與長期策略。",
    "You align resources, set direction, and drive improvement, valuing results and long-term strategy."
  ]
};
export const BASE_QUESTIONS=[
  {
    "id": 1,
    "pair": "EI1",
    "pole": "E",
    "axis": "EI",
    "text": "忙完一天，終於有一小時可以自由安排。假設找人聊天或自己待著都方便，哪一種通常比較能讓你恢復精神？",
    "kind": "scenario",
    "itemVersion": "clear-94-1-1",
    "choices": [
      {
        "id": "a",
        "text": "和熟悉的人輕鬆聊聊，通常比較能讓我恢復精神。",
        "value": 1
      },
      {
        "id": "n",
        "text": "聊天或自己待著，對我恢復精神的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "自己安靜待一會兒，通常比較能讓我恢復精神。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 11,
    "pair": "SN1",
    "pole": "S",
    "axis": "SN",
    "text": "要學一個不熟悉的小功能，手邊同時有操作範例和原理介紹。你通常比較想先看哪一種？",
    "kind": "scenario",
    "itemVersion": "clear-94-11-1",
    "choices": [
      {
        "id": "a",
        "text": "一個實際範例，看看每一步怎麼操作。",
        "value": 1
      },
      {
        "id": "n",
        "text": "範例或原理都常是我先看的，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "整體原理，先了解這個功能為什麼這樣運作。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 21,
    "pair": "TF1",
    "pole": "T",
    "axis": "TF",
    "text": "團體要在兩個都可行、花費也接近的活動方案中選一個。你通常先從哪裡開始比較？",
    "kind": "scenario",
    "itemVersion": "clear-94-21-1",
    "choices": [
      {
        "id": "a",
        "text": "先訂出共同的比較條件，再看各方案符合多少。",
        "value": 1
      },
      {
        "id": "n",
        "text": "共同條件或參加者的重視事項，都常是我比較的起點。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先了解參加者各自在意什麼，再看方案是否合適。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 31,
    "pair": "JP1",
    "pole": "J",
    "axis": "JP",
    "text": "休假有幾件事要辦，而且時間能自己安排時，你通常怎麼開始？",
    "kind": "scenario",
    "itemVersion": "clear-94-31-1",
    "choices": [
      {
        "id": "a",
        "text": "先排個大概順序，再開始做。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排順序或邊做邊決定，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先做眼前的一件，下一件再看情況決定。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 41,
    "pair": "AO1",
    "pole": "A",
    "axis": "AO",
    "text": "想試一個免費的小工具，已知道基本用途，也不需交出私人資料。試用能隨時停止時，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-41-1",
    "choices": [
      {
        "id": "a",
        "text": "先試一個小功能，從操作中了解它。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先試一點或再看一份介紹，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "再看一份使用介紹，了解多一點再試。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 45,
    "pair": "HC1",
    "pole": "H",
    "axis": "HC",
    "text": "熟悉的人最近有點累，你想讓他知道自己在關心他。假設說話或幫個小忙都合適，你通常比較先用哪種方式？",
    "kind": "scenario",
    "itemVersion": "clear-94-45-1",
    "choices": [
      {
        "id": "a",
        "text": "用一句話告訴他，我有留意到他的辛苦。",
        "value": 1
      },
      {
        "id": "n",
        "text": "說句關心的話或做個小幫忙，都是我常先用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "做一個他用得上的小幫忙，讓他輕鬆一點。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 4,
    "pair": "EI2",
    "pole": "I",
    "axis": "EI",
    "text": "參加完一場氣氛愉快、也不費力的熟人聚會後，你通常比較想怎麼接著放鬆？",
    "kind": "scenario",
    "itemVersion": "clear-94-4-1",
    "choices": [
      {
        "id": "a",
        "text": "留一段不和人互動的時間。",
        "value": 1
      },
      {
        "id": "n",
        "text": "繼續聊聊或自己休息，通常都一樣吸引我。",
        "value": 0
      },
      {
        "id": "b",
        "text": "再和一兩個熟悉的人聊聊。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 13,
    "pair": "SN2",
    "pole": "N",
    "axis": "SN",
    "text": "剛看完一部喜歡的電影，回想內容時，你通常比較先想到什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-13-1",
    "choices": [
      {
        "id": "a",
        "text": "故事的整體主題，或它想傳達的意思。",
        "value": 1
      },
      {
        "id": "n",
        "text": "具體片段或整體主題都常先浮現，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "某個具體場景、對白或角色的動作。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 24,
    "pair": "TF2",
    "pole": "F",
    "axis": "TF",
    "text": "朋友想知道你對他一個新計畫的看法。你通常先從哪個角度理解這個計畫？",
    "kind": "scenario",
    "itemVersion": "clear-94-24-1",
    "choices": [
      {
        "id": "a",
        "text": "這個計畫對他有什麼意義，以及是否符合他重視的事。",
        "value": 1
      },
      {
        "id": "n",
        "text": "計畫本身的安排或朋友重視的事，都常是我先理解的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "計畫的目標、理由和做法是否互相配合。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 34,
    "pair": "JP2",
    "pole": "P",
    "axis": "JP",
    "text": "有一整個下午可以做自己的興趣，過程也沒有固定要求時，你通常怎麼進行？",
    "kind": "scenario",
    "itemVersion": "clear-94-34-1",
    "choices": [
      {
        "id": "a",
        "text": "先做一部分，接著想做什麼再決定。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先決定內容或過程中再選，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先決定今天大概要做哪些部分。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 42,
    "pair": "AO1",
    "pole": "O",
    "axis": "AO",
    "text": "想換一種整理桌面的方式，已知道大致做法，而且隨時能換回來。你通常怎麼開始？",
    "kind": "scenario",
    "itemVersion": "clear-94-42-1",
    "choices": [
      {
        "id": "a",
        "text": "再看一個別人的做法，了解多一點再改。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先改一點或再看一個做法，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先改一小塊，看看實際用起來如何。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 46,
    "pair": "HC1",
    "pole": "C",
    "axis": "HC",
    "text": "有人幫了你一個忙。假設兩種方式對方都能接受，你通常比較先怎麼表達感謝？",
    "kind": "scenario",
    "itemVersion": "clear-94-46-1",
    "choices": [
      {
        "id": "a",
        "text": "找個能回應他需要的小行動，讓他感受到謝意。",
        "value": 1
      },
      {
        "id": "n",
        "text": "把感謝說出來或用行動回應，都是我常先用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "具體說出，我很感謝他幫了什麼。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 5,
    "pair": "EI3",
    "pole": "E",
    "axis": "EI",
    "text": "休息時間遇到聊得來的人，也可以不受打擾地自己休息。哪一種通常比較讓你放鬆？",
    "kind": "scenario",
    "itemVersion": "clear-94-5-1",
    "choices": [
      {
        "id": "a",
        "text": "一起輕鬆聊幾句。",
        "value": 1
      },
      {
        "id": "n",
        "text": "聊幾句或安靜休息，通常都一樣讓我放鬆。",
        "value": 0
      },
      {
        "id": "b",
        "text": "自己安靜休息一會兒。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 17,
    "pair": "SN4",
    "pole": "S",
    "axis": "SN",
    "text": "朋友分享一段新鮮的經歷，你通常比較先想追問哪一類內容？",
    "kind": "scenario",
    "itemVersion": "clear-94-17-1",
    "choices": [
      {
        "id": "a",
        "text": "當時具體發生了什麼，以及事情怎麼進行。",
        "value": 1
      },
      {
        "id": "n",
        "text": "事情的細節或背後的意思，都常是我先想問的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "這段經歷對他有什麼意義，或讓他想到什麼。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 27,
    "pair": "TF4",
    "pole": "T",
    "axis": "TF",
    "text": "要給朋友一份作品的回饋，還沒決定怎麼說之前，你通常先整理哪一類想法？",
    "kind": "scenario",
    "itemVersion": "clear-94-27-1",
    "choices": [
      {
        "id": "a",
        "text": "作品哪些地方符合目標，哪些地方還能調整。",
        "value": 1
      },
      {
        "id": "n",
        "text": "作品和目標的關係或朋友想表達的事，都常是我先整理的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "朋友想透過作品表達什麼，以及哪些部分對他重要。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 37,
    "pair": "JP4",
    "pole": "J",
    "axis": "JP",
    "text": "一天內有幾件小事要做，完成順序不影響別人時，你通常偏好怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-94-37-1",
    "choices": [
      {
        "id": "a",
        "text": "先排好大概的先後順序。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排順序或做完一件再選，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "做完一件後，再選接下來要做的事。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 43,
    "pair": "AO2",
    "pole": "A",
    "axis": "AO",
    "text": "有個不花錢、也不影響別人的小點子，基本做法已經清楚。你通常先做哪一步？",
    "kind": "scenario",
    "itemVersion": "clear-94-43-1",
    "choices": [
      {
        "id": "a",
        "text": "先做一個簡單版本，看看實際效果。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先做簡單版本或再找一個例子，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "再找一個相關例子，了解多一點才動手。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 47,
    "pair": "HC2",
    "pole": "H",
    "axis": "HC",
    "text": "朋友要面對一件有點緊張的事，你想表達支持。假設鼓勵的話或實際協助都合適，你通常比較先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-47-1",
    "choices": [
      {
        "id": "a",
        "text": "直接告訴他，我支持他，也相信他能應對。",
        "value": 1
      },
      {
        "id": "n",
        "text": "說出支持或提供小協助，都是我常先用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "幫他處理一件準備上的小事，讓他省點力。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 8,
    "pair": "EI4",
    "pole": "I",
    "axis": "EI",
    "text": "做完一件讓你很投入、但有點累的事，接下來沒有其他安排。哪一種通常比較能讓你緩過來？",
    "kind": "scenario",
    "itemVersion": "clear-94-8-1",
    "choices": [
      {
        "id": "a",
        "text": "先自己待著，不急著互動。",
        "value": 1
      },
      {
        "id": "n",
        "text": "有人陪或自己待著，通常都一樣能讓我緩過來。",
        "value": 0
      },
      {
        "id": "b",
        "text": "和熟悉的人輕鬆相處一會兒。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 19,
    "pair": "SN5",
    "pole": "N",
    "axis": "SN",
    "text": "有人要向你說明一個不熟悉的概念。哪一種開場通常比較容易讓你跟上？",
    "kind": "scenario",
    "itemVersion": "clear-94-19-1",
    "choices": [
      {
        "id": "a",
        "text": "先交代核心概念，再說它和其他概念的關係。",
        "value": 1
      },
      {
        "id": "n",
        "text": "從例子或概念開始，對我理解的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先舉一個日常例子，再從例子說明。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 30,
    "pair": "TF5",
    "pole": "F",
    "axis": "TF",
    "text": "和朋友討論一個有不同答案的生活問題時，你通常先從哪裡形成自己的看法？",
    "kind": "scenario",
    "itemVersion": "clear-94-30-1",
    "choices": [
      {
        "id": "a",
        "text": "理解不同當事人的價值和處境，看各自重視什麼。",
        "value": 1
      },
      {
        "id": "n",
        "text": "各種說法的理由或當事人的價值，都常是我思考的起點。",
        "value": 0
      },
      {
        "id": "b",
        "text": "比較各種說法的理由，看哪些原則能一致套用。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 40,
    "pair": "JP5",
    "pole": "P",
    "axis": "JP",
    "text": "空出一段完整的自由時間，而且沒有別人的行程要配合。哪種安排通常比較合你的心意？",
    "kind": "scenario",
    "itemVersion": "clear-94-40-1",
    "choices": [
      {
        "id": "a",
        "text": "先留白，到時再選想做的事。",
        "value": 1
      },
      {
        "id": "n",
        "text": "事先安排或當下決定，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "事先知道這段時間大概要做什麼。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 44,
    "pair": "AO2",
    "pole": "O",
    "axis": "AO",
    "text": "想試一種新的筆記方法，已看懂基本步驟，也能隨時換回原本的方法。你通常怎麼開始？",
    "kind": "scenario",
    "itemVersion": "clear-94-44-1",
    "choices": [
      {
        "id": "a",
        "text": "再看一次完整示範，之後再自己試。",
        "value": 1
      },
      {
        "id": "n",
        "text": "直接試一小段或再看一次示範，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "拿一小段內容試著記一次。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 48,
    "pair": "HC2",
    "pole": "C",
    "axis": "HC",
    "text": "和一個你重視的人相處時，你想讓對方感受到自己的重視。假設兩種方式都適合，你通常比較先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-94-48-1",
    "choices": [
      {
        "id": "a",
        "text": "記得他的實際需要，做一件貼心的小事。",
        "value": 1
      },
      {
        "id": "n",
        "text": "把重視說出來或照顧實際需要，都是我常先用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "把欣賞或在乎他的地方說出來。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  }
];
export const EXTENDED_QUESTIONS=[
  {
    "id": 2,
    "pair": "EI1",
    "pole": "I",
    "axis": "EI",
    "text": "有個還沒想清楚的日常小問題，而且不需要別人提供資料。你通常用哪種方式整理想法？",
    "kind": "scenario",
    "itemVersion": "clear-94-2-1",
    "choices": [
      {
        "id": "a",
        "text": "先自己想一想，整理出大概的想法。",
        "value": 1
      },
      {
        "id": "n",
        "text": "邊聊邊想或自己想，對我整理思路的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "找熟悉的人聊一聊，邊說邊整理自己的想法。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 3,
    "pair": "EI2",
    "pole": "E",
    "axis": "EI",
    "text": "週末空出半天，也沒有非做不可的事。假設兩種安排都方便，你通常比較想怎麼過？",
    "kind": "scenario",
    "itemVersion": "clear-94-3-1",
    "choices": [
      {
        "id": "a",
        "text": "和聊得來的人一起度過這半天。",
        "value": 1
      },
      {
        "id": "n",
        "text": "有人作伴或自己度過，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "留給自己，安靜做喜歡的事。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 6,
    "pair": "EI3",
    "pole": "I",
    "axis": "EI",
    "text": "對一件小事有了模糊的感想，不急著得到結論時，你通常怎麼讓想法變清楚？",
    "kind": "scenario",
    "itemVersion": "clear-94-6-1",
    "choices": [
      {
        "id": "a",
        "text": "先自己想或寫下來，再決定要不要分享。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先說出來或自己整理，對我釐清感想的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先說給熟悉的人聽，從談話中整理。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 7,
    "pair": "EI4",
    "pole": "E",
    "axis": "EI",
    "text": "連續幾天大多自己安排生活之後，空閒時你通常比較想要哪一種陪伴方式？",
    "kind": "scenario",
    "itemVersion": "clear-94-7-1",
    "choices": [
      {
        "id": "a",
        "text": "找熟悉的人一起活動或聊天。",
        "value": 1
      },
      {
        "id": "n",
        "text": "找人作伴或繼續自己活動，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "繼續享受自己活動的時間。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 9,
    "pair": "EI5",
    "pole": "E",
    "axis": "EI",
    "text": "今天沒有特別的開心事或煩惱，只想過一個舒服的晚上。假設兩種安排都方便，你通常比較想選哪一種？",
    "kind": "scenario",
    "itemVersion": "clear-94-9-1",
    "choices": [
      {
        "id": "a",
        "text": "和熟悉的人一起吃飯、聊聊日常。",
        "value": 1
      },
      {
        "id": "n",
        "text": "一起吃飯聊天或自己度過，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "自己吃飯，留點安靜的時間。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 10,
    "pair": "EI5",
    "pole": "I",
    "axis": "EI",
    "text": "要整理一段最近的生活經驗，而且不需要他人給建議時，你通常偏好哪種方式？",
    "kind": "scenario",
    "itemVersion": "clear-94-10-1",
    "choices": [
      {
        "id": "a",
        "text": "自己回想或寫下來，先慢慢整理。",
        "value": 1
      },
      {
        "id": "n",
        "text": "談一談或獨自整理，對我梳理經驗的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "和熟悉的人談一談，邊談邊梳理。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 12,
    "pair": "SN1",
    "pole": "S",
    "axis": "SN",
    "text": "朋友介紹一個你不熟悉的地方，哪一種介紹通常比較能幫你形成印象？",
    "kind": "scenario",
    "itemVersion": "clear-94-12-1",
    "choices": [
      {
        "id": "a",
        "text": "當地有哪些具體景物、吃食和活動。",
        "value": 1
      },
      {
        "id": "n",
        "text": "具體見聞或整體特色，對我形成印象的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "整個地方的特色，以及和其他地方的關聯。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 14,
    "pair": "SN2",
    "pole": "S",
    "axis": "SN",
    "text": "拿到一份新活動的介紹，同時有實際流程和活動構想。你通常比較想先了解哪一部分？",
    "kind": "scenario",
    "itemVersion": "clear-94-14-1",
    "choices": [
      {
        "id": "a",
        "text": "參加時會經歷哪些具體步驟和內容。",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際流程或活動構想都常是我先看的，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "整個活動想做什麼，以及各部分怎麼連在一起。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 15,
    "pair": "SN3",
    "pole": "S",
    "axis": "SN",
    "text": "第一次接觸一項興趣，別人可以用兩種方式介紹。哪一種通常比較能幫你理解？",
    "kind": "scenario",
    "itemVersion": "clear-94-15-1",
    "choices": [
      {
        "id": "a",
        "text": "拿一個實際作品，逐處說明它怎麼做。",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際作品或整體架構，對我理解這項興趣的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先說整體架構，讓我知道各種做法之間的關係。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 16,
    "pair": "SN3",
    "pole": "S",
    "axis": "SN",
    "text": "讀一篇介紹陌生主題的文章時，哪一種內容通常比較先抓住你的注意？",
    "kind": "scenario",
    "itemVersion": "clear-94-16-1",
    "choices": [
      {
        "id": "a",
        "text": "具體事例和可以核對的細節。",
        "value": 1
      },
      {
        "id": "n",
        "text": "具體事例或整體觀點，都常先抓住我的注意。",
        "value": 0
      },
      {
        "id": "b",
        "text": "整體觀點和不同事情之間的關聯。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 18,
    "pair": "SN4",
    "pole": "S",
    "axis": "SN",
    "text": "看到一份新資料，還沒有特定任務要完成時，你通常比較先留意什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-18-1",
    "choices": [
      {
        "id": "a",
        "text": "裡面有哪些明確的數字、例子或事實。",
        "value": 1
      },
      {
        "id": "n",
        "text": "個別資料或整體關聯，都常是我先留意的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "這些資料合起來呈現什麼模式或關聯。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 20,
    "pair": "SN5",
    "pole": "S",
    "axis": "SN",
    "text": "回想一次印象深刻的旅行，你通常比較先想起哪一部分？",
    "kind": "scenario",
    "itemVersion": "clear-94-20-1",
    "choices": [
      {
        "id": "a",
        "text": "到過的地方、吃過的東西或某個具體片段。",
        "value": 1
      },
      {
        "id": "n",
        "text": "具體片段或整趟旅行的意義，都常先浮現。",
        "value": 0
      },
      {
        "id": "b",
        "text": "整趟旅行帶來的感受、主題或新的看法。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 22,
    "pair": "TF1",
    "pole": "F",
    "axis": "TF",
    "text": "朋友說最近有件事很煩，想找你聊聊。你通常先把注意力放在哪裡？",
    "kind": "scenario",
    "itemVersion": "clear-94-22-1",
    "choices": [
      {
        "id": "a",
        "text": "這件事讓他有什麼感受，以及他現在需要怎樣的支持。",
        "value": 1
      },
      {
        "id": "n",
        "text": "事情的做法或朋友的感受，都常是我先注意的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "事情卡在哪裡，以及接下來有哪些做法。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 23,
    "pair": "TF2",
    "pole": "T",
    "axis": "TF",
    "text": "討論一項日常約定要不要調整時，你通常先考慮哪一件事？",
    "kind": "scenario",
    "itemVersion": "clear-94-23-1",
    "choices": [
      {
        "id": "a",
        "text": "調整前後的理由，能不能用一致的標準說明。",
        "value": 1
      },
      {
        "id": "n",
        "text": "標準是否一致或相關人的需要，都常是我先考慮的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "這項約定對相關的人各有什麼影響與需要。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 25,
    "pair": "TF3",
    "pole": "T",
    "axis": "TF",
    "text": "兩個熟人對同一件小事有不同看法，請你說說意見。你通常先釐清什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-25-1",
    "choices": [
      {
        "id": "a",
        "text": "雙方各自的理由，以及哪些說法前後一致。",
        "value": 1
      },
      {
        "id": "n",
        "text": "雙方的理由或各自重視的事，都常是我先釐清的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "雙方各自在意什麼，以及為什麼這件事對他重要。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 26,
    "pair": "TF3",
    "pole": "F",
    "axis": "TF",
    "text": "自己在兩個都做得到的選擇之間猶豫時，你通常先問自己哪一個問題？",
    "kind": "scenario",
    "itemVersion": "clear-94-26-1",
    "choices": [
      {
        "id": "a",
        "text": "哪一個選擇比較符合我重視的事與想過的生活？",
        "value": 1
      },
      {
        "id": "n",
        "text": "比較條件或自己重視的事，都常是我思考的起點。",
        "value": 0
      },
      {
        "id": "b",
        "text": "用同一組條件比較，哪一個選擇比較合適？",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 28,
    "pair": "TF4",
    "pole": "F",
    "axis": "TF",
    "text": "一個團體要分配大家都想要的資源。還沒有決定分配方式時，你通常先考慮什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-28-1",
    "choices": [
      {
        "id": "a",
        "text": "每個人的處境和需要有哪些值得納入的差異。",
        "value": 1
      },
      {
        "id": "n",
        "text": "共同標準或每個人的處境，都常是我先考慮的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "能否訂出一個對每個人都一致適用的分配標準。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 29,
    "pair": "TF5",
    "pole": "T",
    "axis": "TF",
    "text": "看完一段有人物衝突的故事，想判斷某個角色的選擇時，你通常先看什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-29-1",
    "choices": [
      {
        "id": "a",
        "text": "他的理由能不能說得通，前後做法是否一致。",
        "value": 1
      },
      {
        "id": "n",
        "text": "理由是否一致或角色重視的事，都常是我判斷的起點。",
        "value": 0
      },
      {
        "id": "b",
        "text": "他當時重視什麼，以及這個選擇對相關的人意味著什麼。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 32,
    "pair": "JP1",
    "pole": "P",
    "axis": "JP",
    "text": "週末想去附近走走，沒有預約或交通上的限制時，你通常怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-94-32-1",
    "choices": [
      {
        "id": "a",
        "text": "先出門，再依當時的興致決定走哪裡。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先定路線或沿路再選，都是我常用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "出門前先決定大致路線和停留的地方。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 33,
    "pair": "JP2",
    "pole": "J",
    "axis": "JP",
    "text": "一件事有一週可以完成，而且兩種做法都來得及。你通常怎麼安排進度？",
    "kind": "scenario",
    "itemVersion": "clear-94-33-1",
    "choices": [
      {
        "id": "a",
        "text": "先把幾個步驟放進大概的時間表。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排時間表或做一段再安排，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先開始做，再依進度安排接下來的步驟。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 35,
    "pair": "JP3",
    "pole": "J",
    "axis": "JP",
    "text": "和熟悉的人安排一個都能配合的聚會，而且不需要提早訂位。你自己通常比較喜歡怎麼定內容？",
    "kind": "scenario",
    "itemVersion": "clear-94-35-1",
    "choices": [
      {
        "id": "a",
        "text": "提早把時間和大致活動定下來。",
        "value": 1
      },
      {
        "id": "n",
        "text": "提早決定或接近當天再選，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先留出時間，活動接近當天再決定。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 36,
    "pair": "JP3",
    "pole": "P",
    "axis": "JP",
    "text": "要準備一份內容由你決定的小分享，時間足夠時，你通常怎麼展開？",
    "kind": "scenario",
    "itemVersion": "clear-94-36-1",
    "choices": [
      {
        "id": "a",
        "text": "先整理有興趣的內容，邊做邊決定大綱。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先定大綱或整理時再成形，都是我常用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先定好大綱，再依大綱整理內容。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 38,
    "pair": "JP4",
    "pole": "P",
    "axis": "JP",
    "text": "假期有幾個都想去的地方，也沒有一定要去的景點時，你通常比較喜歡哪種行程？",
    "kind": "scenario",
    "itemVersion": "clear-94-38-1",
    "choices": [
      {
        "id": "a",
        "text": "先保留幾個選項，到時再決定去哪裡。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排行程或到時再選，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先排出每天大概要去的地方。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 39,
    "pair": "JP5",
    "pole": "J",
    "axis": "JP",
    "text": "要完成一個自己能掌握的小作品，過程沒有固定規格時，你通常怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-94-39-1",
    "choices": [
      {
        "id": "a",
        "text": "先決定主要步驟，再照著往下做。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先定步驟或做一段再調整，我都常用，沒有明顯偏向。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先做出一部分，再決定後面怎麼發展。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  }
];
export const FOLLOWUP_QUESTIONS=[
  {
    "id": 101,
    "pair": "EIX",
    "pole": "E",
    "axis": "EI",
    "text": "空閒時想讓自己精神好一點，而且找熟人作伴或自己活動都方便。你通常比較想選哪一種？",
    "kind": "scenario",
    "itemVersion": "clear-94-101-1",
    "choices": [
      {
        "id": "a",
        "text": "和熟悉的人一起做點輕鬆的事。",
        "value": 1
      },
      {
        "id": "n",
        "text": "有人作伴或自己活動，對我提振精神的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "自己做點喜歡的事，暫時不和人互動。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 102,
    "pair": "EIX",
    "pole": "I",
    "axis": "EI",
    "text": "要想清楚一個沒有標準答案的小問題，也不需要補充資料。你通常比較偏好哪種思考方式？",
    "kind": "scenario",
    "itemVersion": "clear-94-102-1",
    "choices": [
      {
        "id": "a",
        "text": "留一段自己的時間，先安靜想清楚。",
        "value": 1
      },
      {
        "id": "n",
        "text": "交換想法或獨自思考，對我想清楚的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "和熟悉的人交換想法，邊說邊想。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 103,
    "pair": "SNX",
    "pole": "S",
    "axis": "SN",
    "text": "別人介紹一件你從沒接觸過的事。哪種說明通常比較能讓你開始理解？",
    "kind": "scenario",
    "itemVersion": "clear-94-103-1",
    "choices": [
      {
        "id": "a",
        "text": "先說一個具體案例，讓我知道實際是什麼樣子。",
        "value": 1
      },
      {
        "id": "n",
        "text": "從案例或整體概念開始，對我理解的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先說整體概念，讓我知道它在處理什麼問題。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 104,
    "pair": "SNX",
    "pole": "N",
    "axis": "SN",
    "text": "看完一篇介紹新事物的短文，你通常比較先想接著了解什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-104-1",
    "choices": [
      {
        "id": "a",
        "text": "它還能延伸出哪些可能，以及和其他事物有什麼關聯。",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際用法或延伸的可能，都是我常先想了解的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "它在實際生活中有哪些具體用法和例子。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 105,
    "pair": "TFX",
    "pole": "T",
    "axis": "TF",
    "text": "團體在討論兩個都合理的做法，還沒形成結論時，你通常先檢視什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-105-1",
    "choices": [
      {
        "id": "a",
        "text": "兩個做法的理由，是否能用同一套條件比較。",
        "value": 1
      },
      {
        "id": "n",
        "text": "比較條件或成員重視的事，都是我常先檢視的。",
        "value": 0
      },
      {
        "id": "b",
        "text": "兩個做法各自照顧到哪些成員重視的事。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 106,
    "pair": "TFX",
    "pole": "F",
    "axis": "TF",
    "text": "回想自己做過的一個日常選擇，想判斷它合不合適時，你通常先從哪裡看？",
    "kind": "scenario",
    "itemVersion": "clear-94-106-1",
    "choices": [
      {
        "id": "a",
        "text": "它是否符合我重視的事，以及對相關的人有什麼意義。",
        "value": 1
      },
      {
        "id": "n",
        "text": "理由是否說得通或是否符合重視的事，都是我常用的起點。",
        "value": 0
      },
      {
        "id": "b",
        "text": "當時使用的理由和標準，現在看是否仍說得通。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 107,
    "pair": "JPX",
    "pole": "J",
    "axis": "JP",
    "text": "接下來有兩小時，可以處理幾件不急的小事。順序能自由決定時，你通常怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-94-107-1",
    "choices": [
      {
        "id": "a",
        "text": "先決定大概要做哪幾件、順序如何。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排順序或做完再選，都是我常用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先挑一件開始，其他的做完再選。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 108,
    "pair": "JPX",
    "pole": "P",
    "axis": "JP",
    "text": "一個可以慢慢完成的興趣計畫，內容和進度都由你決定。你通常比較喜歡怎麼推進？",
    "kind": "scenario",
    "itemVersion": "clear-94-108-1",
    "choices": [
      {
        "id": "a",
        "text": "先做有興趣的部分，再決定後續方向。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先定路線或邊做邊決定，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先畫出大概路線，再依路線往下做。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 109,
    "pair": "AOX",
    "pole": "A",
    "axis": "AO",
    "text": "想在不重要的練習檔試一個新功能，已知道基本操作，也確定能復原。你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-109-1",
    "choices": [
      {
        "id": "a",
        "text": "先操作一次，從結果了解這個功能。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先試一次或再看一段教學，都是我常用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "再看一段教學，了解多一點再操作。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 110,
    "pair": "AOX",
    "pole": "O",
    "axis": "AO",
    "text": "想試一個不花錢的新習慣，基本做法已清楚，一天的嘗試也不影響原本安排。你通常怎麼開始？",
    "kind": "scenario",
    "itemVersion": "clear-94-110-1",
    "choices": [
      {
        "id": "a",
        "text": "再了解一個人的使用經驗，之後再試一天。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先試一天或再了解一個人的經驗，都是我常用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先試一天，看看自己實際用起來如何。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 111,
    "pair": "HCX",
    "pole": "H",
    "axis": "HC",
    "text": "你留意到熟悉的人最近付出不少，想讓他感受到肯定。假設兩種方式都合適，你通常比較先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-94-111-1",
    "choices": [
      {
        "id": "a",
        "text": "直接說出，我欣賞他哪些付出。",
        "value": 1
      },
      {
        "id": "n",
        "text": "說出欣賞或分擔一件事，都是我常先用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "主動分擔一件他正在做的事，回應他的付出。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  },
  {
    "id": 112,
    "pair": "HCX",
    "pole": "C",
    "axis": "HC",
    "text": "和重視的人一段時間沒聯絡，你想重新表達關心。假設兩種方式對方都歡迎，你通常比較先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-94-112-1",
    "choices": [
      {
        "id": "a",
        "text": "做一件他用得上的小事，例如提供他剛好需要的資訊。",
        "value": 1
      },
      {
        "id": "n",
        "text": "說出關心或提供一個合適的幫忙，都是我常先用的方式。",
        "value": 0
      },
      {
        "id": "b",
        "text": "傳一句話，直接告訴他我有想到他、關心近況。",
        "value": -1
      }
    ],
    "neutralRationale": "與兩側回答使用相同情境及作答角度，明確表示偏好、效用或慣用起點沒有明顯差異；不以不確定或兼做兩件事推定中點。"
  }
];
