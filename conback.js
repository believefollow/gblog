// In your gatsby-config.js
module.exports = {
    plugins: [
      // Simple config, passing URL
      {
        resolve: "gatsby-source-graphql",
        options: {
          // Arbitrary name for the remote schema Query type
          typeName: "SWAPI",
          // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
          fieldName: "swapi",
          // Url to query from
          url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
        },
      },
  
      // Advanced config, passing parameters to apollo-link
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "GitHub",
          fieldName: "github",
          url: "https://api.github.com/graphql",
          // HTTP headers
          headers: {
            // Learn about environment variables: https://gatsby.dev/env-vars
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          // HTTP headers alternatively accepts a function (allows async)
          headers: async () => {
            return {
              Authorization: await getAuthorizationToken(),
            }
          },
          // Additional options to pass to node-fetch
          fetchOptions: {},
        },
      },
  
      // Advanced config, using a custom fetch function
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "GitHub",
          fieldName: "github",
          url: "https://api.github.com/graphql",
          // A `fetch`-compatible API to use when making requests.
          fetch: (uri, options = {}) =>
            fetch(uri, { ...options, headers: sign(options.headers) }),
        },
      },
  
      // Complex situations: creating arbitrary Apollo Link
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "GitHub",
          fieldName: "github",
          // Create Apollo Link manually. Can return a Promise.
          createLink: pluginOptions => {
            return createHttpLink({
              uri: "https://api.github.com/graphql",
              headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              },
              fetch,
            })
          },
        },
      },
    ],
  }