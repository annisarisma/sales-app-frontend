import React, { useEffect, useRef, useState } from 'react'

import user from '@assets/images/avatar/user-2.png'
import bot from '@assets/images/others/bot.png'
import { SendHorizontal } from 'lucide-react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// ChatBot component
const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hello! I am a Domiex chatbot. How can I assist you today?',
    },
  ])
  const [botTyping, setBotTyping] = useState(false)
  const inputRef = useRef(null)
  const messagesEndRef = useRef(null)

  // Replace these with actual prompts and replies
  const prompts = [
    ['hi', 'hey', 'hello', 'good morning', 'good afternoon'],
    ['how are you', 'how is life', 'how are things'],
    ['what are you doing', 'what is going on', 'what is up'],
    ['how old are you'],
    ['who are you', 'are you human', 'are you bot', 'are you human or bot'],
    ['who created you', 'who made you'],
    [
      'your name please',
      'your name',
      'may i know your name',
      'what is your name',
      'what call yourself',
    ],
    ['i love you'],
    ['happy', 'good', 'fun', 'wonderful', 'fantastic', 'cool'],
    ['bad', 'bored', 'tired'],
    ['help me', 'tell me story', 'tell me joke'],
    ['ah', 'yes', 'ok', 'okay', 'nice'],
    ['bye', 'good bye', 'goodbye', 'see you later'],
    ['what should i eat today'],
    ['bro'],
    ['what', 'why', 'how', 'where', 'when'],
    ['no', 'not sure', 'maybe', 'no thanks'],
    [''],
    ['haha', 'ha', 'lol', 'hehe', 'funny', 'joke'],
    [
      'flip a coin',
      'heads or tails',
      'tails or heads',
      'head or tails',
      'head or tail',
      'tail or heads',
      'tail or head',
    ],
    ['beer', 'buy me a beer', 'want a beer'],
  ]

  const replies = [
    ['Hello!', 'Hi!', 'Hey!', 'Hi there!', 'Howdy'],
    [
      'Fine... how are you?',
      'Pretty well, how are you?',
      'Fantastic, how are you?',
    ],
    [
      'Nothing much',
      'About to go to sleep',
      'Can you guess?',
      "I don't know actually",
    ],
    ['I am infinite'],
    ['I am just a bot', 'I am a bot. What are you?'],
    ['The one true God, JavaScript'],
    ['I am nameless', "I don't have a name"],
    ['I love you too', 'Me too'],
    ['Have you ever felt bad?', 'Glad to hear it'],
    ['Why?', "Why? You shouldn't!", 'Try watching TV'],
    ['What about?', 'Once upon a time...'],
    ['Tell me a story', 'Tell me a joke', 'Tell me about yourself'],
    ['Bye', 'Goodbye', 'See you later'],
    ['Sushi', 'Pizza'],
    ['Bro!'],
    ['Great question'],
    ["That's ok", 'I understand', 'What do you want to talk about?'],
    ['Please say something :('],
    ['Haha!', 'Good one!'],
    ['Heads', 'Tails'],
    [
      'You can buy me a beer at: <a href="https://www.buymeacoffee.com/scottwindon" target="_blank" style="text-decoration:underline;">https://www.buymeacoffee.com/scottwindon</a>',
    ],
  ]

  const alternative = ['Try again', "I don't understand :/"]
  const coronavirus = [
    'Please stay home',
    'Wear a mask',
    "Fortunately, I don't have COVID",
    'These are uncertain times',
  ]

  const updateChat = () => {
    if (inputRef.current?.value.trim()) {
      output(inputRef.current.value.trim())
      inputRef.current.value = ''
    }
  }

  const output = (input) => {
    let product = ''

    let text = input
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/[\d]/gi, '')
      .trim()
    text = text
      .replace(/ a /g, ' ')
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '')
      .replace(/r u/g, 'are you')

    const response = compare(prompts, replies, text)
    if (response) {
      product = response
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)]
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)]
    }

    addChat(input, product)
  }

  const compare = (promptsArray, repliesArray, text) => {
    for (let i = 0; i < promptsArray.length; i++) {
      for (let j = 0; j < promptsArray[i].length; j++) {
        if (promptsArray[i][j].toLowerCase() === text) {
          return repliesArray[i][j]
        }
      }
    }
    return undefined
  }

  const addChat = (input, product) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: 'user', text: input },
    ])

    setTimeout(() => {
      setBotTyping(true)
      scrollChat()
    }, 1000)

    setTimeout(
      () => {
        setBotTyping(false)
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'bot', text: product },
        ])
        scrollChat()
      },
      (product.length / 10) * 1000 + (Math.floor(Math.random() * 2000) + 1500)
    )
  }

  const scrollChat = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollChat()
  }, [messages, botTyping])

  return (
    <React.Fragment>
      <SimpleBar className="p-4 h-80">
        <div className="flex flex-col p-4 gap-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-end ${message.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`flex flex-col max-w-sm space-y-2 text-sm ${message.from === 'bot' ? 'order-2 items-start rtl:mr-2 ltr:ml-2' : 'order-1 items-end ltr:mr-2 rtl:ml-2'}`}>
                <div>
                  <span
                    className={`inline-block px-3 py-2 rounded-md ${message.from === 'bot' ? 'ltr:rounded-bl-none rtl:rounded-br-none bg-gray-100 dark:bg-dark-850' : 'ltr:rounded-br-none rtl:rounded-bl-none bg-primary-500 text-white'}`}
                    dangerouslySetInnerHTML={{ __html: message.text }}></span>
                </div>
              </div>
              <img
                src={message.from === 'bot' ? bot : user}
                alt="messageImg"
                width={24} // Set appropriate width
                height={24} // Set appropriate height
                className={`rounded-full size-6 ${message.from === 'bot' ? 'order-1' : 'order-2'}`}
              />
            </div>
          ))}
          {botTyping && (
            <div className="flex items-end">
              <div className="flex flex-col items-start order-2 mx-2 space-y-2 text-sm">
                <div className="flex items-end">
                  <img
                    src={bot}
                    alt="botImg"
                    width={24} // Set appropriate width
                    height={24} // Set appropriate height
                    className="rounded-full"
                  />
                  <div className="flex items-center justify-center space-x-1">
                    <span className="sr-only">Loading...</span>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </SimpleBar>
      <div className="p-4">
        <div className="relative flex">
          <input
            ref={inputRef}
            type="text"
            placeholder="Say something..."
            autoComplete="off"
            autoFocus
            className="rounded-full ltr:pr-10 rtl:pl-10 form-input"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateChat()
              }
            }}
          />
          <div className="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-full size-8 bg-primary-500 hover:bg-primary-600 focus:outline-hidden"
              onClick={() => updateChat()}>
              <SendHorizontal className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChatBot
