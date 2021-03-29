import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../styles/bannerStyles"
import TextBlock from "../components/TextBlock/textBlock"

import PageContact from "../components/PageContact/pagecontact"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "postgraduateimage.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <>
      <BannerStyles>
        <BackgroundImage
          Tag="section"
          className="hero-image"
          fluid={data.file.childImageSharp.fluid}
        >
          <div className="hero-content">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
            >
              <span>
                we offers educational services and lifelong skill aquisition
              </span>
            </motion.h1>

            <Link to="about" smooth={true} duration={500}>
              <span className="sr-only">Jump to about</span>
              <Button
                cta=" Learn More"
                label="Banner Learn More"
                anchor={true}
                href="linking"
              />
            </Link>
          </div>
        </BackgroundImage>
      </BannerStyles>
      <TextBlock
        id="about"
        title="About Us"
        paragraph="AIO Educational Consult is an academic body to educate, inform and inspire human on how to explore the academic world at ease. AIO Education Consult offers lifelong educational services that prepares individual for academic learning throughout his/her life time and also imbibe lifelong learning to citizens, professionals, through our entrepreneurial programmes at all level for sustainable development. "
      ></TextBlock>
      <TextBlock
        id="about"
        title="OUR MISSION"
        paragraph="To create future leaders and self reliance citizens, by developing people with active and creative minds especially in this era of entrepreneurial and technological advancement to be successful and to create an productive environment for sustainable development especially in Africa."
      ></TextBlock>
      <TextBlock
        id="about"
        title="OUR VISION"
        paragraph="Is to be one of the best academic body that will develop confident and responsible individuals who aspire to achieve their full potential in their chosen career.
In order to achieve this, AIO Educational Consult has put in place:
A conducive learning environment with well equipped and computerized class – rooms with latest technology.."
      ></TextBlock>
    </>
  )
}

export default About
