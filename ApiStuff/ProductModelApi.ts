import ProductModel from "../Models/ProductModel"

export const getProducts = async () => {
    const products = await ProductModel.findAll();
    const productsString = JSON.stringify(products);
    const productsObject = JSON.parse(productsString);
    return productsObject;
};
