// createActor("002", "Tony Ramos", 4000000, new Date("2020-10-05"), "male");

// const searchActor = async (name: string): Promise<any> => {
// const result = await connection.raw(`// SELECT * FROM Actor WHERE name = "${name}" //`);
// return result;
// };

// const countActors = async (gender: string): Promise<any> => {
// const result = await connection.raw(`// SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" //`);

// const count = result[0][0].count;
// return count;
// };

// const updateSalary = async (id: string, salary: number): Promise<any> => {
// await connection("Actor")
// .update({
// salary: salary,
// })
// .where("id", id);
// };

// const deleteActor = async (id: string): Promise<any> => {
// await connection("Actor").delete().where("id", id);
// };

// const avgSalary = async (gender: string): Promise<any> => {
// const result = await connection("Actor")
// .avg("salary as average")
// .where({ gender });

// return result[0].average;
// };
// (async () => {
// console.log(await avgSalary("female"));
// })();

// const createMovie = async (
// id: string,
// title: string,
// synopsis: string,
// releaseDate: Date,
// playingLimitDate: Date
// ) => {
// await connection
// .insert({
// id: id,
// title: title,
// synopsis: synopsis,
// releas_date: releaseDate,
// playing_limit_date: playingLimitDate,
// })
// .into("Movie");
// };

// const searchMovie = async (term: string): Promise<any> => {
// const result = await connection.raw(`// SELECT * FROM Movie // WHERE title LIKE '%${term}%' OR synposis LIKE '%${term}%' // ORDER BY release_date //`);

// return result[0];
// };

// app.get("/movie/search", async (req: Request, res: Response) => {
// try {
// const movies = await searchMovie(req.query.query as string);

// res.status(200).send({
// movies: movies,
// });
// } catch (err) {
// res.status(400).send({
// message: err.message,
// });
// }
// });

// function getActorById(id: string) {}

// app.get("/actor/:id", async (req: Request, res: Response) => {
// try {
// const id = req.params.id;
// const actor = await getActorById(id);

// res.status(200).send(actor);
// } catch (err) {
// res.status(400).send({
// message: err.message,
// });
// }
// });

/\*\* \*

- KNEX
  \*/

// const getActorById = async (id: string): Promise<any> => {
// await connection.raw(`// SELECT * FROM Actor WHERE id = '${id}' //`);
// };

app.get("/hello-world", async (req: Request, res: Response) => {
try {
const input = req.headers.input;

    res.status(200).send([{ result: input }, { message: "Hello World" }]);

} catch (error) {
res.status(400).send({
message: error,
});
}
});
