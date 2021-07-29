import User from "../User/User.model";

export default interface Activity {
  id: string;

  name: string;

  description: string;

  user: User
}
