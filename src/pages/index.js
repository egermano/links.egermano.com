import React from "react";
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">Meus links</h2>

        <div className="columns is-multiline is-centered">
          <div className="column is-8 has-text-centered">
            <a
              href="http://to.egermano.com/lt-youtube"
              className="button is-large is-primary is-fullwidth"
            >
              <span class="icon is-medium">
                <FaYoutube size="fa-1x" />
              </span>
              <span>YOUTUBE</span>
            </a>
          </div>
          <div className="column is-8 has-text-centered">
            <a href="" className="button is-large is-primary is-fullwidth">
            <span class="icon is-medium">
                <FaTwitter size="fa-1x" />
              </span>
              <span>TWITTER</span>
            </a>
          </div>
          <div className="column is-8 has-text-centered">
            <a href="" className="button is-large is-primary is-fullwidth">
            <span class="icon is-medium">
                <FaLinkedin size="fa-1x" />
              </span>
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
