import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class ProductModel extends Model {
    public IDproduct!: number;
    public name!: string;
    public price!: number;
    public productionDate!: Date;
    public endDistributionDate!: Date;
}

ProductModel.init(
    {
        IDproduct: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: {
                    msg: "notEmpty"
                },
                isInt: {
                    msg: "isInt"
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                name: 'name',
                msg: "isUniqueName"
            },
            validate: {
                len: {
                    args: [2, 60],
                    msg: "len_2_60"
                },
                notEmpty: {
                    msg: "notEmpty"
                }
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "notEmpty"
                },
                isDecimal: {
                    msg: "isDecimal"
                },
                len: {
                    args: [1, 11],
                    msg: "len_1_11"
                },
                isPositive(value) {
                    if (parseInt(value) < 0) {
                        throw new Error("isPositive")
                    }
                }
            }
        },
        productionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "notEmpty"
                },
                isDate: {
                    msg: "isDate"
                }
            }
        },
        endDistributionDate: {
            type: DataTypes.DATE,
            allowNull:true,
            validate:{
                isDate:{
                    msg:"isDate"
                },
                isAfterProductionDate:function(endDistributionDate){
                    if(this.endDistributionDate && this.productionDate > this.endDistributionDate){
                        throw new Error("endDistributionDate")
                    }
                }
            }
        }
    },

    { sequelize, modelName:'ProductModel' }
);

export default ProductModel;
