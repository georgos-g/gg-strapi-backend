module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: "", // default: "".
    },
  },
  //...
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
