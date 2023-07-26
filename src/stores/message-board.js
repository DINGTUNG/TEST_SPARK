import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useMessageBoardStore = defineStore('message-board', () => {
  const messages = reactive([
    {
      color: 'default',
      content: '狸貓小呆瓜',
      imgSrc: 'pictures/test/禿頭海豹吸血鬼.png'
    },
    {
      color: 'default',
      content: '狸貓小胖瓜',
      imgSrc: 'pictures/test/狸貓側寫2.png'
    },
    {
      color: 'default',
      content: '狸貓小豬瓜',
      imgSrc: 'pictures/test/禿頭海豹呆滯.png'
    },
    {
      color: 'default',
      content: '狸貓小地瓜',
      imgSrc: 'pictures/test/狸貓眼裡無人.png'
    },
    {
      color: 'default',
      content: '狸貓小西瓜',
      imgSrc: 'pictures/test/狸貓兔子.png'
    },
    {
      color: 'default',
      content: '狸貓大地鼠',
      imgSrc: 'pictures/test/狸貓謎樣.png'
    },
    {
      color: 'default',
      content: '狸貓大黃蜂',
      imgSrc: 'pictures/test/狸貓肚子外露倒下.png'
    },
    {
      color: 'default',
      content: '狸貓炸彈',
      imgSrc: 'pictures/test/狸貓側臉.png'
    },

    {
      color: 'default',
      content: '狸貓使魔',
      imgSrc: 'pictures/test/狸貓寶寶.png'
    },
    {
      color: 'star_turtle',
      content: '星龜',
      imgSrc: 'pictures/test/狸貓在星龜身上黏嘴巴.png'
    },
    {
      color: 'tiny_tanuki',
      content: '小狸貓',
      imgSrc: 'pictures/test/小狸貓可愛愛.png'
    },
    {
      color: 'charlie_brown',
      content: '查理布朗',
      imgSrc: 'pictures/test/查理.png'
    },
    {
      color: 'phone_phone',
      content: '狸貓封封',
      imgSrc: 'pictures/test/狸猫封封.png'
    },
    {
      color: 'wasp',
      content: '黃蜂',
      imgSrc: 'pictures/test/黃蜂.gif'
    }
  ])

  const autoId = ref(0)

  const currentDisplayMessages = reactive(new Map())

  const addNewMessage = (messageObject) => {
    messages.push(messageObject)
  }

  const addNewMessageAndDisplayInstantly = (message) => {
    const messageObject = {
      color: 'user',
      content: message,
      imgSrc: 'pictures/test/禿頭海豹呆滯.png'
    }

    createDisplayMessage(messageObject)
    addNewMessage(messageObject)
  }

  const removeOldestMessage = () => {
    return messages.shift()
  }

  const createDisplayMessage = (messageObject) => {
    currentDisplayMessages.set(autoId.value, messageObject)
    autoId.value += 1
  }
  const removeDisplayMessage = (id) => {
    currentDisplayMessages.delete(id)
  }

  return {
    messages,
    autoId,
    currentDisplayMessages,
    addNewMessage,
    removeOldestMessage,
    createDisplayMessage,
    removeDisplayMessage,
    addNewMessageAndDisplayInstantly
  }
})
