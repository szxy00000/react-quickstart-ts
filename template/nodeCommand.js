let fs = require("fs");
let reducer = fs.readFileSync("./src/reducers/index.ts").toString();
reducer = reducer
  .replace(
    '/* import { template, templateState } from "./template"; */',
    `import { ${process.argv[2]}, ${process.argv[2]}State } from "./${process.argv[2]}";\r\n/* import { template, templateState } from "./template"; */`
  )
  .replace(
    '/* export * from "./template"; */',
    `export * from "./${process.argv[2]}";\r\n/* export * from "./template"; */`
  )
  .replace(
    "/* template: templateState */",
    `${process.argv[2]}: ${process.argv[2]}State;\r\n  /* template: templateState */`
  )
  .replace("/* template, */", `${process.argv[2]},\r\n\  /* template, */`);
fs.writeFileSync("./src/reducers/index.ts", reducer);

let action = fs.readFileSync("./src/actions/index.ts").toString();
action += `\r\nexport * from "./${process.argv[2]}";`;
fs.writeFileSync("./src/actions/index.ts", action);

let page = fs.readFileSync("./src/pages/index.ts").toString();
page += `\r\nexport * from "./${process.argv[2]}";`;
fs.writeFileSync("./src/pages/index.ts", page);

let route = fs.readFileSync("./src/router.tsx").toString();
route = route.replace(
  `      /* {
        title: "template",
        path: "/template",
        id: "template",
        component: pages.templatePage,
      } */`,
  `      {
        title: "${process.argv[2]}",
        path: "/${process.argv[2]}",
        id: "3",
        component: React.lazy(() =>
          import("pages/${process.argv[2]}").then(
            ({ ${process.argv[3]}Page }) => ({
              default: ${process.argv[3]}Page
            })
          )
        ),
      }, 
      /* {
        title: "template",
        path: "/template",
        id: "template",
        component: pages.templatePage,
      } */`
);
fs.writeFileSync("./src/router.tsx", route);
