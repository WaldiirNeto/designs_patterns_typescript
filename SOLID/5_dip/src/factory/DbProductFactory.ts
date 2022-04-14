import Db from "../model/Db";
import IDbProduct from "../model/IDbPRoduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MysqlProduct";

export default class DbProductFactory {

    private static type: Db = Db.MONGODB;
    public static create(): IDbProduct {
        if (DbProductFactory.type === Db.MYSQL) {
            return new MySQLProduct();
        } else if (DbProductFactory.type === Db.MONGODB) {
            return new MongoDBProduct()
        }
    }

}