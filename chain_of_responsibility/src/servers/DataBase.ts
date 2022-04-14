import PermissionType from "./PermissionType";

interface dataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}
const DataBase: dataBaseItem[] = [
  {
    email: "master@hcode.com.br",
    password: "123456",
    permission: PermissionType.ADMIN,
  },
  {
    email: "user@hcode.com.br",
    password: "pass@123",
    permission: PermissionType.USER,
  },
];

export default DataBase;
