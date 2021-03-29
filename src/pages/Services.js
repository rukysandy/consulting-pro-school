import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../components/Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../styles/bannerStyles"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import { IconContext } from "react-icons"
import Package from "../components/Package/package"
import Packages from "../components/Packages/packages"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "our-Services.jpeg" }) {
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
      <Packages
        title="Our Services"
        // para="Choose the perfect solution for you.  AIO Educational Consult can offer amazing value and expert advice"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package
            title="Trainings and Professional Developement"
            img={require("../images/proffesional-developement.jpeg")}
            active={true}
            Content=" We offer  professional courses   such as Human Resource Management, Business Administration and Management, Small Business Management, and  Marketing to both Organizations and  individuals"
          >
            {/* <ul>
            <li>
              <MdDone />1 User
            </li>
            <li>
              <MdDone />
              1GB Storage
            </li>
            <li className="linethrough">
              <MdClear color="red" />
              Dedicated Advisor
            </li>
            <li className="linethrough">
              <MdClear color="red" />
              24/7 Support
            </li>
          </ul> */}
            {/* <Link to="contact" smooth={true} duration={500}>
            <Button label="I want this" cta="I want this!" />
          </Link> */}
          </Package>
          <Package
            title="University Admissions"
            active={true}
            img={require("../images/professional-training.jpeg")}
            Content=" We  help secondary school leavers and those interested in pursuing undergraduate or  higher degree  get Admitted to prestigious  school of higher learning  In Nigeria and Over sea
            "
          >
            {/* <ul>
            <li>
              <MdDone />
              24/7 Support
            </li>
            <li>
              <MdDone />
              Dedicated Advisor
            </li>
            <li>
              <MdDone />
              Unlimited Storage
            </li>
            <li>
              <MdDone />
              Unlimited Users
            </li>
          </ul> */}
            {/* <Link to="contact" smooth={true} duration={500}>
            <Button label="I want this" cta="I want this!" />
          </Link> */}
          </Package>
          <Package
            title="Enterprenuership"
            img={require("../images/enterprenuer.jpeg")}
            active={true}
            Content=" We  help train and guide individuals how to start and build successful businesses from new and innovative Ideas
            "
          >
            {/* <ul>
            <li>
              <MdDone />
              10 Users
            </li>
            <li>
              <MdDone />
              500GB Storage
            </li>
            <li>
              <MdDone />
              Advice Support
            </li>
            <li className="linethrough">
              <MdClear color="red" />
              Dedicated Advisor
            </li>
          </ul> */}
            {/* <Link to="contact" smooth={true} duration={500}>
            <Button label="I want this" cta="I want this!" />
          </Link> */}
          </Package>

          <Package
            title="JAMB/ Post Secondary Tutorials"
            img={require("../images/jambite.png")}
            active={true}
            Content=" We  Offer post Secondary school course for those who wishes  to futher their academics beyond secondary school level and JAMB classes "
          >
            {/* <ul>
            <li>
              <MdDone />
              10 Users
            </li>
            <li>
              <MdDone />
              500GB Storage
            </li>
            <li>
              <MdDone />
              Advice Support
            </li>
            <li className="linethrough">
              <MdClear color="red" />
              Dedicated Advisor
            </li>
          </ul> */}
            {/* <Link to="contact" smooth={true} duration={500}>
            <Button label="I want this" cta="I want this!" />
          </Link> */}
          </Package>
          <Package
            title="ICT Training"
            active={true}
            img={require("../images/ict-training.jpeg")}
            Content=" We  offer ICT training for individuals who want to know more about the IT world and also Training Package for organizations who wishes to train their staffs"
          >
            {/* <ul>
            <li>
              <MdDone />
              24/7 Support
            </li>
            <li>
              <MdDone />
              Dedicated Advisor
            </li>
            <li>
              <MdDone />
              Unlimited Storage
            </li>
            <li>
              <MdDone />
              Unlimited Users
            </li>
          </ul> */}
            {/* <Link to="contact" smooth={true} duration={500}>
            <Button label="I want this" cta="I want this!" />
          </Link> */}
          </Package>
          <Package
            title="Online Classes"
            img={require("../images/online-classes.jpeg")}
            active={true}
          >
            {/* <ul>
            <li>
              <MdDone />
              10 Users
            </li>
            <li>
              <MdDone />
              500GB Storage
            </li>
            <li>
              <MdDone />
              Advice Support
            </li>
            <li className="linethrough">
              <MdClear color="red" />
              Dedicated Advisor
            </li>
          </ul> */}
            {/* <Link to="contact" smooth={true} duration={500}>
            <Button label="I want this" cta="I want this!" />
          </Link> */}
          </Package>
        </IconContext.Provider>
      </Packages>
    </>
  )
}

export default Services
