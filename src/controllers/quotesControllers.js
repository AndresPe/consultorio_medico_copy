class find {
    findPacient(id) {
        const rows = {
            id: id,
            name: 'nombre'
        }
        return rows;
    }
}

module.exports = find;

// const controller = {};

// controller.list = (req, res) => {
//     req.getConnection((err, conn) => {
//         var alert = false;
//         conn.query('SELECT citas.code, paciente.username, consultorio.name, DATE_FORMAT(citas.fechaAsignada, "%y-%m-%d") AS fechaAsignada, citas.horaAsignada, citas.fechaCreacion, citas.fechaModificacion, citas.estado, citas.detalles  FROM citas, paciente, consultorio WHERE citas.idPaciente = paciente.id AND citas.idConsultorio = consultorio.id ORDER BY citas.fechaAsignada', (err, rows)=>{
//             return rows;
//             // if (err) {
//             //     res.json(err);
//             // }
//             // res.render('quotes', {
//             //     data: rows,
//             //     alerts: false
//             // });
//         });
//     });
// };

// controller.save = (req, res) => {
//     const data = req.body;
//     req.getConnection((err, conn) => {
//         conn.query('SELECT * FROM citas WHERE citas.fechaAsignada = ? AND citas.horaAsignada = ?', [data.fechaAsignada, data.horaAsignada], (err, rows) => {
//             if (rows[0] != undefined) {
//                 var alert = "El paciente ya tiene programada una cita en el horario elegido."
//                 conn.query('SELECT citas.code, paciente.username, consultorio.name, DATE_FORMAT(citas.fechaAsignada, "%y-%m-%d") AS fechaAsignada, citas.horaAsignada, citas.fechaCreacion, citas.fechaModificacion, citas.estado, citas.detalles  FROM citas, paciente, consultorio WHERE citas.idPaciente = paciente.id AND citas.idConsultorio = consultorio.id ORDER BY citas.fechaAsignada', (err, rows) => {
//                     if (err) {
//                         res.json(err);
//                     }
//                     res.render('quotes', {
//                         data: rows,
//                         alerts: alert
//                     });
//                 });
//             } else {
//                 conn.query('INSERT INTO citas SET ?', [data], (err, rows) => {
//                     console.log('Insertó los elementos de forma exitosa');
//                 });
//                 conn.query('SELECT citas.code, paciente.username, consultorio.name, DATE_FORMAT(citas.fechaAsignada, "%y-%m-%d") AS fechaAsignada, citas.horaAsignada, citas.fechaCreacion, citas.fechaModificacion, citas.estado, citas.detalles  FROM citas, paciente, consultorio WHERE citas.idPaciente = paciente.id AND citas.idConsultorio = consultorio.id ORDER BY citas.fechaAsignada', (err, rows) => {
//                     if (err) {
//                         res.json(err);
//                     }
//                     res.render('quotes', {
//                         data: rows,
//                         alerts: false
//                     });
//                 });
//             }
//         });
//     });
// };

// controller.delete = (req, res) => {
//     const code = req.params.code;
//     req.getConnection((err, conn) => {
//         conn.query('DELETE FROM citas WHERE code = ?', [code], (err, rows) => {
//             console.log('Eliminó el elemento exitosamente');
//         });
//         conn.query('SELECT citas.code, paciente.username, consultorio.name, DATE_FORMAT(citas.fechaAsignada, "%y-%m-%d") AS fechaAsignada, citas.horaAsignada, citas.fechaCreacion, citas.fechaModificacion, citas.estado, citas.detalles  FROM citas, paciente, consultorio WHERE citas.idPaciente = paciente.id AND citas.idConsultorio = consultorio.id ORDER BY citas.fechaAsignada', (err, rows) => {
//             if (err) {
//                 res.json(err);
//             }
//             res.render('quotes', {
//                 data: rows,
//                 alerts: false
//             });
//         });
//     });
// };

// controller.update = (req, res) => {
//     const code = req.params.code;
//     req.getConnection((err, conn) => {
//         conn.query('SELECT * FROM citas WHERE citas.code = ?', [code], (err, rows) => {
//             if (err) {
//                 res.json(err);
//             }
//             res.render('quotes_edit', {
//                 data: rows[0],
//                 alerts: false
//             });
//         });
//     });
// };

// controller.saveUpdate = (req, res) => {
//     const { code } = req.params;
//     const newData = req.body;
//     req.getConnection((err, conn) => {
//         conn.query('UPDATE citas SET ? WHERE code = ?', [newData, code], (err, rows) => {
//             res.redirect('/admin/');
//         });
//     });
// }



// // controller.find(id) = (req, res) => {

// //     // const {idPaciente} = req.body;

// //     req.getConnection((err, conn) => {
// //         conn.query('SELECT * FROM paciente WHERE paciente.id = ?', [id], (err, rows) => {
// //             return rows;
// //             // if (rows[0] == undefined) {
// //             //     var alert = "Error: El paciente no existe."
// //             //     res.render('quotes', {
// //             //         data: false,
// //             //         alerts: alert
// //             //     });
// //             // } else {
// //             //     conn.query('SELECT citas.code, paciente.username, consultorio.name, DATE_FORMAT(citas.fechaAsignada, "%y-%m-%d") AS fechaAsignada, citas.horaAsignada, citas.fechaCreacion, citas.fechaModificacion, citas.estado, citas.detalles  FROM citas, paciente, consultorio WHERE citas.idPaciente = ? AND citas.idPaciente = paciente.id AND citas.idConsultorio = consultorio.id', [idPaciente], (err, rows) => {
// //             //         console.log(rows);
// //             //         if (rows[0] == undefined) {
// //             //             var alert = "Error: El paciente no tiene citas registradas"
// //             //             res.render('quotes', {
// //             //                 data: false,
// //             //                 alerts: alert
// //             //             });
// //             //         } else {
// //             //             console.log('Se encontró las citas del paciente correctamente');
// //             //             res.render('quotes', {
// //             //                 data: rows,
// //             //                 alerts: false
// //             //             });
// //             //         }
// //             //     });
// //             // }
// //         });
        
// //     });
// // }

// // module.exports = controller;