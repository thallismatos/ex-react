import s from "../styles/layout/footer.module.scss";
import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <section className={s.infoFooter}>
          <p>Aluna: Thallis Matos</p>
          <p>Instrutora: Vinicius</p>
          <p>Facilitador: Marina</p>
          <p>
            Layout criado para fins de estudos na Escola Vai na Web - jan. 2025
          </p>
        </section>

        <div className={s.socialLinks}>
          <ul>
            <li>
              <a href="#">
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
