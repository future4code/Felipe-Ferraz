import axios, { AxiosResponse } from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

const firstId: number = Number(process.argv[2]);
const secondId: number = Number(process.argv[3]);
const thirdId: number = Number(process.argv[4]);

const promise1: Promise<AxiosResponse> = axios.get(baseUrl + firstId);
const promise2: Promise<AxiosResponse> = axios.get(baseUrl + secondId);
const promise3: Promise<AxiosResponse> = axios.get(baseUrl + thirdId);

Promise.all([promise1, promise2, promise3]).then((values: AxiosResponse[]) => {
  console.log(
    values.map((el) => {
      return el.data;
    })
  );
});
