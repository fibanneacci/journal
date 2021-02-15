import React from "react"
//import Globe from "react-globe.gl"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Notes from "./notes.mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const markersInput = [
  {
    lat: 34.7465,
    long: -92.2896,
    links: [
      {
        display: "Spring 2021",
        value: "210201"
      },
      {
        display: "Winter 2021",
        value: "210101"
      },
      {
        display: "Autumn 2020",
        value: "201206"
      },
    ],
  },
  {
    lat: 37.4275,
    long: -122.1697,
    links: [
      {
        display: "Sometime 2021?",
        value: "210301"
      },
    ],
  },
  /*
  Add markers here! Note that one marker can contain multiple links.
  You can copy and past the following to create a new marker:
  {
    lat: <insert latitude>,
    long: <insert longitude>,
    links: [
      // Link 1
      {
        display: "<insert name you want displayed as link 1>",
        value: "<insert name of your corresponding .js page for link 1>"
      },
      // Link 2
      {
        display: "<insert name you want displayed as link 2>",
        value: "<insert name of your corresponding .js page for link 2>"
      },
    ],
  },
  */
]

var llx = 90, lly = 180, urx = -90, ury = -180
const markersOutput = markersInput.map((marker) => {
  llx = Math.min(llx, marker.lat)
  lly = Math.min(lly, marker.long)
  urx = Math.max(urx, marker.lat)
  ury = Math.max(ury, marker.long)
  const linksOutput = marker.links.map((link) => {
    return (
      <p><a href={"/#" + link.value}>{link.display}</a></p>
      /*<p><AnchorLink to={"#" + link.value}>{link.display}</AnchorLink></p>*/ // TODO: Remove all MD files & modify gatsby-config & gatsby-node
    );
  });
  return (
    <Marker position={[marker.lat, marker.long]}>
      <Popup>
        {linksOutput}
      </Popup>
    </Marker>
  );
});
llx = Math.max(llx - 5, -90)
lly = Math.max(lly - 5, -180)
urx = Math.min(urx + 5, 90)
ury = Math.min(ury + 5, 180)

const IndexPage = () => (
  <Layout>
    <SEO title="📝" />
    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin="" />
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""></script>
    </head>
    <body>
      {/*<div className="globeContainer" style={{ width: `100%`, display: `flex`, flexDirection: `column`, alignItems: `center` }}>
        <Globe
          backgroundColor={`#FFFFFF`}
          animateIn={true}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
        />
      </div>*/}
      <div style={{ padding: `0 0 1.5rem 0` }}>
        <MapContainer style={{ height: `50vh`, minHeight: `200px` }} bounds={[[llx, lly], [urx, ury]]} minZoom={1} scrollWheelZoom={true} wheelPxPerZoomLevel={30}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markersOutput}
        </MapContainer>
      </div>
      <Notes />
    </body>
  </Layout>
)

export default IndexPage
