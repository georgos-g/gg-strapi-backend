module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
      apiToken: process.env.VERCEL_API_TOKEN,
      appFilter: "your-app-name-on-vercel",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});

// module.exports = ({ env }) => {
//   if (env("NODE_ENV") === "production") {
//     return {
//       upload: {
//         provider: "aws-s3",
//         providerOptions: {
//           accessKeyId: env("AWS_ACCESS_KEY_ID"),
//           secretAccessKey: env("AWS_ACCESS_SECRET"),
//           region: env("AWS_REGION"),
//           params: {
//             Bucket: env("AWS_BUCKET"),
//           },
//         },
//       },
//     };
//   }
//   return {};
// };
