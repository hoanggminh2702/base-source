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

Using @/ or src/ instead of relative path

Router will have
isRoot:

- Root Route which will be the top level of the menu tree
  layoutElement:
- if parent element is have children and have layout element, this will be the layout of the all children route, if layout route have a Component, it will be the index route of element
- hidden chidren: make the submenu is not open as default
- hiddenInMenu: make the route hidden in the menu tree
- layout label: use this if you want the layout label different from index route label
- permission: is updating, make the route private
