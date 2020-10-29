import * as dotenv from "dotenv";
dotenv.config();

export default function getDbURL(): string {
  if (process.env.NODE_ENV === "test") {
    return process.env.DB_TEST_URL;
  }
  return process.env.DB_URL;
}
