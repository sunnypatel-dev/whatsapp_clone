const Contacts = {
  users: [
    {
      id: 1,
      username: "Money Patel",
      profileImg: "https://avatars.githubusercontent.com/u/138172377?v=4",
      phoneNumber: "+9876543210",
      about: "Hey, it's Money!",
      messages: [
        {
          id: 1,
          transactionType: "received",
          messagesType: "text",
          content: "Main theek hu aap btao kaise ho",
          timestamp: "2022-01-28T09:00:00Z", // 9 am (R)
        },
        {
          id: 2,
          transactionType: "sent",
          messagesType: "text",
          content: "Hi! money kaise",
          timestamp: "2022-01-28T06:00:00Z", // Morning 6 am (S)
        },
        {
          id: 3,
          transactionType: "sent",
          messagesType: "img",
          src: "https://cdn4.sharechat.com/img_433186_1f25fccf_1674279430395_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=395_sc.jpg",
          caption: "Krishna",
          content: "img",
          timestamp: "2022-01-28T05:00:00Z", // Morning 6 am (S)
        },
        {
          id: 4,
          transactionType: "sent",
          messagesType: "text",
          content: "I am also good brother, y !",
          timestamp: "2022-01-28T13:00:00Z", // 1 pm (S)
        },
        {
          id: 5,
          transactionType: "received",
          messagesType: "text",
          content: "Greatkmdfskmldfskdsfklmdsfklmd sdfjdsfldsfdfdfsklmkdsmf",
          timestamp: "2022-01-28T18:00:00Z", // 6 pm (R)
        },
      ],
    },

    {
      id: 2,
      username: "Shri Ram",
      phoneNumber: "+9876543210",
      profileImg:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrF_u_Of6WRhHlfXfTqEkymcKhYXVMKlmOXdjOg1LBd_wP2odU ",
      about: "Hey, it's Ram!",
      messages: [
        {
          id: 1,
          transactionType: "received",
          messagesType: "text",
          content: "Hello my friend",
          timestamp: "2022-01-28T09:00:00Z", // 9 am (R)
        },
        {
          id: 2,
          transactionType: "sent",
          messagesType: "text",
          content: "Yes bro",
          timestamp: "2022-01-28T06:00:00Z", // Morning 6 am (S)
        },
        {
          id: 3,
          transactionType: "sent",
          messagesType: "img",
          src: "https://cdn4.sharechat.com/img_433186_1f25fccf_1674279430395_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=395_sc.jpg",
          caption: "Krishna",
          content: "img",
          timestamp: "2022-01-28T18:00:00Z", // Morning 6 am (S)
        },
        {
          id: 4,
          transactionType: "sent",
          messagesType: "text",
          content: "I am also good brother, y !",
          timestamp: "2022-01-28T13:00:00Z", // 1 pm (S)
        },
        {
          id: 5,
          transactionType: "received",
          messagesType: "text",
          content: "What do you think bro, yesterday i was'nt sure about that",
          timestamp: "2022-01-28T05:00:00Z", // 6 pm (R)
        },
      ],
    },
    // {
    //   id: 3,
    //   username: "Shri Krishna",
    //   profileImg:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    // },
    // {
    //   id: 4,
    //   username: "Bob Johnson",
    //   profileImg:
    //     "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    // },
    // {
    //   id: 5,
    //   username: "Shri Krishna",
    //   profileImg:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    // },
    // {
    //   id: 6,
    //   username: "Bob Johnson",
    //   profileImg:
    //     "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    // },
    // {
    //   id: 5,
    //   username: "Shri Krishna",
    //   profileImg:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    // },
    // {
    //   id: 6,
    //   username: "Bob Johnson",
    //   profileImg:
    //     "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    // },
    // {
    //   id: 5,
    //   username: "Shri Krishna",
    //   profileImg:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX6VPYSWG6iN7Vur7c-VqT_izgLapje-6TQ&usqp=CAU",
    // },
    // {
    //   id: 6,
    //   username: "Bob Johnson",
    //   profileImg:
    //     "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
    // },
  ],
};

export default Contacts;

