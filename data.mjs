export const QUESTIONNAIRE_VERSION='custom-clear-4.0.0-beta.8';
export const SCORING_VERSION='six-axis-valid-5.0.0';
export const SCHEMA_VERSION='5.0';
export const BASE_COUNT=24;
export const MAX_COUNT=60;
export const AXES=[
  {
    "key": "EI",
    "left": "E",
    "right": "I",
    "name": "能量取向",
    "leftName": "互動充電",
    "rightName": "獨處整理",
    "leftDescription": "你較常透過互動，整理想法、恢復精神。",
    "rightDescription": "你較常透過獨處，整理想法、恢復精神。"
  },
  {
    "key": "SN",
    "left": "S",
    "right": "N",
    "name": "資訊接收",
    "leftName": "具體資訊",
    "rightName": "整體可能",
    "leftDescription": "你較常先從例子、細節與可確認的資訊理解事情。",
    "rightDescription": "你較常先從概念、關聯與可能性理解事情。"
  },
  {
    "key": "TF",
    "left": "T",
    "right": "F",
    "name": "決策考量",
    "leftName": "一致標準",
    "rightName": "價值脈絡",
    "leftDescription": "你較常先比較標準、理由與前後一致性。",
    "rightDescription": "你較常先比較價值、人際脈絡與當事人的影響。"
  },
  {
    "key": "JP",
    "left": "J",
    "right": "P",
    "name": "安排方式",
    "leftName": "先有結構",
    "rightName": "保留彈性",
    "leftDescription": "你較常先確定順序與安排，再往下進行。",
    "rightDescription": "你較常保留選項，隨新資訊調整安排。"
  },
  {
    "key": "AO",
    "left": "A",
    "right": "O",
    "name": "行動門檻",
    "leftName": "先小步試行",
    "rightName": "先確認風險",
    "leftDescription": "在可回頭的情況下，你較常先試行、再調整。",
    "rightDescription": "你較常先確認重要未知與風險，再開始行動。"
  },
  {
    "key": "HC",
    "left": "H",
    "right": "C",
    "name": "關心表達",
    "leftName": "直接表達",
    "rightName": "空間與支持",
    "leftDescription": "你較常直接表達關心、肯定與感謝。",
    "rightDescription": "你較常透過空間、可靠行動與實際支持表達重視。"
  }
];
export const BASE_QUESTIONS=[
  {
    "id": 1,
    "pair": "EI1",
    "pole": "E",
    "axis": "EI",
    "text": "週末自己在家待了大半天，接下來也沒有非做不可的事，你比較想怎麼過？",
    "kind": "scenario",
    "itemVersion": "clear-8-1-1",
    "choices": [
      {
        "id": "a",
        "text": "約個聊得來的人碰面，一起吃點東西、聊聊天。",
        "value": 1
      },
      {
        "id": "n",
        "text": "一起聊天或自己放鬆，這時對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "繼續留一段自己的時間，安靜看劇、散步或做自己喜歡的事。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 11,
    "pair": "SN1",
    "pole": "S",
    "axis": "SN",
    "text": "第一次用陌生的工具，只有十分鐘可以先摸一下，你通常從哪裡開始？",
    "kind": "scenario",
    "itemVersion": "clear-8-11-1",
    "choices": [
      {
        "id": "a",
        "text": "找一個實際範例，照著操作看看每一步會發生什麼。",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際範例和功能全貌，對我入門的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先了解它在解決什麼問題，以及各功能之間的關係。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 21,
    "pair": "TF1",
    "pole": "T",
    "axis": "TF",
    "text": "一起做事的人遇到問題、情緒也不太好，但現在時間有限，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-21-1",
    "choices": [
      {
        "id": "a",
        "text": "先問清楚發生什麼事，找出原因和能處理的步驟。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先釐清問題或先理解感受，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先聽對方現在的感受與需要，再決定怎麼談處理方式。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 31,
    "pair": "JP1",
    "pole": "J",
    "axis": "JP",
    "text": "週末有幾件事要處理，但時間可以自己安排，你通常怎麼開始？",
    "kind": "scenario",
    "itemVersion": "clear-8-31-1",
    "choices": [
      {
        "id": "a",
        "text": "先列出順序和大概時間，再一件一件做。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排順序或到時候再選，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先看當下精神和狀況，決定現在最想先做哪件。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 41,
    "pair": "AO1",
    "pole": "A",
    "axis": "AO",
    "text": "有個做法看起來可行，已知資訊也差不多夠了，而且之後能改，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-41-1",
    "choices": [
      {
        "id": "a",
        "text": "先做一個小版本，看看結果再調整。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先小試或先再確認一輪，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "再把重要假設和可能風險確認一輪，之後才開始。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 45,
    "pair": "HC1",
    "pole": "H",
    "axis": "HC",
    "text": "發現熟人最近不太順，但你還不知道能幫什麼，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-45-1",
    "choices": [
      {
        "id": "a",
        "text": "主動問問「最近還好嗎？想聊的話我在。」",
        "value": 1
      },
      {
        "id": "n",
        "text": "直接問候和用空間、行動支持，對我表達關心都差不多自然。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先不追問，留意對方需要什麼，適時提供實際協助。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 4,
    "pair": "EI2",
    "pole": "I",
    "axis": "EI",
    "text": "遇到還沒理清的想法，哪種過程通常比較能幫你形成思路？",
    "kind": "scenario",
    "itemVersion": "clear-8-4-1",
    "choices": [
      {
        "id": "a",
        "text": "找熟人來回聊，邊說邊整理想法。",
        "value": -1
      },
      {
        "id": "n",
        "text": "自己想或找人聊，對我釐清思路的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先自己安靜想一輪，有個方向再交流。",
        "value": 1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 13,
    "pair": "SN2",
    "pole": "N",
    "axis": "SN",
    "text": "接到一件資訊很多的新任務，你通常先怎麼整理？",
    "kind": "scenario",
    "itemVersion": "clear-8-13-1",
    "choices": [
      {
        "id": "a",
        "text": "先畫出整體方向，看看各部分怎麼互相影響。",
        "value": 1
      },
      {
        "id": "n",
        "text": "整體關係或具體要求，我都差不多常先整理。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先列出已確定的資料、要求和必須完成的項目。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 24,
    "pair": "TF2",
    "pole": "F",
    "axis": "TF",
    "text": "要在兩個可行的安排中選一個，但沒辦法同時兼顧所有人，你通常先比較什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-24-1",
    "choices": [
      {
        "id": "a",
        "text": "哪些人會受到什麼影響，哪個安排較符合他們的實際需要。",
        "value": 1
      },
      {
        "id": "n",
        "text": "當事人的需要與一致標準，對我的選擇分量差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "哪個安排比較符合前後一致、對所有人同樣適用的標準。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 34,
    "pair": "JP2",
    "pole": "P",
    "axis": "JP",
    "text": "去一個交通和住宿都不難處理的地方玩，你比較想帶著哪種行程出發？",
    "kind": "scenario",
    "itemVersion": "clear-8-34-1",
    "choices": [
      {
        "id": "a",
        "text": "只有必要安排，想去哪裡就到時候看心情和現場決定。",
        "value": 1
      },
      {
        "id": "n",
        "text": "到現場決定或帶著主要行程，我都差不多自在。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先排好主要景點和移動順序，照著玩比較輕鬆。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 42,
    "pair": "AO1",
    "pole": "O",
    "axis": "AO",
    "text": "眼前這個決定之後能改，但還有一項可能影響結果的重要資訊不清楚，你通常怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-42-1",
    "choices": [
      {
        "id": "a",
        "text": "先把那項資訊查清楚，再決定要不要開始。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先查清資訊或先小範圍試，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先用影響很小的方式試一次，從結果補上未知資訊。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 46,
    "pair": "HC1",
    "pole": "C",
    "axis": "HC",
    "text": "朋友看起來心情低落，但沒有主動提起，你通常怎麼陪他？",
    "kind": "scenario",
    "itemVersion": "clear-8-46-1",
    "choices": [
      {
        "id": "a",
        "text": "先給他一點空間，從陪做事情或幫小忙開始支持。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先給空間或主動問候，對我陪伴朋友都差不多自然。",
        "value": 0
      },
      {
        "id": "b",
        "text": "主動說出自己的關心，問他願不願意談談最近的事。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 5,
    "pair": "EI3",
    "pole": "E",
    "axis": "EI",
    "text": "到了一個大多數人都不熟的聚會，還沒正式開始，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-5-1",
    "choices": [
      {
        "id": "a",
        "text": "先和旁邊的人聊幾句，聊起來會比較自在。",
        "value": 1
      },
      {
        "id": "n",
        "text": "主動聊天或先自己熟悉環境，都差不多讓我自在。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先安靜熟悉環境，等自己準備好或有人來聊再接話。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 17,
    "pair": "SN4",
    "pole": "S",
    "axis": "SN",
    "text": "剛看完一部內容豐富的電影，朋友問你想聊哪裡，你通常先聊什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-17-1",
    "choices": [
      {
        "id": "a",
        "text": "角色做了哪些事，哪些情節和線索接在一起。",
        "value": 1
      },
      {
        "id": "n",
        "text": "情節線索或故事解讀，我都差不多常先聊。",
        "value": 0
      },
      {
        "id": "b",
        "text": "故事的象徵、其他解讀，以及它延伸出的想法。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 27,
    "pair": "TF4",
    "pole": "T",
    "axis": "TF",
    "text": "大家原本有一套共同規則，但這次有人遇到特殊困難，你通常先怎麼判斷？",
    "kind": "scenario",
    "itemVersion": "clear-8-27-1",
    "choices": [
      {
        "id": "a",
        "text": "先確認同樣情況能否都用同一標準，避免只替某個人例外。",
        "value": 1
      },
      {
        "id": "n",
        "text": "共同標準和特殊處境，對我的判斷分量差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先了解對方的實際處境，再想這次規則可以怎麼調整。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 37,
    "pair": "JP4",
    "pole": "J",
    "axis": "JP",
    "text": "接到一件有明確期限的工作，時間還算夠，你通常怎麼抓完成時間？",
    "kind": "scenario",
    "itemVersion": "clear-8-37-1",
    "choices": [
      {
        "id": "a",
        "text": "替自己訂一個早於期限的完成日，先做完再留時間檢查。",
        "value": 1
      },
      {
        "id": "n",
        "text": "提早定稿或接近期限再收尾，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先保留調整空間，等較接近期限再定下最後版本。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 43,
    "pair": "AO2",
    "pole": "A",
    "axis": "AO",
    "text": "大家已討論出一個可行、也能回頭修改的做法，但還沒人開始推進，你通常先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-43-1",
    "choices": [
      {
        "id": "a",
        "text": "說出自己選哪個做法，提議先做一個小步驟。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先推一小步或先核對風險，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先把主要風險和還沒釐清的條件確認好，再決定下一步。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 47,
    "pair": "HC2",
    "pole": "H",
    "axis": "HC",
    "text": "剛和別人順利完成一件事，對方應該也知道自己做得不錯，你通常怎麼回應？",
    "kind": "scenario",
    "itemVersion": "clear-8-47-1",
    "choices": [
      {
        "id": "a",
        "text": "直接說出哪裡做得好，向對方表達感謝。",
        "value": 1
      },
      {
        "id": "n",
        "text": "說出感謝和用後續行動肯定，對我都差不多自然。",
        "value": 0
      },
      {
        "id": "b",
        "text": "把後續交接和配合做好，用可靠的行動表示肯定。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 8,
    "pair": "EI4",
    "pole": "I",
    "axis": "EI",
    "text": "工作或讀書暫告一段落，休息後還要繼續專心。你通常比較想怎麼調整？",
    "kind": "scenario",
    "itemVersion": "clear-8-8-1",
    "choices": [
      {
        "id": "a",
        "text": "找個不被打擾的地方，自己安靜整理一下。",
        "value": 1
      },
      {
        "id": "n",
        "text": "安靜獨處或和熟人互動，對我重新專心的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "和聊得來的人互動一下，讓精神重新活起來。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 19,
    "pair": "SN5",
    "pole": "N",
    "axis": "SN",
    "text": "一場討論剛結束，你要留下自己的筆記，通常先記什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-19-1",
    "choices": [
      {
        "id": "a",
        "text": "討論形成的主要概念、彼此關係和後續問題。",
        "value": 1
      },
      {
        "id": "n",
        "text": "主要概念和具體內容，我都差不多常先記。",
        "value": 0
      },
      {
        "id": "b",
        "text": "談到的事項、數據、例子，以及實際發生的內容。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 30,
    "pair": "TF5",
    "pole": "F",
    "axis": "TF",
    "text": "兩個都有理由的方案必須選一個，你通常先用什麼問題幫自己決定？",
    "kind": "scenario",
    "itemVersion": "clear-8-30-1",
    "choices": [
      {
        "id": "a",
        "text": "「哪個較符合我重視的事，也比較回應這些人的需要？」",
        "value": 1
      },
      {
        "id": "n",
        "text": "價值與需要，或相同情況的一致標準，對我分量差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "「哪個能讓相同情況都用相同理由判斷，不因人而改？」",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 40,
    "pair": "JP5",
    "pole": "P",
    "axis": "JP",
    "text": "今天的安排突然改了，但沒有造成危險或重大損失，你通常怎麼接下去？",
    "kind": "scenario",
    "itemVersion": "clear-8-40-1",
    "choices": [
      {
        "id": "a",
        "text": "先跟著眼前的狀況走，做到哪裡再調整下一步。",
        "value": 1
      },
      {
        "id": "n",
        "text": "邊做邊調整或先重排順序，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先停一下，把新的順序和時間重新排好再繼續。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 44,
    "pair": "AO2",
    "pole": "O",
    "axis": "AO",
    "text": "團隊已有一個能小範圍試行的做法，現在要決定是否開始，你通常先關注哪裡？",
    "kind": "scenario",
    "itemVersion": "clear-8-44-1",
    "choices": [
      {
        "id": "a",
        "text": "先確認重要風險與停止條件，補齊後再啟動。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先確認風險或先做最小測試，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先試最小、可撤回的一步，再看結果決定是否擴大。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 48,
    "pair": "HC2",
    "pole": "C",
    "axis": "HC",
    "text": "一位夥伴幫了很大的忙，你想讓他知道你很重視這次合作，通常先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-48-1",
    "choices": [
      {
        "id": "a",
        "text": "把承諾的事做好、後續主動配合，讓他感受到自己的可靠。",
        "value": 1
      },
      {
        "id": "n",
        "text": "用行動表示重視或直接說出感謝，對我都差不多自然。",
        "value": 0
      },
      {
        "id": "b",
        "text": "找個合適的時機，清楚告訴他這次幫忙對自己有多重要。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  }
];
export const EXTENDED_QUESTIONS=[
  {
    "id": 2,
    "pair": "EI1",
    "pole": "I",
    "axis": "EI",
    "text": "和一群熟人開心聚了幾個小時，大家又提議續攤，你通常會怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-8-2-1",
    "choices": [
      {
        "id": "a",
        "text": "先離開熱鬧的場合，自己安靜一下再說。",
        "value": 1
      },
      {
        "id": "n",
        "text": "續攤或自己休息，對我接下來的精神狀態差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "還想繼續聊，就跟大家一起去下一攤。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 3,
    "pair": "EI2",
    "pole": "E",
    "axis": "EI",
    "text": "你有一個還很模糊的點子，想把它想清楚，通常會先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-3-1",
    "choices": [
      {
        "id": "a",
        "text": "找人聊聊，邊講邊發現自己真正想說什麼。",
        "value": 1
      },
      {
        "id": "n",
        "text": "邊聊邊想或先自己整理，對我形成想法的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先自己把想法整理成形，再拿給別人看。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 6,
    "pair": "EI3",
    "pole": "I",
    "axis": "EI",
    "text": "朋友帶你去一個陌生的聚會，朋友暫時去忙了，這時你通常怎麼待著？",
    "kind": "scenario",
    "itemVersion": "clear-8-6-1",
    "choices": [
      {
        "id": "a",
        "text": "先看現場在做什麼，自己熟悉一下再決定要不要加入。",
        "value": 1
      },
      {
        "id": "n",
        "text": "自己熟悉現場或主動搭話，這時對我差不多自在。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先找附近的人搭話，讓自己快點融入現場。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 7,
    "pair": "EI4",
    "pole": "E",
    "axis": "EI",
    "text": "工作或讀書開始提不起勁，剛好能休息一下，你比較想怎麼恢復精神？",
    "kind": "scenario",
    "itemVersion": "clear-8-7-1",
    "choices": [
      {
        "id": "a",
        "text": "找人聊幾句或一起走走，換個互動氣氛。",
        "value": 1
      },
      {
        "id": "n",
        "text": "和人互動或自己休息，對我恢復精神的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "暫時不聊天，自己安靜休息或散步。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 9,
    "pair": "EI5",
    "pole": "E",
    "axis": "EI",
    "text": "平日突然空出兩個小時，朋友也剛好有空，你比較想怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-8-9-1",
    "choices": [
      {
        "id": "a",
        "text": "問朋友要不要一起吃飯、散步或做點事情。",
        "value": 1
      },
      {
        "id": "n",
        "text": "和朋友碰面或把時間留給自己，我都差不多想選。",
        "value": 0
      },
      {
        "id": "b",
        "text": "把這段時間留給自己，做原本想做的事。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 10,
    "pair": "EI5",
    "pole": "I",
    "axis": "EI",
    "text": "忙完一陣子，終於有一個沒有安排的晚上，你比較想怎麼過？",
    "kind": "scenario",
    "itemVersion": "clear-8-10-1",
    "choices": [
      {
        "id": "a",
        "text": "自己看影片、做自己喜歡的事，好好享受不必互動的時間。",
        "value": 1
      },
      {
        "id": "n",
        "text": "自己放鬆或與熟人相處，這晚對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "找個熟人一起吃飯聊天，讓這晚多一點互動。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 12,
    "pair": "SN1",
    "pole": "S",
    "axis": "SN",
    "text": "朋友請你解釋一個你很熟的主題，你通常會怎麼開頭？",
    "kind": "scenario",
    "itemVersion": "clear-8-12-1",
    "choices": [
      {
        "id": "a",
        "text": "先講一個實際例子，再一步一步補上細節。",
        "value": 1
      },
      {
        "id": "n",
        "text": "例子或整體概念，我都差不多常拿來開頭。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先說整個概念在談什麼，再用例子說明。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 14,
    "pair": "SN2",
    "pole": "S",
    "axis": "SN",
    "text": "朋友問你上次旅行怎麼樣，你通常會先分享哪一部分？",
    "kind": "scenario",
    "itemVersion": "clear-8-14-1",
    "choices": [
      {
        "id": "a",
        "text": "去了哪些地方、做了什麼，以及印象深刻的小細節。",
        "value": 1
      },
      {
        "id": "n",
        "text": "旅途細節和帶來的想法，我都差不多常先分享。",
        "value": 0
      },
      {
        "id": "b",
        "text": "這趟旅行讓你想到什麼，以及不同經驗之間的連結。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 15,
    "pair": "SN3",
    "pole": "S",
    "axis": "SN",
    "text": "有人提出一個還沒談到執行方式的新點子，你通常先接著想什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-15-1",
    "choices": [
      {
        "id": "a",
        "text": "找找已知資料或以前的例子，看看它像哪一種做法。",
        "value": 1
      },
      {
        "id": "n",
        "text": "對照舊例或延伸新可能，我都差不多常先想到。",
        "value": 0
      },
      {
        "id": "b",
        "text": "想想它還能往哪裡發展，有哪些目前沒提到的可能。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 16,
    "pair": "SN3",
    "pole": "S",
    "axis": "SN",
    "text": "看一篇資訊量很大的文章，你通常怎麼幫自己抓重點？",
    "kind": "scenario",
    "itemVersion": "clear-8-16-1",
    "choices": [
      {
        "id": "a",
        "text": "先標出事實、例子和發生順序，逐項整理。",
        "value": 1
      },
      {
        "id": "n",
        "text": "逐項事實和整體架構，對我抓重點的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先畫出主題之間的關係，再回頭補進細節。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 18,
    "pair": "SN4",
    "pole": "S",
    "axis": "SN",
    "text": "有人向你描述一個你不熟的問題，你通常先追問哪一句？",
    "kind": "scenario",
    "itemVersion": "clear-8-18-1",
    "choices": [
      {
        "id": "a",
        "text": "「可以講一個實際發生的例子，從頭說給我聽嗎？」",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際例子或事情的關聯，我都差不多常先問。",
        "value": 0
      },
      {
        "id": "b",
        "text": "「這件事和其他問題怎麼連在一起？有什麼共同模式？」",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 20,
    "pair": "SN5",
    "pole": "S",
    "axis": "SN",
    "text": "剛學完一個新概念，你通常會先用哪種方式確認自己懂了？",
    "kind": "scenario",
    "itemVersion": "clear-8-20-1",
    "choices": [
      {
        "id": "a",
        "text": "拿一個實際案例，逐步說清楚它怎麼運作。",
        "value": 1
      },
      {
        "id": "n",
        "text": "說明案例和連結其他概念，都差不多能讓我確認理解。",
        "value": 0
      },
      {
        "id": "b",
        "text": "把它和其他概念連起來，推想還能用在哪些地方。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 22,
    "pair": "TF1",
    "pole": "F",
    "axis": "TF",
    "text": "朋友因為一件事很困擾，你們現在只能先談一下，你通常怎麼開頭？",
    "kind": "scenario",
    "itemVersion": "clear-8-22-1",
    "choices": [
      {
        "id": "a",
        "text": "先問他哪裡最難受、最需要什麼，從他的處境談起。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先聽心情或先談處理方向，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先把事情的原因和可行做法列清楚，讓問題有個方向。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 23,
    "pair": "TF2",
    "pole": "T",
    "axis": "TF",
    "text": "兩個方案都做得到，但一個較符合統一規則，另一個較照顧這次受影響的人，你通常怎麼選？",
    "kind": "scenario",
    "itemVersion": "clear-8-23-1",
    "choices": [
      {
        "id": "a",
        "text": "先用同一套條件比較，優先選能讓大家一致適用的方案。",
        "value": 1
      },
      {
        "id": "n",
        "text": "一致標準與這次人員的需要，對我的取捨分量差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先看這次對哪些人有什麼影響，再決定規則怎麼用。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 25,
    "pair": "TF3",
    "pole": "T",
    "axis": "TF",
    "text": "收到一份內容有根據、但語氣讓你不舒服的回饋，你通常先處理哪一部分？",
    "kind": "scenario",
    "itemVersion": "clear-8-25-1",
    "choices": [
      {
        "id": "a",
        "text": "先把說得有道理、需要修改的地方列出來。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先處理內容或先談溝通，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先把溝通方式和彼此感受談開，再繼續討論內容。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 26,
    "pair": "TF3",
    "pole": "F",
    "axis": "TF",
    "text": "對方提出的建議有道理，但說法讓你難以繼續對話，你通常會怎麼接？",
    "kind": "scenario",
    "itemVersion": "clear-8-26-1",
    "choices": [
      {
        "id": "a",
        "text": "先說清楚自己怎麼接收到這些話，找個彼此能談下去的方式。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先談溝通方式或先回應內容，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先回應建議內容，核對理由與需要調整的地方。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 28,
    "pair": "TF4",
    "pole": "F",
    "axis": "TF",
    "text": "照原來的規定處理，會讓這次遇到困難的人更難受，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-28-1",
    "choices": [
      {
        "id": "a",
        "text": "先了解他卡在哪裡，依這次的處境調整做法。",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際處境和一致原則，對我的判斷分量差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先確認規定的理由和適用條件，再按一致原則決定。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 29,
    "pair": "TF5",
    "pole": "T",
    "axis": "TF",
    "text": "兩個做法都有資料支持，但「維持一致標準」和「照顧這次的需求」無法全兼顧，你通常先守住什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-29-1",
    "choices": [
      {
        "id": "a",
        "text": "先守住同類情況都能適用的判斷標準。",
        "value": 1
      },
      {
        "id": "n",
        "text": "一致標準與這次的實際需要，對我的取捨分量差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先守住自己重視的價值，以及這次當事人的需要。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 32,
    "pair": "JP1",
    "pole": "P",
    "axis": "JP",
    "text": "今天有幾件都得做、但先後順序不受限制的事，你通常怎麼安排？",
    "kind": "scenario",
    "itemVersion": "clear-8-32-1",
    "choices": [
      {
        "id": "a",
        "text": "到時候看自己的狀態和現場狀況，再決定先做哪件。",
        "value": 1
      },
      {
        "id": "n",
        "text": "當下再選或事先排好，對我安排這天都差不多自在。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先把整天的處理順序排出來，照著往下做。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 33,
    "pair": "JP2",
    "pole": "J",
    "axis": "JP",
    "text": "準備一趟沒有特殊限制的旅行，你比較想怎麼安排出發前的功課？",
    "kind": "scenario",
    "itemVersion": "clear-8-33-1",
    "choices": [
      {
        "id": "a",
        "text": "先確定住宿、交通和重要行程，到了當地比較安心。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排主要行程或到現場再選，都差不多讓我安心。",
        "value": 0
      },
      {
        "id": "b",
        "text": "只確認必要的住處與交通，其他到現場再慢慢決定。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 35,
    "pair": "JP3",
    "pole": "J",
    "axis": "JP",
    "text": "有件不急、但一直還沒定下來的事掛在心上，你通常會怎麼處理？",
    "kind": "scenario",
    "itemVersion": "clear-8-35-1",
    "choices": [
      {
        "id": "a",
        "text": "找個時間把選項比較完，先做決定，讓它告一段落。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先定下來或繼續留著選項，對我放下這件事差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先保留幾種可能，等後面有新想法再決定。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 36,
    "pair": "JP3",
    "pole": "P",
    "axis": "JP",
    "text": "一個決定還有時間慢慢想，目前也有幾個不錯的選項，你通常怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-36-1",
    "choices": [
      {
        "id": "a",
        "text": "先把幾個選項留著，看看之後會不會出現新想法。",
        "value": 1
      },
      {
        "id": "n",
        "text": "繼續保留或現在選定，我都差不多自在。",
        "value": 0
      },
      {
        "id": "b",
        "text": "趁現在比較清楚就選定一個，接著往下安排。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 38,
    "pair": "JP4",
    "pole": "P",
    "axis": "JP",
    "text": "一份成果還有一段時間才要交，期間可能出現新想法，你通常怎麼推進？",
    "kind": "scenario",
    "itemVersion": "clear-8-38-1",
    "choices": [
      {
        "id": "a",
        "text": "先邊做邊試不同可能，接近期限再收成最後版本。",
        "value": 1
      },
      {
        "id": "n",
        "text": "接近期限才定稿或提早完成，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先排好各階段，提早把版本定下來再做檢查。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 39,
    "pair": "JP5",
    "pole": "J",
    "axis": "JP",
    "text": "原本排好的半天行程突然被打亂，你通常先做什麼？",
    "kind": "scenario",
    "itemVersion": "clear-8-39-1",
    "choices": [
      {
        "id": "a",
        "text": "先重新排出剩下事情的順序，知道接下來怎麼走。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先重排行程或先做眼前的事，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先處理眼前能做的事，其他邊走邊決定。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  }
];
export const FOLLOWUP_QUESTIONS=[
  {
    "id": 101,
    "pair": "EIX",
    "pole": "E",
    "axis": "EI",
    "text": "忙了一週，週末突然多出半天空檔，熟人也有空，你第一個比較想做的安排是？",
    "kind": "scenario",
    "itemVersion": "clear-8-101-1",
    "choices": [
      {
        "id": "a",
        "text": "約熟人見面，邊吃東西邊聊近況。",
        "value": 1
      },
      {
        "id": "n",
        "text": "約人見面或獨自放鬆，對我這半天的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "把半天留給自己，安靜做喜歡的事。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 102,
    "pair": "EIX",
    "pole": "I",
    "axis": "EI",
    "text": "和熟人互動幾小時後，接下來沒有其他安排。哪種方式通常能讓你恢復精神？",
    "kind": "scenario",
    "itemVersion": "clear-8-102-1",
    "choices": [
      {
        "id": "a",
        "text": "先自己安靜待一會兒。",
        "value": 1
      },
      {
        "id": "n",
        "text": "獨處或繼續互動，對我恢復精神的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "繼續輕鬆聊天或一起活動。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 103,
    "pair": "SNX",
    "pole": "S",
    "axis": "SN",
    "text": "朋友介紹一個你不熟的新計畫，你最想先請他補哪一種說明？",
    "kind": "scenario",
    "itemVersion": "clear-8-103-1",
    "choices": [
      {
        "id": "a",
        "text": "「給我看一個實際會怎麼做、最後會長怎樣的例子。」",
        "value": 1
      },
      {
        "id": "n",
        "text": "實際例子和概念全貌，對我理解這個計畫的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "「先畫一下主要構想和各部分的關係，讓我抓到全貌。」",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 104,
    "pair": "SNX",
    "pole": "N",
    "axis": "SN",
    "text": "遇到一段不太熟的資訊，你通常會先用什麼方法理解？",
    "kind": "scenario",
    "itemVersion": "clear-8-104-1",
    "choices": [
      {
        "id": "a",
        "text": "找出它的共同模式，想想和自己已知的東西怎麼連結。",
        "value": 1
      },
      {
        "id": "n",
        "text": "找共同模式和逐項對照，對我理解這段資訊的幫助差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "把抽象說法換成實際情境，一項一項看懂。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 105,
    "pair": "TFX",
    "pole": "T",
    "axis": "TF",
    "text": "熟人做了一個會影響大家的錯誤決定，你準備和他談，通常先怎麼開口？",
    "kind": "scenario",
    "itemVersion": "clear-8-105-1",
    "choices": [
      {
        "id": "a",
        "text": "先說清楚決定哪裡出了問題、對大家造成什麼影響。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先指出問題或先找能接受的說法，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先想一個他能聽進去的說法，從他的立場切入問題。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 106,
    "pair": "TFX",
    "pole": "F",
    "axis": "TF",
    "text": "朋友的做法出了差錯，而且牽連到其他人，你通常先怎麼和他談？",
    "kind": "scenario",
    "itemVersion": "clear-8-106-1",
    "choices": [
      {
        "id": "a",
        "text": "先了解他的想法，找一個他能接受的切入點再談錯誤。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先理解他的想法或先攤開錯誤，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先把錯誤、依據與影響攤開，讓問題本身先被看見。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 107,
    "pair": "JPX",
    "pole": "J",
    "axis": "JP",
    "text": "要買一件比較重要的東西，你已找到符合原定條件、價格也能接受的款式，接下來通常怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-107-1",
    "choices": [
      {
        "id": "a",
        "text": "確認條件都符合後就選它，結束這輪比較。",
        "value": 1
      },
      {
        "id": "n",
        "text": "現在結束比較或繼續看看，對我的吸引力差不多。",
        "value": 0
      },
      {
        "id": "b",
        "text": "繼續留意其他款式，想看看是否還有更適合的選擇。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 108,
    "pair": "JPX",
    "pole": "P",
    "axis": "JP",
    "text": "你還不急著購買，而且已經有一款合適的選擇，通常會怎麼往下做？",
    "kind": "scenario",
    "itemVersion": "clear-8-108-1",
    "choices": [
      {
        "id": "a",
        "text": "再看看其他款式，把選擇多留一會兒。",
        "value": 1
      },
      {
        "id": "n",
        "text": "繼續留意選項或現在選定，我都差不多自在。",
        "value": 0
      },
      {
        "id": "b",
        "text": "既然符合原本條件，就選定它，不再繼續比較。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 109,
    "pair": "AOX",
    "pole": "A",
    "axis": "AO",
    "text": "時間不多、資訊也不完整，但這件事可以小範圍試、也能撤回，你通常怎麼開始？",
    "kind": "scenario",
    "itemVersion": "clear-8-109-1",
    "choices": [
      {
        "id": "a",
        "text": "先試影響最小的一步，讓實際結果幫自己判斷下一步。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先小試或先釐清主要風險，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先釐清主要未知與風險，確認後才開始行動。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 110,
    "pair": "AOX",
    "pole": "O",
    "axis": "AO",
    "text": "一個可回頭的嘗試快到決定時間了，還有幾件事沒完全弄清楚，你通常先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-110-1",
    "choices": [
      {
        "id": "a",
        "text": "把會左右決定的主要風險排除，再決定是否開始。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先排除主要風險或先做小測試，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先做一個容易撤回的小嘗試，用結果補足判斷。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 111,
    "pair": "HCX",
    "pole": "H",
    "axis": "HC",
    "text": "和在意的人有了摩擦，雙方現在都還能正常交談，你通常先怎麼做？",
    "kind": "scenario",
    "itemVersion": "clear-8-111-1",
    "choices": [
      {
        "id": "a",
        "text": "先讓對方知道自己仍重視這段關係，再談剛才的事。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先表達重視或先帶著做法再談，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先整理問題和可以改善的做法，再用後續行動與討論修補。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
  },
  {
    "id": 112,
    "pair": "HCX",
    "pole": "C",
    "axis": "HC",
    "text": "和熟人意見衝突後，你希望把關係修復好，通常先採取什麼做法？",
    "kind": "scenario",
    "itemVersion": "clear-8-112-1",
    "choices": [
      {
        "id": "a",
        "text": "先讓彼此冷靜、整理好問題，再帶著具體做法回來談。",
        "value": 1
      },
      {
        "id": "n",
        "text": "先整理做法或先說出在意，我平常差不多各占一半。",
        "value": 0
      },
      {
        "id": "b",
        "text": "先直接說出自己在意這段關係，讓對方知道願意和好。",
        "value": -1
      }
    ],
    "neutralRationale": "明確回報兩側在本情境的偏好或效用接近；不代表不理解，也不以兼做兩件事推定中點。"
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
