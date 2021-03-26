import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import PageContact from "../components/PageContact/pagecontact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Banner />
    <TextBlock
      id="about"
      title="Getting Admission to your Dream School is  never easy, but AIO  is here to help"
      paragraph="AIO Educational Consult is an academic body that help  educate, inform and inspire  Individual  on how to explore the academic world  with ease."
    >
      <Link to="perks" smooth={true} duration={500}>
        <Button label="Tell Me More" cta="Tell Me More!" />
      </Link>
    </TextBlock>
    <TextBlockImg
      id="perks"
      title="We have What it takes  to help you succeed"
      subtitle="AIO Educational consult  is  the perfect  place to   start and grow to your full potential. We  help Individuals  achieve     their proffesional and careers goals   in their chosen feild  .
          "
    >
      <div className="flex-container trio-block">
        <Perk
          img={perk1Img}
          alt="Super fast speed increases"
          title="Speedy"
          content="Super-fast response times ensure your business is not affected"
        />
        <Perk
          img={perk2Img}
          alt="Great savings to be made"
          title="Affordable"
          content="A choice of packages to suit every business type and size"
        />
        <Perk
          img={perk3Img}
          alt="Super fast speed increases"
          title="Friendly"
          content="Advisors who are available 24/7, all with exprt knowledge"
        />
      </div>
    </TextBlockImg>
    <Packages
      title="Our Services"
      para="Choose the perfect solution for you.  AIO Educational Consult can offer amazing value and expert advice"
    >
      <IconContext.Provider
        value={{
          color: "#7FFF00",
          size: "1.2em",
          style: { verticalAlign: "middle", marginRight: "5px" },
        }}
      >
        <Package
          title="Trainings"
          img={require("../images/ict-training.jpeg")}
          active={true}
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
    <PageContact
      id="contact"
      title="Contact AIO Educational Consult  today and see how we can help you Achieve your Educational and professional goals"
      subtitle="Every second counts when you're looking to get your new business started. Drop  AIO educational consult a message and one of our representatives will be in contact"
    />
  </>
)
