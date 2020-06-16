const verifyCep = (cep: string) => {
  if (!cep.match(/(\d{5}-\d{3})/)) {
    return false;
  }
  return true;
};

console.log(verifyCep("33110-600"));
