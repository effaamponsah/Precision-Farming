/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/sprout.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("sensors")}>View Devices used</Button>
            {/* <Button href="#b">Example Link</Button> */}
            <Button href={docUrl("starting.html")}>Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        {/* <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock> */}
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "Reduce time spent each day visiting your farm. Time is money and dont waste it !!!",
            image: `${baseUrl}img/undraw_in_no_time_6igu.svg`,
            imageAlign: "left",
            title: "Save time"
          }
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light" id="#b">
        {[
          {
            content:
              "Having a tight Schedule?, all you need is a mobile phone or an internet connected device and you are there",
            image: `${baseUrl}img/undraw_absorbed_in_xahs.svg`,
            imageAlign: "right",
            title: "Data Access, limitless"
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              "With every device connected to your farm, you get **insight** from your farm without missing a thing",
            image: `${baseUrl}img/undraw_investing_7u74.svg`,
            imageAlign: "right",
            title: "Farm Analytics"
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content:
              "Data transmission is between you and your device." +
              "<br />" +
              "**No intermediaries**",
            image: `${baseUrl}img/undraw_secure_server_s9u8.svg`,
            imageAlign: "top",
            title: "Secured Data"
          },
          {
            content:
              "No problem" +
              "<br />" +
              "Call a dedicated line and receive **live** updates from Twilio Ml",
            image: `${baseUrl}img/undraw_mobile_application_s7d0.svg`,
            imageAlign: "top",
            title: "Offline ?"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
