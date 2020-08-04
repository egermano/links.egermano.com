import React, { useEffect } from "react";
import { FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import Layout from "../components/layout";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: ""
    };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "//marketing.obrunogermano.com/index.php/form/generate.js?id=3";
    script.async = true;

    document.getElementById("newletter-form").appendChild(script);
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h2 className="title has-text-centered">Meus links</h2>

            <div className="columns is-multiline is-centered">
            <div className="column is-8 has-text-centered">
                <a
                  href="https://www.youtube.com/c/egermano/videos"
                  className="button is-large is-primary is-fullwidth"
                >
                  <span className="icon is-medium">
                    <FaYoutube />
                  </span>
                  <span>Último vídeo do Canal</span>
                </a>
              </div>
              <div className="column is-8 has-text-centered">
                <a
                  href="http://to.egermano.com/lt-youtube"
                  className="button is-large is-primary is-fullwidth"
                >
                  <span className="icon is-medium">
                    <FaYoutube />
                  </span>
                  <span>Youtube</span>
                </a>
              </div>
              <div className="column is-8 has-text-centered">
                <a
                  href="https://instagram.com/egermano"
                  className="button is-large is-primary is-fullwidth"
                >
                  <span className="icon is-medium">
                    <FaInstagram />
                  </span>
                  <span>Instagram</span>
                </a>
              </div>
              <div className="column is-8 has-text-centered">
                <a
                  href="http://to.egermano.com/lt-twitter"
                  className="button is-large is-primary is-fullwidth"
                >
                  <span className="icon is-medium">
                    <FaTwitter />
                  </span>
                  <span>Twitter</span>
                </a>
              </div>
              <div className="column is-8 has-text-centered">
                <a
                  href="https://www.linkedin.com/in/brunogermano/"
                  className="button is-large is-primary is-fullwidth"
                >
                  <span className="icon is-medium">
                    <FaLinkedin />
                  </span>
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="title has-text-centered">Receba Novidades Tech no seu email</h2>
            <div id="newletter-form" />
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;
