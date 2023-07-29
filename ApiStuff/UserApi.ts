import User from "../Models/User"

export const getUserById = async (IDuser: number) => {
    const user = await User.findByPk(IDuser);
    const userString = JSON.stringify(user);
    return JSON.parse(userString);
};

export const getUserByEmail = async (email: string) => {
    const user = await User.findOne({
        where: {email: email} // typescript shows an error but it should work
    });
    const userString = JSON.stringify(user);
    return JSON.parse(userString);
};
