import Basis from "./modules/basis";
import Account from "./modules/account";
import Department from "./modules/department";

const api = {
    upload_token: Basis.upload_token,
    get_sms: Account.get_sms,
    register: Account.register,
    login: Account.login,
    // 部门
    department_list: Department.department_list,
    department_list_all: Department.department_list_all,
    department_add: Department.department_add,
    department_detailed: Department.department_detailed,
    department_edit: Department.department_edit,
    department_status: Department.department_status,
    department_delete: Department.department_delete,
}

export default api;