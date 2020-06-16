export const handler = (event: { email: string; password: string }) => {
  let response;
  if (event.email.indexOf("@") === -1) {
    response = {
      isEmail: false,
      reason: "Não possui '@' ",
    };
  }
  if (event.email.indexOf(".") === -1) {
    response = {
      isEmail: false,
      reason: "Não possui '.' ",
    };
  }
  if (event.email.indexOf(".") !== -1 && event.email.indexOf("@") !== -1) {
    response = {
      isEmail: true,
    };
  }

  return response;
};
