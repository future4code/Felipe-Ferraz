const taskListName = process.argv[2];
const createTask = process.argv[3];
const fs = require("fs");
const taskListFile = taskListName + ".txt";
const createTaskFile = "\n" + createTask;

if (taskListName === undefined || createTask === undefined) {
  console.log("\x1b[31m", "informe 3 parâmetros");
} else {
  try {
    fs.appendFileSync(taskListFile, createTaskFile, "utf8");
    console.log("\x1b[32m", "tarefa adicionada");
  } catch (error) {
    console.error(error);
  }
}
