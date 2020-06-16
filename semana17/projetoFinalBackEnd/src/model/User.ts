export class User {
  constructor(
    private id: string,
    private name: string,
    private password: string,
    private aproved: UserAproved,
    private role: UserRole,
    private nickname: string,
    private email: string,
    private description: string | null
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getNickname(): string | undefined {
    return this.nickname;
  }
  public getEmail(): string | undefined {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): UserRole {
    return this.role;
  }
  public getDescription(): string | null {
    return this.description;
  }
  public getAproved(): number {
    return this.aproved;
  }
}

export const stringToUserRole = (input: string): UserRole => {
  switch (input) {
    case "BANDA":
      return UserRole.BANDA;
    case "ADMIN":
      return UserRole.ADMIN;
    case "OUVINTE PAGANTE":
      return UserRole.OUVINTE_PAGANTE;
    case "OUVINTE":
      return UserRole.OUVINTE;
    default:
      throw new Error("Invalid user role");
  }
};

export enum UserRole {
  BANDA = "BANDA",
  OUVINTE = "OUVINTE",
  OUVINTE_PAGANTE = "OUVINTE PAGANTE",
  ADMIN = "ADMIN",
}

export const stringToUserAproved = (input: string): UserAproved => {
  switch (input) {
    case "APROVADA":
      return UserAproved.APROVADA;
    case "NAO APROVADA":
      return UserAproved.NAO_APROVADA;
    default:
      throw new Error("Invalid user role");
  }
};

export enum UserAproved {
  APROVADA = 1,
  NAO_APROVADA = 0,
}
