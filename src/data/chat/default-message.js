// default contact chat
const defaultContactChat = {
  id: 1,
  roomId: 1,
  name: 'Sirkka Hakola',
  receiverImage:
    'https://images.kcubeinfotech.com/domiex/images/avatar/user-6.png',
  senderImage:
    'https://images.kcubeinfotech.com/domiex/images/avatar/user-17.png',
  status: 'offline',
  lastMessage:
    'Alright, I’ll follow up with them as well. We should align the timeline once we hear back.',
  timestamp: 'Saturday',
  unread: 0,
  lastSeen: 'Last seen 1 hr',
  messages: [
    {
      id: 1,
      sender: 'Nicholas Hope',
      time: 'Today, 09:59 AM',
      text: 'Good Morning, how\'s the <span class="text-primary-500">report</span> coming along?',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-3.png',
      type: 'sent',
    },
    {
      id: 2,
      sender: 'You',
      time: 'Today, 10:00 AM',
      text: 'Hey, it\'s looking good. I just finished the <span class="text-red-500">summary</span>. Any feedback on your end?',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-17.png',
      type: 'received',
    },
    {
      id: 3,
      sender: 'Nicholas Hope',
      time: 'Today, 10:00 AM',
      text: 'Not yet, but I will check the details today. I like the new <span class="text-green-500">financial section</span> you added.',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-3.png',
      type: 'sent',
    },
    {
      id: 4,
      sender: 'You',
      time: 'Today, 10:01 AM',
      text: 'Thanks! I’ll send over the final draft once I double-check the <span class="text-yellow-500">projections</span>.',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-17.png',
      type: 'received',
    },
    {
      id: 5,
      sender: 'Nicholas Hope',
      time: 'Today, 10:01 AM',
      text: 'Perfect. Let me know if you need help with the <span class="text-blue-500">charts</span>.',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-3.png',
      type: 'sent',
    },
    {
      id: 6,
      sender: 'You',
      time: 'Today, 10:02 PM',
      text: 'Will do. Also, do you have an update from the <span class="text-purple-500">client team</span>?',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-17.png',
      type: 'received',
    },
    {
      id: 7,
      sender: 'Nicholas Hope',
      time: 'Today, 10:02 AM',
      text: 'Alright, I’ll follow up with them as well. We should align the <span class="text-indigo-500">timeline</span> once we hear back.',
      avatar:
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-3.png',
      type: 'sent',
    },
  ],
}

// company contacts
const CompanyMenuChatSidebar = [
  {
    id: 1,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-02.png',
    isOpenCompanyChat: true,
  },
  {
    id: 2,
    roomId: 1,
    name: 'PE',
    isOpenCompanyChat: false,
  },
  {
    id: 3,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-06.png',
    isOpenCompanyChat: false,
  },
  {
    id: 4,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-05.png',
    isOpenCompanyChat: false,
  },
  {
    id: 5,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-01.png',
    isOpenCompanyChat: false,
  },
  {
    id: 6,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-07.png',
    isOpenCompanyChat: false,
  },
  {
    id: 7,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-08.png',
    isOpenCompanyChat: false,
  },
  {
    id: 8,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-09.png',
    isOpenCompanyChat: false,
  },
  {
    id: 9,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-10.png',
    isOpenCompanyChat: false,
  },
  {
    id: 10,
    roomId: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-12.png',
    isOpenCompanyChat: false,
  },
]

export { defaultContactChat, CompanyMenuChatSidebar }
