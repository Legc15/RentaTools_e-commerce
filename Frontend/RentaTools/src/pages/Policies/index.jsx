import "./styles.css";

const Policies = () => {
  return (
    <>
      <div className="policies-top">
        <button className="policies-back-button" onClick={() => window.history.back()}>
          Volver Atras
        </button>
      </div>

      <div className="policiesBody">
        <div className="policies">
          <h1 className="policies-title">Términos y condiciones</h1>

          <p className="policies-discrecion">
            Al acceder y utilizar nuestro sitio web de alquiler de maquinaria y
            herramientas para construcción, aceptas cumplir y estar sujeto a
            estos términos y condiciones de uso.
          </p>
          <ul className="policies-ul">
            <li>
              <h2 className="policies-bullet">Uso de la Plataforma</h2>
              <p className="policies-descripcion">
                Nuestro sitio web proporciona una plataforma para alquilar
                maquinaria y herramientas para construcción. Te comprometes a
                utilizar nuestros servicios solo con fines legales y de acuerdo
                con todas las leyes y regulaciones aplicables.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Registro y Cuentas de Usuario</h2>
              <p className="policies-descripcion">
                Para utilizar ciertas funciones de nuestro sitio, puedes
                necesitar crear una cuenta. Eres responsable de mantener la
                confidencialidad de tu información de inicio de sesión y de
                todas las actividades que ocurran bajo tu cuenta.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Alquiler y Devolución</h2>
              <p className="policies-descripcion">
                El proceso de alquiler de maquinaria y herramientas está sujeto
                a disponibilidad y a términos específicos que se detallarán
                durante el proceso de reserva. Te comprometes a devolver los
                artículos alquilados en la fecha y condiciones acordadas.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Tarifas y Pagos</h2>
              <p className="policies-descripcion">
                Las tarifas de alquiler se mostrarán claramente durante el
                proceso de reserva. Aceptas pagar todas las tarifas y costos
                asociados al uso de nuestro servicio según lo acordado. Nos
                reservamos el derecho de cambiar las tarifas en cualquier
                momento, previo aviso.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Responsabilidades del Usuario</h2>
              <p className="policies-descripcion">
                Eres responsable del uso adecuado y seguro de la maquinaria y
                herramientas alquiladas. Te comprometes a utilizarlos siguiendo
                las instrucciones proporcionadas y a cumplir con todas las
                normativas de seguridad.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Limitación de Responsabilidad</h2>
              <p className="policies-descripcion">
                No nos hacemos responsables de cualquier daño, pérdida o lesión
                resultante del uso de la maquinaria y herramientas
                proporcionadas. Es responsabilidad del usuario utilizar los
                equipos de manera adecuada y segura.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Propiedad Intelectual</h2>
              <p className="policies-descripcion">
                Nuestro sitio web y su contenido (salvo que se indique lo
                contrario) están protegidos por derechos de autor, marcas
                registradas y otras leyes de propiedad intelectual. No puedes
                utilizar nuestro contenido sin nuestro consentimiento explícito.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">
                Modificaciones de los Términos y Condiciones
              </h2>
              <p className="policies-descripcion">
                Nos reservamos el derecho de modificar estos términos y
                condiciones en cualquier momento. Se te notificará sobre
                cualquier cambio significativo en estos términos. El uso
                continuado de nuestros servicios después de dichos cambios
                constituirá tu aceptación de los nuevos términos.
              </p>
            </li>
            <li>
              <h2 className="policies-bullet">Ley Aplicable</h2>
              <p className="policies-descripcion">
                Estos términos y condiciones se rigen e interpretan de acuerdo
                con las leyes vigentes de [indica la jurisdicción aplicable].
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Policies;
