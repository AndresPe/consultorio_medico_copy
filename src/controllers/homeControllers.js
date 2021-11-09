const controller = {};

controller.home = (req, res) => {
    res.render('home', {
        data: false,
        alertsPacient: false
    });
};

controller.validate = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        var dataQuery;
        if (data.userTipe == 0) {
            var alert = "Por favor elija un tipo de usuario correcto."
            res.render('home', {
                data: alert,
                alertsPacient: false
            })
        }
        if (data.userTipe == 1) {
            dataQuery = 'SELECT * FROM administrador WHERE administrador.id = ?';
            conn.query(dataQuery, [data.idUser], (err, rows) => {
                if (err) {
                    console.log(err);
                }
                if (rows[0] === undefined || data.password != rows[0].password) {
                    var alert = "Usuario o contraseña inválidos."
                    res.render('home', {
                        data: alert,
                        alertsPacient: false
                    });
                } else {
                    res.redirect('/admin/');
                }
            });
        }
        if (data.userTipe == 2) {
            var user = data.idUser;
            dataQuery = 'SELECT * FROM paciente WHERE paciente.id = ?';
            conn.query(dataQuery, [user], (err, rows) => {
                if (err) {
                    console.log(err);
                }
                if (rows[0] === undefined || data.password != rows[0].password) {
                    var alert = "Usuario o contraseña inválidos."
                    res.render('home', {
                        data: alert,
                        alertsPacient: false
                    });
                } else {
                    conn.query('SELECT citas.code, paciente.username, consultorio.name, DATE_FORMAT(citas.fechaAsignada, "%y-%m-%d") AS fechaAsignada, citas.horaAsignada, citas.fechaCreacion, citas.fechaModificacion, citas.estado, citas.detalles  FROM citas, paciente, consultorio WHERE citas.idPaciente = ? AND citas.idPaciente = paciente.id AND citas.idConsultorio = consultorio.id' , [user], (err, rows) => {
                        if (rows[0] == undefined) { 
                            var alert = "Error: El paciente no tiene citas registradas"
                            res.render('pacient', {
                                data: false,
                                alertsPacient: alert
                            });
                        } else {
                            console.log('Se encontró las citas del paciente correctamente');
                            console.log(rows);
                            res.render('pacient', {
                                data: rows,
                                alertsPacient: false
                            });
                        }
                    });   
                }
            });

        }
    });
}

controller.signIn = (req, res) => {
    res.render('home_sign_in', {
        data: false
    });
}

controller.saveNewAfiliado = (req, res) => {
    const data = req.body;
    if (data.password != data.passwordVerify) {
        var alert = "Error: Las contraseñas no coinciden."
        res.render('home_sign_in', {
            data: alert
        });
    } else {
        if (data.check == undefined) {
            var alert = "Error: Por favor acepte nuestras términos de uso."
            res.render('home_sign_in', {
                data: alert
            });
        } else {
            req.getConnection((err, conn) => {
                conn.query('INSERT INTO paciente SET id = ?, username = ?, password = ?', [data.idPaciente, data.username, data.password], (err, rows) => {
                    if (err) {
                        if (err.sqlState == 23000) {
                            var alert = "Error: El usuario ya está registrado."
                            res.render('home_sign_in', {
                                data: alert
                            });
                        } else {
                            console.log('Error encontrado: ');
                            console.log(err.sqlState);
                        }
                        
                    } else {
                        console.log('Se insertó el nuevo afiliado correctamente');
                        res.redirect('/home/');
                    }
                });
            });
        }
    }
}


/**
 * IGNORAR ESTA PORCIÓN DE CÓDIGO DEL ARCHIVO _LISTQUOTES.EJS
 * EXTRAÑAMENTE ES DEPURADO AÚN ESTANDO COMENTADO
 * <!-- <% if (alertsPacient) {%>
            <div id="alertDataInvalid" class="alertDataInvalid alert-dismissible alert-warning">
              <p class="mb-0"><%= alertsPacient%></p>
            </div>
    <% } %> -->
 */


module.exports = controller;