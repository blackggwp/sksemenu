import React from "react";
import { Helmet } from "react-helmet";

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sukishi Menu</title>
          {/* <!-- set `maximum-scale` for some compatibility issues --> */}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        </Helmet>
      </div>
    );
  }
};