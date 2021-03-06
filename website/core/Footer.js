"use strict";

const React = require("react");

const GithubButton = props => (
  <a
    className="github-button"
    href={props.config.githubUrl}
    data-icon="octicon-star"
    data-show-count="true"
    aria-label="Star this project on GitHub"
  >
    Star
  </a>
);

GithubButton.propTypes = {
  config: React.PropTypes.object
};

class Footer extends React.Component {
  url(path) {
    return this.props.config.baseUrl + "docs/" + this.props.language + path;
  }

  render() {
    return (
      <footer className="footerSection nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.url("/index.html")}>About</a>
            <a href={this.url("/install.html")}>Usage</a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href={this.props.config.baseUrl + this.props.language + "/users/"}
            >
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/prettier"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
            <a href="https://gitter.im/jlongster/prettier">Chat on Gitter</a>
            <a href="https://twitter.com/PrettierCode">
              @PrettierCode on Twitter
            </a>
            <object
              type="image/svg+xml"
              data="https://img.shields.io/twitter/follow/prettiercode.svg?label=Follow+Prettier&style=social"
            >
              <a href="https://twitter.com/intent/follow?screen_name=prettiercode">
                <img
                  alt="Follow Prettier on Twitter"
                  src="https://img.shields.io/twitter/follow/prettiercode.png?label=Follow+Prettier&style=social"
                />
              </a>
            </object>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + "blog"}>Blog</a>
            <a href={this.props.config.githubUrl}>GitHub</a>
            <a href={this.props.config.githubUrl + "/issues"}>Issues</a>
            <GithubButton config={this.props.config} />
          </div>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  language: React.PropTypes.string,
  config: React.PropTypes.object
};

module.exports = Footer;
