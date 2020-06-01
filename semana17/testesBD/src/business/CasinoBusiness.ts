import { Casino, placeCasino } from "../models/casino/Casino";
import { User } from "../models/casino/User";
import { Result } from "../models/casino/Result";

export class CasinoBusiness {
  public verifyAge(casino: Casino, users: User[]): Result {
    let resultEua: any = {};
    let resultBrazilian: any = {};
    let euaAllowed = [];
    let euaUnallowed = [];
    let brazilianAllowed = [];
    let brazilianUnallowed = [];
    users.forEach((user) => {
      if (casino.getPlace() === placeCasino.EUA) {
        if (user.getAge() >= 21) {
          euaAllowed.push(user.getName());
          resultEua = {
            americans: { allowed: euaAllowed },
          };
        }
      } else if (casino.getPlace() === placeCasino.EUA && user.getAge() <= 21) {
        euaUnallowed.push(user.getName());
        resultEua = {
          americans: { unallowed: euaUnallowed },
        };
      } else if (
        user.getAge() >= 18 &&
        casino.getPlace() === placeCasino.BRAZIL
      ) {
        euaAllowed.push(user.getName());
        resultBrazilian = {
          brazilians: { allowed: brazilianAllowed },
        };
      } else if (
        user.getAge() <= 18 &&
        casino.getPlace() === placeCasino.BRAZIL
      ) {
        euaUnallowed.push(user.getName());
        resultBrazilian = {
          brazilians: { unallowed: brazilianUnallowed },
        };
      }
    });

    const result: Result = {
      brazilians: { allowed: brazilianAllowed, unallowed: brazilianUnallowed },
      americans: { allowed: euaAllowed, unallowed: euaUnallowed },
    };
    return result;
  }
}
