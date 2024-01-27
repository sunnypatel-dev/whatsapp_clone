const chatData = {
  users: [
    {
      id: 1,
      username: "JohnDoe",
      profileImage: "https://example.com/johndoe.jpg",
      phoneNumber: "+1234567890",
      about: "Hello, I'm John Doe!",
      messages: [
        {
          id: 1,
          sender: "JohnDoe",
          content: "Hi there!",
          timestamp: "2024-01-28T10:00:00Z",
        },
        {
          id: 2,
          sender: "JohnDoe",
          content: "How are you?",
          timestamp: "2024-01-28T10:05:00Z",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 2,
      username: "AliceSmith",
      profileImage: "https://example.com/alicesmith.jpg",
      phoneNumber: "+9876543210",
      about: "Hey, it's Alice!",
      messages: [
        {
          id: 1,
          sender: "AliceSmith",
          content: "Hello!",
          timestamp: "2024-01-28T11:00:00Z",
        },
        // Add more messages as needed
      ],
    },
    // Add more users as needed
  ],
};
