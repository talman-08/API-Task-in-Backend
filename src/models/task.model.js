// src/models/user.model.js
import pool from '../config/data_Base.js'; 

// 1. Get All Tasks (Matches your 'tasks' table)
export const getAll = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM tasks");
        return rows;
    } catch (err) {
        console.error("Database Error in getAll:", err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
};

// 2. Get Task By ID
export const getById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM tasks WHERE id = ?", [id]);
        return rows[0];
    } finally {
        if (conn) conn.release();
    }
};

// 3. Create Task
export const create = async (data) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query("INSERT INTO tasks (title) VALUES (?)", [data.title]);
        return result;
    } finally {
        if (conn) conn.release();
    }
};

// 4. Update Task
export const update = async (id, data) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query("UPDATE tasks SET title = ? WHERE id = ?", [data.title, id]);
        return result;
    } finally {
        if (conn) conn.release();
    }
};

// 5. Delete Task
export const remove = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query("DELETE FROM tasks WHERE id = ?", [id]);
        return result;
    } finally {
        if (conn) conn.release();
    }
};










// // models/user.model.js
// import pool from '../config/data_Base.js'; 

// class User {
//   constructor(title) {
//     this.title = title;
//   }

//   // Used by createTask in controller
//   static async create(data) {
//     let conn;
//     try {
//       conn = await pool.getConnection();
//       const query = "INSERT INTO tasks (title) VALUES (?)";
//       const result = await conn.query(query, [data.title]);
//       return result; // Returns insertId
//     } finally {
//       if (conn) conn.release();
//     }
//   }

//   // Used by getTasks in controller
//   static async getAll() {
//     let conn;
//     try {
//       conn = await pool.getConnection();
//       const rows = await conn.query("SELECT * FROM tasks");
//       return rows;
//     } finally {
//       if (conn) conn.release();
//     }
//   }

//   // Used by getTaskById in controller
//   static async getById(id) {
//     let conn;
//     try {
//       conn = await pool.getConnection();
//       const rows = await conn.query("SELECT * FROM tasks WHERE id = ?", [id]);
//       return rows[0]; 
//     } finally {
//       if (conn) conn.release();
//     }
//   }

//   // Used by updateTask and replaceTask in controller
//   static async update(id, data) {
//     let conn;
//     try {
//       conn = await pool.getConnection();
//       const query = "UPDATE tasks SET title = ? WHERE id = ?";
//       const result = await conn.query(query, [data.title, id]);
//       return result;
//     } finally {
//       if (conn) conn.release();
//     }
//   }

//   // Used by deleteTask in controller
//   static async remove(id) {
//     let conn;
//     try {
//       conn = await pool.getConnection();
//       const result = await conn.query("DELETE FROM tasks WHERE id = ?", [id]);
//       return result;
//     } finally {
//       if (conn) conn.release();
//     }
//   }
// }

// export default User;