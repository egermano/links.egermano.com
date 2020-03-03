import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-dark">
        <div className="content has-text-centered">
          <div className="columns">
            <div className="column">
              <p className="has-text-light">
                Todos os direitos reservados &copy; O Bruno Germano
              </p>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