// const registered_users = {
//   users: [{
//   id: 1,
//   username: "Sunny Patel",
//   email: "sunny@gmail.com",
//   profileImg: "https://avatars.githubusercontent.com/u/138172377?v=4",
//   phoneNumber: "+9876543210",
//   about: "Hey, it's Money!",
//   chats: [
//     {
//       id: 1,
//       email: "money@gmail.com",
//       messages: [
//         {
//           id: 1,
//           transactionType: "received",
//           messagesType: "text",
//           content: "Main theek hu aap btao kaise ho",
//           timestamp: "2022-01-28T09:00:00Z", // 9 am (R)
//         },
//         {
//           id: 2,
//           transactionType: "sent",
//           messagesType: "text",
//           content: "Hi! money kaise",
//           timestamp: "2022-01-28T06:00:00Z", // Morning 6 am (S)
//         },
//         {
//           id: 3,
//           transactionType: "sent",
//           messagesType: "img",
//           src: "https://cdn4.sharechat.com/img_433186_1f25fccf_1674279430395_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=395_sc.jpg",
//           caption: "Krishna",
//           content: "img",
//           timestamp: "2022-01-28T05:00:00Z", // Morning 6 am (S)
//         },
//       ],
//     },
//     {
//       id: 2,
//       email: "honey@gmail.com",
//       messages: [
//         {
//           id: 1,
//           transactionType: "received",
//           messagesType: "text",
//           content: "Main theek hu aap btao kaise ho",
//           timestamp: "2022-01-28T09:00:00Z", // 9 am (R)
//         },
//         {
//           id: 2,
//           transactionType: "sent",
//           messagesType: "text",
//           content: "Hi! money kaise",
//           timestamp: "2022-01-28T06:00:00Z", // Morning 6 am (S)
//         },
//         {
//           id: 3,
//           transactionType: "sent",
//           messagesType: "img",
//           src: "https://cdn4.sharechat.com/img_433186_1f25fccf_1674279430395_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=395_sc.jpg",
//           caption: "Krishna",
//           content: "img",
//           timestamp: "2022-01-28T05:00:00Z", // Morning 6 am (S)
//         },
//       ],
//     },
//   ],},
//   {
//   id: 1,
//   username: "Sunny Patel",
//   email: "sunny@gmail.com",
//   profileImg: "https://avatars.githubusercontent.com/u/138172377?v=4",
//   phoneNumber: "+9876543210",
//   about: "Hey, it's Money!",
// }]

// // const chatData = {
// //   users: [
// //     {
// //       id: 1,
// //       username: "JohnDoe",
// //       profileImage: "https://example.com/johndoe.jpg",
// //       phoneNumber: "+1234567890",
// //       about: "Hello, I'm John Doe!",
// //       sentMessages: [
// //         {
// //           id: 1,
// //           recipient: "AliceSmith",
// //           content: "Hi Alice!",
// //           timestamp: "2024-01-28T10:30:00Z",
// //         },
// //         // Add more sent messages as needed
// //       ],
// //       receivedMessages: [
// //         {
// //           id: "someting that is ony mine",
// //           sender: "AliceSmith",
// //           content: "Hi John!",
// //           timestamp: "2024-01-28T10:35:00Z",
// //         },
// //         // Add more received messages as needed
// //       ],
// //     },
// //     {
// //       id: 2,
// //       username: "AliceSmith",
// //       profileImage: "https://example.com/alicesmith.jpg",
// //       phoneNumber: "+9876543210",
// //       about: "Hey, it's Alice!",
// //       sentMessages: [
// //         {
// //           id: 1,
// //           recipient: "JohnDoe",
// //           content: "Hello John!",
// //           timestamp: "2024-01-28T11:00:00Z",
// //         },
// //         // Add more sent messages as needed
// //       ],
// //       receivedMessages: [
// //         {
// //           id: 1,
// //           sender: "JohnDoe",
// //           content: "Hello Alice!",
// //           timestamp: "2024-01-28T11:05:00Z",
// //         },
// //         // Add more received messages as needed
// //       ],
// //     },
// //     // Add more users as needed
// //   ],
// // };

// // // // Example: Accessing data
// // // console.log(chatData.users[0].username); // Output: JohnDoe
// // // console.log(chatData.users[0].sentMessages[0].content); // Output: Hi Alice!
