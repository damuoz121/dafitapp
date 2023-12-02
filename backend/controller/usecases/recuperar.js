// Importar nodemailer
const nodemailer = require('nodemailer');
// Importar jsonwebtoken
const jwt = require('jsonwebtoken');

// Crear una función para enviar el correo de recuperación
const sendRecoveryEmail = async (email) => {
  // Crear un token con el correo del usuario y una clave secreta
  const token = jwt.sign({email}, 'clave_secreta', {expiresIn: '1h'});
  // Crear un objeto transportador con la configuración de Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dafit.app.dev@gmail.com',
      pass: 'dafit.dev'
    }
  });
  // Definir las opciones del mensaje
  const mailOptions = {
    from: 'dafit.app.dev@gmail.com',
    to: userEmail,
    subject: 'Recuperar contraseña',
    text: 'Hola, hemos recibido una solicitud para recuperar tu contraseña. Por favor, haz clic en el siguiente enlace para verificar tu identidad y cambiar tu contraseña.',
    html: `<a href="/api/v1/recovery/${token}">Verificar y cambiar contraseña</a>`
  };
  // Enviar el mensaje y manejar el resultado
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ', info.response);
  } catch (error) {
    console.error('Error al enviar el correo: ', error);
  }
};