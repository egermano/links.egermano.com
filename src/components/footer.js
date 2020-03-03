import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
// import Emoji from './emoji';

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
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<article className="media center">

						<span className="icon">
							<a href="https://github.com/app-generator/gatsby-starter-bulma-css">
								<FaGithub size="fa-2x" color="black" />
							</a>
						</span>

					</article>
					<br />
					<p className="is-size-6">
						
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
