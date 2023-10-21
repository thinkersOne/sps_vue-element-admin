    <template>
        <div class="chat" :style="ChartStyle">
            <div class="messages" :style="containerStyle">
                <div v-for="(message, index) in messages" :key="index">
                <div class="message-text">
                    <pre v-html="formatMessage(message)"></pre>
                </div>
                </div>
            </div>
            <div class="input-container">
                <input type="textarea" v-model="inputText" placeholder="输入消息" autofocus
                :autosize="{ minRows: 4, maxRows: 4 }" :style="{ width: '80%', height: '80px' }"
                @input="checkInputNotEmpty"
                @keyup.enter.exact="sendMessage"
                @keyup.ctrl.enter="lineFeed()" />
                <button class="btn" @click="sendMessage" :disabled="inputText.length === 0">发送</button>
            </div>
        </div>
    </template>
    
    <script>
    export default {
        name: 'chart-list',
        data() {
            return {
                messages: [],
                inputText: '',
                sender: '',
                aiResponse: '',
                aiSender: '',
                platform: 1
            };
        },
        computed: {
            ChartStyle(){
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const isIE = /MSIE|Trident/i.test(navigator.userAgent);
                const userAgent = window.navigator.userAgent.toLowerCase();
                let width,height;
                if (isSafari) {
                    // Safari 浏览器
                    width = '100%';
                    height = '600px';
                } else if (isIE) {
                    // IE 浏览器
                    width = '100%';
                    height = '400px';
                } else if(userAgent.includes('edg')){
                    width = '1200px';
                    height = '750px';
                }else if (userAgent.includes('chrome')){
                    width = '1200px';
                    height = '500px';
                }else{
                    width = '800px';
                    height = '600px';
                }

                return {
                    width,
                    height
                }
            },
            containerStyle() {
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            const isIE = /MSIE|Trident/i.test(navigator.userAgent);
            const userAgent = window.navigator.userAgent.toLowerCase();
            let width,height;
            if (isSafari) {
                // Safari 浏览器
                width = '100%';
                height = '600px';
            } else if (isIE) {
                // IE 浏览器
                width = '100%';
                height = '400px';
            } else if(userAgent.includes('edg')){
                width = '1100px';
                height = '600px';
            }else if (userAgent.includes('chrome')){
                width = '1200px';
                height = '500px';
            }else{
                width = '800px';
                height = '600px';
            }

            return {
                width,
                height
            };
            },
        },
        created() {
        this.f5();
        sa.onInputEnter(); // 监听回车执行查询
        },
        methods: {
        // 刷新
        f5() {
            sa.ajax('/ChartMessage/getList?plantform='+ this.platform, function(res) {
            this.messages = sa.listAU(res.data);
            sa.f5TableHeight(); // 刷新表格高度
            }.bind(this), { type: 'get' });
    
            sa.ajax('/admin/getByCurr', this.p, function(res) {
            this.sender = res.data.name;
            sa.f5TableHeight(); // 刷新表格高度
            }.bind(this), { type: 'get' });
        },
        // 键盘回车事件
        // 换行
        lineFeed() {
            this.inputText = this.inputText + '\n';
        },
        sendMessage() {
            if (!this.isInputNotEmpty) {
            return;
            }
            const message = {
            Content: this.inputText,
            Sender: this.sender,
            plantform: 1
            };
            this.messages.push(message);
            this.inputText = '';
    
            sa.ajax1('/ChartMessage/add', message, function(res) {
            this.aiResponse = res.data.Content;
            this.aiSender = res.data.Sender;
            this.simulateAIResponse();
            }.bind(this));
        },
        formatMessage(message) {
            var content = message.Content;
            const sender = message.Sender;
            content = content.replace(/```(\w+)\n([^]+?)\n```/gs, (match, lang, code) => {
                // 将代码块内容进行 HTML 转义
                const encodedCode = this.htmlEncode(code.trim());
                const highlightedCode = `<code class="language-${lang}">${encodedCode}</code>`;
                // 返回用 <code> 标签包裹的代码块内容
                // 返回代码块加上样式和复制按钮的 HTML 片段
                return `
                <div class="code-block">
                    <div class="code-block-header">
                    <span class="lang">${lang}</span>
                    </div>
                    <div class="code-block-body"><code class="code">${highlightedCode}</code></div>
                </div>
                `;
            });
            return sender + " : " + content;
        },
        htmlEncode(text) {
            const element = document.createElement('div');
            element.textContent = text;
            return element.innerHTML;
        },
        simulateAIResponse() {
            setTimeout(() => {
            const aiMessage = {
                Content: this.aiResponse,
                Sender: this.aiSender
            };
            this.messages.push(aiMessage);
            this.scrollToBottom();
            }, 2000);
        },
        scrollToBottom() {
            const messagesContainer = document.querySelector('.messages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        },
        checkInputNotEmpty() {
            this.isInputNotEmpty = this.inputText.trim() !== '';
        },
        isCodeMessage(content) {
            // 判断是否是代码消息，根据自己的需求进行判断逻辑
            // 这里简单示例判断消息内容是否以 "```" 开头和结尾
            return content.trim().startsWith('```') && content.trim().endsWith('```');
        }
        },
    };
    </script>
    
    <style>
    /* 样式部分，根据需要自定义 */
    .chat {
        max-width: 1200px;
        max-height: 700px;
        margin: 0 auto;
        padding: 10px;
        margin-top: 20px;
    }
    .messages {
        overflow-y: scroll;
        max-height: 600px;
        margin-left: 20px;
    }
    .message-text {
        font-size: 16px;
        padding: 10px;
    }
    .input-container {
        position: relative;
        margin-left: 30px;
        margin-top: 30px;
    }
    .send-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .btn{
        width: 80px;
        height: 50px;
        border: 1px solid #ccc;
        margin-left: 20px;
        font-size: large;
    }

    .code-block {
        background-color: #f0f0f0;
        border-radius: 4px;
    }

    .code-block-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #dcdcdc;
        border-radius: 4px 4px 0 0;
        padding: 5px;
    }

    .lang {
        font-weight: bold;
        color: #333;
    }

    .copy-button {
        background-color: #999;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
    }

    .copy-button:hover {
        background-color: #777;
    }

    .code-block-body {
    margin-left: 20px;
    }
    </style>
    