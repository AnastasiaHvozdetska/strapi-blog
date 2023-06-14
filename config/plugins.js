// module.exports = ({ env }) => ({
//   // ...
//   "netlify-deployments": {
//     sites: [
//       {
//         title: 'Your site name',
//         apiId: 'a44185a9-2757-44b3-bf38-071da20cdc60', // Отримайте його з налаштувань "General" вашого сайту на Netlify
//         buildHookId: '6489bd552d8f1624fd61dc81' // Остання частина URL вашого Build Hook (наприклад, https://api.netlify.com/build_hooks/xxxxxxxxxxxxxxxxxxxxxxxx)
//       }
//     ]
//   },
// });

module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "FiT_o3Tn20dY-j0OVhpYCyfCJLm8ihuH6L-gtGhS5J4",
      sites: [
        {
          name: "Site 1",
          id: "28832e9b-b5cd-43fa-b25b-025081656f8e",
          buildHook:
            "https://api.netlify.com/build_hooks/648a0b0c7646930f277b52de",
          branch: "main", // optional
        },
      ],
    },
  },
});
