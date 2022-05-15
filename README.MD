install @types/node to using path
config tsconfig.json:

- baseUrl: "."
- "@/_": "src/_"
  config support using @/ instead of src/

  config vite

```typescript
 resolve: {
    alias: [
      {
        find: "src",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      { find: /~^/, replacement: path.resolve(__dirname) },
    ],
  }
```
