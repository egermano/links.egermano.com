import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './style.scss';

import Navbar from './navbar';

const Image = () => {
	const data = useStaticQuery(graphql`
	  query {
		placeholderImage: file(relativePath: { eq: "iot-bg.jpg" }) {
		  childImageSharp {
			fluid(maxWidth: 2440) {
			  ...GatsbyImageSharpFluid
			}
		  }
		}
	  }
	`)
  
	return <Img className="bg-image" fluid={data.placeholderImage.childImageSharp.fluid} />
  }

const Header = ({ siteTitle }) => (
	<section className="hero ">
		<Navbar />
		<Image />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								O BRUNO GERMANO
							</h1>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
