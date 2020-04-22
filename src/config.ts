import { Env } from "services";

const Host: any = {
  dev: "/",
  test: "/",
  production: "/"
};


export default {
  host: Host[Env.env || ""],
};
