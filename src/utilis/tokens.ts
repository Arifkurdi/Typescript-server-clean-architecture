import jwt from "jsonwebtoken";

interface user_token_data {
  name: string;
  phone: number;
  role: string;
  email: string;
}

class Tokens {
  public createToken({ name, phone, email, role }: user_token_data): string {
    const token = jwt.sign({ name, phone, email, role }, "helloWorld", {
      expiresIn: "30d",
    });
    return token;
  }
}

export default Tokens;
