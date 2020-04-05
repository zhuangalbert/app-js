const pool = require("../../config/database");

module.exports = {
    createUser: (data, callBack) => {
        pool.query(
            `insert into users(username, name, role, password)
                values(?,?,?,?)`,
            [
                data.username,
                data.name,
                data.role,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getUserById: (id,callBack) => {
        pool.query(
            `select id,username,name,role,created_at,updated_at from users where id = ?`,
            [id],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    getUserByUsername: (username, callBack) => {
        pool.query(
            `select id,username,name,role,password from users where username = ?`,
            [username],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

}