import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Styles from "./about.module.scss"

const About = () => {
  return (
    <Layout>
      <h1>MUSIC</h1>
      <div className={Styles.albums}>
        <iframe
          style={{ border: "0", width: "350px", height: "470px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=755409367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://futurepunx.bandcamp.com/album/the-world-is-a-mess-2">
            The World Is A Mess by Future Punx
          </a>
        </iframe>
        <iframe
          style={{ border: "0", width: "350px", height: "470px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1667748489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://futurepunx.bandcamp.com/album/this-is-post-wave">
            This is Post-Wave by Future Punx
          </a>
        </iframe>
        <iframe
          style={{ border: "0", width: "350px", height: "470px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=958335881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://futurepunx.bandcamp.com/album/im-so-inspired-ep-3">
            I&#39;m So Inspired EP by Future Punx
          </a>
        </iframe>
      </div>
      <p>
        You can <Link to="/contact">click here</Link> to book us.
      </p>
    </Layout>
  )
}

export default About
