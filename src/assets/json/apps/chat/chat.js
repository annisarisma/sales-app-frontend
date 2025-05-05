import user3 from '/assets/images/avatar/user-3.png'
import user6 from '/assets/images/avatar/user-6.png'
import user11 from '/assets/images/avatar/user-11.png'
import user13 from '/assets/images/avatar/user-13.png'
import user17 from '/assets/images/avatar/user-17.png'
import user18 from '/assets/images/avatar/user-18.png'
import user20 from '/assets/images/avatar/user-20.png'
import gallery1 from '/assets/images/gallery/img-01.jpg'
import gallery2 from '/assets/images/gallery/img-05.jpg'

const chats = [
  {
    name: 'Dawn Teague',
    avatar: user13,
    status: 'online',
    lastMessage: 'Hello, How are you?',
    timestamp: 'Just Now',
    unread: 2,
  },
  {
    name: 'David Johnson',
    avatar: user11,
    status: 'online',
    lastMessage: 'Here are some of very cute illustration.',
    timestamp: '30 min',
    unread: 0,
  },
  {
    name: 'Andrew Gilbert',
    avatar: user18,
    status: 'offline',
    lastMessage:
      'Use tools like Trello, Asana, or Jira for task management and progress tracking.',
    timestamp: 'Just Now',
    unread: 2,
  },
  {
    name: 'Tyron Derby',
    avatar: user20,
    status: 'offline',
    lastMessage:
      'Regularly review and improve communication practices based on team feedback and project needs.',
    timestamp: 'Just Now',
    unread: 0,
  },
  {
    name: 'Susan Liles',
    avatarText: 'SL',
    status: 'online',
    lastMessage:
      'Schedule regular check-ins to address any roadblocks and keep everyone aligned.',
    timestamp: 'Yesterday',
    unread: 0,
    receiverName: 'SL',
  },
  {
    name: 'Josh Doyle',
    avatarText: 'JD',
    status: 'online',
    lastMessage: 'No further questions.',
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    name: 'Nicholas Hope',
    avatar: user3,
    status: 'offline',
    lastMessage:
      "Sure, I can help with that. Let's have a quick call after this meeting to debug the issue.",
    timestamp: 'Monday',
    unread: 1,
  },
  {
    name: 'Louise Bryan',
    avatarText: 'LB',
    status: 'offline',
    lastMessage: "I'll share the meeting minutes and action items shortly.",
    timestamp: 'Monday',
    unread: 0,
  },
  {
    name: 'Sirkka Hakola',
    avatar: user6,
    status: 'offline',
    lastMessage:
      "Let's reconvene next week for our regular check-in. Have a productive week!",
    timestamp: 'Saturday',
    unread: 0,
  },
]

const messages = [
  {
    sender: 'David Johnson',
    time: 'Today, 09:59 AM',
    text: 'We need a new website that allows users to create accounts, browse products, and make purchases. Can you provide a rough timeline and cost estimate?',
    avatar: user13,
    type: 'received',
  },
  {
    sender: 'You',
    time: 'Today, 10:00 AM',
    text: "Sure, we can help with that. To provide an accurate estimate, we'll need more details on the features you want. Let's schedule a call this week to discuss the specifics, such as the types of products, payment methods, and any design preferences.",
    avatar: user17,
    type: 'sent',
  },
  {
    sender: 'You',
    time: 'Today, 10:15 AM',
    text: 'Got it. I’ll investigate and update you shortly. <a href="#" class="text-red-500">#bug</a>',
    avatar: user17,
    type: 'sent',
  },
  {
    sender: 'David Johnson',
    time: 'Today, 10:11 AM',
    text: 'Hi <a href="#" class="text-primary-500">@Shopia</a>, can you add the new search feature by Friday? Details are in the #features channel. Thanks! <a href="#" class="text-primary-500">#task</a>',
    avatar: user13,
    type: 'received',
  },
  {
    sender: 'You',
    time: 'Today, 10:12 AM',
    text: 'Sure, starting on it today. Will update you on the progress. <a href="#" class="text-primary-500">#task154</a>',
    avatar: user17,
    type: 'sent',
  },
  {
    sender: 'David Johnson',
    time: 'Today, 02:39 PM',
    text: 'Hi Shopia, there’s a problem with the mobile view on the homepage. Images aren’t scaling right. Can someone check? <a href="#" class="text-red-500">#bug</a>',
    avatar: user13,
    type: 'received',
    images: [gallery1, gallery2],
    extraImagesCount: '2+',
  },
]

export { chats, messages }
