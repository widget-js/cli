import inquirer from "inquirer";

const promptChecker = async (prompt, checker) => {
  let answer = await inquirer.prompt([prompt]);
  if (checker) {
    if (checker(answer)) {
      return answer[prompt.name];
    } else {
      return promptChecker(prompt, checker);
    }
  }
  return answer[prompt.name];
}

export default promptChecker;
