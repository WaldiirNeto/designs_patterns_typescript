import IDbProduct from "./IDbPRoduct";

export default class MongoDBProduct implements IDbProduct {
    getProductId(productId: number): string {
        return `MongoDB: Exibindo os dados do produto ${productId}`
    }

}