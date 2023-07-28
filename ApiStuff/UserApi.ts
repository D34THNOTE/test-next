import User from "../Models/User"

export const getUserById = async (IDuser: number) => {
    const user = await User.findByPk(IDuser);
    const userString = JSON.stringify(user);
    return JSON.parse(userString);
};
