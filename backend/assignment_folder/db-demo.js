// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'Music',
    port: 3306,
    dateStrings : true
});

// A simple SELECT query
try {
    const [results, fields] = await connection.query(
        'SELECT * FROM `songs`'
    );

    let {id, title, lyrics, relaseDate, createTime} = results[0];
    console.log(id); // results contains rows returned by server
    console.log(title);
    console.log(lyrics);
    console.log(relaseDate);
    console.log(createTime);
    console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
    console.log(err);
}
//
// // Using placeholders
// try {
//     const [results] = await connection.query(
//         'SELECT * FROM `songs`'
//     );
//
//     console.log(results[0]);
// } catch (err) {
//     console.log(err);
// }