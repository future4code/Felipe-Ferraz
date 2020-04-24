import axios, { AxiosResponse } from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

const id: number = Number(process.argv[3]);
const method: string = process.argv[2];
let promise1: Promise<AxiosResponse>;

switch (method) {
  case "getPost":
    promise1 = axios.get(baseUrl + id);
    console.log("fui chamado");
    break;
  default:
    console.log("fui chamado default");
}

Promise.all([promise1]).then((value: AxiosResponse[]) => {
  console.log(
    value.map((el) => {
      return el.data;
    })
  );
});
