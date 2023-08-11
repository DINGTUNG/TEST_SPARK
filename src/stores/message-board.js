import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios';
export const useMessageBoardStore = defineStore('message-board', () => {
  const messages = reactive([])

  const autoId = ref(0)

  const currentDisplayMessages = reactive(new Map())

  const addNewMessage = (messageObject) => {
    messages.push(messageObject)
  }

  const addNewMessageAndDisplayInstantly = (message) => {
    const messageObject = {
      color: 'user',
      message_content: message,
      imgSrc: 'pictures/decorations/illustration/little_star_yellow.svg'
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


  function createMessageBackend(messageContent) {
    // prepare data 
    const payLoad = new FormData();
    payLoad.append("message_content", messageContent);

    // make a request
    const request = {
      method: "POST",
      url: `http://localhost/SPARK_BACK/php/activity/message-board/create_message.php`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: payLoad,
    };

    // send request to backend server
    return new Promise((resolve, reject) => {
      axios(request)
        .then((response) => {
          const createResult = response.data;
          resolve(createResult);
        })
        .catch((error) => {
          console.log("From createMessageBackend:", error);
          reject(error);
        });
    });
  }





  return {
    messages,
    autoId,
    currentDisplayMessages,
    addNewMessage,
    removeOldestMessage,
    createDisplayMessage,
    removeDisplayMessage,
    addNewMessageAndDisplayInstantly,
    createMessageBackend
  }
})
