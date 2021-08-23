module.exports = {
  schema: [
    {
      "https://selca.hasura.app/v1/graphql": {
        headers: {
          Authorization:
            "Bearer " +
            "HbMhTp3QKx1bjzWkINqEzftBAWNHsWfvY2UqhYCPpk53ba0pN9WcngleB1wiawz1",
          "x-hasura-admin-secret":
            "HbMhTp3QKx1bjzWkINqEzftBAWNHsWfvY2UqhYCPpk53ba0pN9WcngleB1wiawz1",
          "content-type": "application/json",
        },
      },
    },
  ],
  documents: ["./src/**/*.tsx", "./src/**/*.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
