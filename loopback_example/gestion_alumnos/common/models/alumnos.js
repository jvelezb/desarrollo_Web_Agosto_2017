'use strict';

module.exports = function(Alumnos) {

		 Alumnos.saludos = function(msg, cb) {
      cb(null, 'Un saludo a la banda... ' + msg);
    }

    Alumnos.remoteMethod('saludos', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'saludos', type: 'string'}
    });


};
