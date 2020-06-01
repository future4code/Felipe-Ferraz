import { v4 } from "uuid";

export default class GenerationID {
  public generation(): string {
    return v4();
  }
}
