import { Residence } from "./Class/Residence/Residence";
import { Commerce } from "./Class/Commerce/Commerce";
import { Industry } from "./Class/Industry/Industry";

const myResidence = new Residence(5, "12312346543");

console.log(`CEP da minha residência : ${myResidence.getCep()}`);

const myCommerce = new Commerce(5, "45984261841");

console.log(`CEP do meu comércio : ${myCommerce.getCep()}`);

const myIndustry = new Industry(5, "1529871642");

console.log(`CEP da minha industria : ${myIndustry.getCep()}`);
