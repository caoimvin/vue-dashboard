<template>
  <div id="chat-bot">
    <section class="chat-box">
      <div class="chat-box-list-container" ref="chatbox">
        <ul class="chat-box-list">
          <li
            class="message"
            v-for="(message, index) in messages"
            :key="index"
            :class="message.author"
          >
            <p>
              <span>{{ message.text }}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="chat-inputs">
        <input
          placeholder="Type something ..."
          type="text"
          v-model="message"
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">Send</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ChatBox",
  data: () => ({
    message: "",
    messages: []
  }),
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.message,
        author: "client"
      });

      this.$axios
        .get(`http://127.0.0.1:5000/api/v1/chat-bot?input=${this.message}`)
        .then(res => {
          this.messages.push({
            text: res.data,
            author: "server"
          });

          this.$nextTick(() => {
            this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
          });
        });

      this.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-box,
.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

.chat-box-list-container {
  overflow-y: scroll;
}

.chat-box-list {
  //   padding-left: 0;
  margin: 10px;
  span {
    padding: 8px;
    border-radius: 4px;
  }
  .server {
    span {
      background: #dddddd;
    }
    p {
      float: left;
      width: 50%;
      text-align: left;
    }
  }
  .client {
    span {
      border: 1px solid #dddddd;
    }
    p {
      float: right;
      width: 50%;
      text-align: right;
    }
  }
}

.message {
  min-height: 40px;
  line-height: 2.5;
}

.chat-box {
  margin: 10px;
  border: 1px solid #999;
  width: 50%;
  height: 60vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
}

.chat-inputs {
  display: flex;
  input {
    line-height: 3;
    width: 100%;
    border: 1px solid #999;
    border-left: none;
    border-right: none;
    border-bottom-left-radius: 4px;
    padding-left: 15px;
  }
  button {
    width: 145px;
    color: white;
    background: #2c3e50;
    border-bottom-right-radius: 4px;
  }
}

@media only screen and (max-width: 600px) {
  .chat-box {
    width: 100%;
    margin-top: 20vh;
  }
}
</style>
