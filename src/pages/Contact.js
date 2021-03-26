import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../styles/bannerStyles"

import PageContact from "../components/PageContact/pagecontact"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-us .jpeg" }) {
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
              <span> Contact us today to Achieve your professional goals</span>
            </motion.h1>

            <Link to="contact" smooth={true} duration={500}>
              <span className="sr-only">Jump to contact</span>
              <Button
                cta=" get Started"
                label="Banner Learn More"
                anchor={true}
                href="linking"
              />
            </Link>
          </div>
        </BackgroundImage>
        <PageContact />
      </BannerStyles>
    </>
  )
}

export default Contact
