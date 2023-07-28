import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class User extends Model {
    public IDuser!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
}

User.init(
    {
        IDuser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: {
                    msg: "The ID field with a certain name I will not give you here cannot be empty"
                },
                isInt: {
                    msg: "The ID field has to be an Integer"
                }
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: {
                args: true,
                msg: "this appears to not work and I have no idea why"
            },
            validate: {
                len: {
                    args: [2, 60],
                    msg: "This field should have from 2 to 60 characters"
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: {
                args: true,
                msg: "this appears to not work and I have no idea why"
            },
            validate: {
                len: {
                    args: [2, 60],
                    msg: "This field should have from 2 to 60 characters"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: {
                args: true,
                msg: "this appears to not work and I have no idea why"
            },
            unique: {
                name: 'email',
                msg: "This email is already registered"
            },
            validate: {
                isEmail: {
                    msg: "This has to be an email!"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: {
                args: true,
                msg: "this appears to not work and I have no idea why"
            },
            validate: {
                len: {
                    args: [2, 60],
                    msg: "This field should have from 2 to 60 characters"
                }
            }
        }
    },

    { sequelize, modelName:'User' }
)

export default User;