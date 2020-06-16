export const handler = (event: { num1: any; num2: any }) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(Number(event.num1) + Number(event.num2)),
  };
  return response;
};
