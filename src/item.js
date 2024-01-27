const chatData = {
  users: [
    {
      id: 1,
      username: "JohnDoe",
      profileImage: "https://example.com/johndoe.jpg",
      phoneNumber: "+1234567890",
      about: "Hello, I'm John Doe!",
      sentMessages: [
        {
          id: 1,
          recipient: "AliceSmith",
          content: "Hi Alice!",
          timestamp: "2024-01-28T10:30:00Z",
        },
        // Add more sent messages as needed
      ],
      receivedMessages: [
        {
          id: "someting that is ony mine",
          sender: "AliceSmith",
          content: "Hi John!",
          timestamp: "2024-01-28T10:35:00Z",
        },
        // Add more received messages as needed
      ],
    },
    {
      id: 2,
      username: "AliceSmith",
      profileImage: "https://example.com/alicesmith.jpg",
      phoneNumber: "+9876543210",
      about: "Hey, it's Alice!",
      sentMessages: [
        {
          id: 1,
          recipient: "JohnDoe",
          content: "Hello John!",
          timestamp: "2024-01-28T11:00:00Z",
        },
        // Add more sent messages as needed
      ],
      receivedMessages: [
        {
          id: 1,
          sender: "JohnDoe",
          content: "Hello Alice!",
          timestamp: "2024-01-28T11:05:00Z",
        },
        // Add more received messages as needed
      ],
    },
    // Add more users as needed
  ],
};

// // Example: Accessing data
// console.log(chatData.users[0].username); // Output: JohnDoe
// console.log(chatData.users[0].sentMessages[0].content); // Output: Hi Alice!

const Contacts = {
  // main sunny hu , mera contact hai ye aur main recieve karunga aur bhejunga
  users: [
    {
      id: 1,
      username: "Money Patel",
      profileImg: "https://avatars.githubusercontent.com/u/138172377?v=4",
      phoneNumber: "+9876543210",
      about: "Hey, it's Money!",
      sentMessages: [
        {
          id: 1,
          // recipient: "Money Patel",
          content: "Suno Money",
          timestamp: "2022-01-28T11:00:00Z",
        },
        {
          id: 2,
          // recipient: "Money Patel",
          content: "Bam bhole",
          timestamp: "2024-09-15T18:30:00Z",
        },
        // Add more sent messages as needed
      ],
      receivedMessages: [
        {
          id: 1,
          // sender: "Money Patel",
          content: "kya?!",
          timestamp: "2023-01-28T11:05:00Z",
        },
        // Add more received messages as needed
      ],
    },

    {
      id: 2,
      username: "Shri Ram",
      phoneNumber: "+9876543210",
      profileImg:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrF_u_Of6WRhHlfXfTqEkymcKhYXVMKlmOXdjOg1LBd_wP2odU ",
      about: "Hey, it's Ram!",
      sentMessages: [
        {
          id: 1,
          content: "Pranam",
          timestamp: "2004-01-28T11:00:00Z",
        },
        {
          id: 2,
          content: "Shri Ram",
          timestamp: "2024-01-28T11:00:00Z",
        },
      ],
      receivedMessages: [
        {
          id: 1,
          content: "Kaise Ho sunny!",
          timestamp: "2024-03-28T11:10:00Z",
        },
      ],
    },
    {
      id: 3,
      username: "Shri Krishna",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    },
    {
      id: 4,
      username: "Bob Johnson",
      profileImg:
        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    },
    {
      id: 5,
      username: "Shri Krishna",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    },
    {
      id: 6,
      username: "Bob Johnson",
      profileImg:
        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    },
    {
      id: 5,
      username: "Shri Krishna",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    },
    {
      id: 6,
      username: "Bob Johnson",
      profileImg:
        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    },
    {
      id: 5,
      username: "Shri Krishna",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    },
    {
      id: 6,
      username: "Bob Johnson",
      profileImg:
        "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    },
  ],
};

export default Contacts;
