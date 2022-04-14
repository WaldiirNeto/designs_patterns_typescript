import IDbProduct from "./IDbPRoduct";

export default class MySQLProduct implements IDbProduct {

    getProductId(productId: number): string {
        return `MySQL: exibindo dados do produto ${productId}`
    }
}