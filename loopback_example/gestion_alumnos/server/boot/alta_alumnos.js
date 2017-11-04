module.exports = function(app) {
  app.dataSources.mongodb_conn.automigrate('Alumno', function(err) {
    if (err) throw err;

    app.models.Alumno.create([{
      nombre: 'Luke  Web',
      apellido:"Skywalker",
      matricula: 84239,
      edad: 77
    
    }, {
       nombre: 'Donald  Mex',
      matricula: 34332,
      apellido: 'Trump',
      edad: 100
    }], function(err, alumnos) {
      if (err) throw err;

      console.log('Models created: \n', alumnos);
    });
  });
}

