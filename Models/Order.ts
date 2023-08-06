import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class Order extends Model {
    public IDorder!: number;
    public datePlaced!: Date;
    public clientContactInfo!: string;
    public shippingCompany!: string;
    public premiumDelivery!: boolean;
}

Order.init(
    {
        IDorder: {
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
        datePlaced: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field cannot be empty"
                },
                isDate: {
                    msg: "This field has to be a date"
                }
            }
        },
        clientContactInfo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field cannot be empty"
                },
                isEmail: {
                    msg: "The contact info has to be a valid e-mail address"
                }
            }
        },
        shippingCompany: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field cannot be empty"
                },
                isAlphanumeric: {
                    msg: "This field has to be a String"
                }
            }
        },
        premiumDelivery: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field cannot be empty"
                },
                isBool(value) {
                    if(!(value === true || value === false)) {
                        throw new Error("This field has to be either true or false")
                    }
                }
            }
        }
    },

    { sequelize, modelName:'Order' }
);

export default Order;
