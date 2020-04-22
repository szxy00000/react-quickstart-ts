declare const window: any;
import config from "config";

export const thousformat = (num) => {
  let islo = "",
    arr;

  num += "";
  if (~num.indexOf("-")) {
    islo = "-";
    num = num.replace(/-/g, "");
  }
  arr = num.split(".");
  num = arr[0];
  num = num.replace(/,/g, "");
  if (num.length > 12) {
    num = num.substring(0, 12);
  }
  const re = /\d{1,3}(?=(\d{3})+$)/g;
  let n1 = num.replace(/^(\d+)((\.\d+)?)$/, function(s, s1, s2) {
    return s1.replace(re, "$&,") + s2;
  });
  n1 = islo + n1;

  if (typeof arr[1] !== "undefined") {
    n1 = n1 + "." + arr[1];
  }
  return n1;
};

export function downloadFile(
  api: string,
  body: object,
  title: string
) {
  let url = config.host + api;
  const reqInit: RequestInit = {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const req = new Request(url, reqInit);
  fetch(req)
    // .then(res => {
    //   return res.blob();
    // })
    .then((res) => {
      const reader = res.body!.getReader();
      const data: any[] = [];
      const BOM = "\uFEFF";
      return new Promise((resolve) => {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              resolve(new Blob([BOM, ...data]));
            } else {
              data.push(value);
              push();
            }
          });
        }
        push();
      });
    })
    .then((blob) => {
      const fileName = `${title}.csv`;
      const elink = document.createElement("a");
      elink.download = fileName;
      elink.style.display = "none";
      elink.href = URL.createObjectURL(blob);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href); // 释放URL 对象
      document.body.removeChild(elink);
    });
}
