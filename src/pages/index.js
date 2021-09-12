import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export default ({ data })　=>　(
     <div className="wrapper">
      <header>
        <div className="pageTop">
          <div className="logoBox">
            <img className="logo" src="../images/logo01.svg" alt="logo" />
          </div>
          <h1 className="siteTitle">
            市村マサミWeb
          </h1>
          <p className="sitSubTitle">
            ヘイ浄土
          </p>
        </div>
      </header>
      <p className="copy">
        変な声から言葉の濁流。ドブの底からメルヘンパンク。絶望のてっぺんからヤッホー！
      </p>
      <section className="top">
        <ul className="icons">
          <li className="icon"><img className="icon" src="../images/iconTwitter.svg" alt="twitterIcon" /></li>
          <li className="icon"><img src="../images/iconBase.svg" alt="baseIcon" /></li>
          <li className="icon"><img src="../images/iconMail.svg" alt="mailIcon" /></li>
        </ul>
      </section>
      <section className="myPhoto">
        <Img fluid= {data.file.childImageSharp.fluid} className="topPhotoß" alt="MasamiIchimura" />
      </section>
      <section className="topBlog">
        <h2 className="midashi">
          ブログ
        </h2>
        <p className="blogDesc">
              </p>
              <p className="more">
               過去分を読む&gt;&gt;
              </p>
            </section>
            <section className="topYTC">
              <h2 className="midashi">
                Youtubeチャンネル
              </h2>
              <div className="YTBanner">
               <img className="banner" src="./img/MIbanner.jpg" alt="banner" />
               <img className="banner" src="./img/Kusuribanner.jpg" alt="banner" />
              </div>
            </section>
             <section className="topGig">
               <h2 className="midashi">
                 ライブの予定
               </h2>
               <div className="gig">
                 <h3>gigDate&amp;gigPlace</h3>
                 <p className="gigTitle">
                   gigTitle
                 </p>
                 <p className="act">
                   act1/act2/act3/act4
                 </p>
                 <p className="open">
                   開演18:00<br />
                   開場19:00
                   料金1000円
                 </p>
               </div>
             </section>
             <section className="about">
              <h2 className="midashi">
                　
              </h2>
               <p className="aboutMe">
                 三上寛や友部正人など、70年代のアングラフォークやスターリン、INUといった日本のパンクに影響を受けて日本語を大事にした狂気のメルヘンソングを歌っています。
               </p>
             </section>
             <footer>
               <p className="copyright">copyright-Office Kojin 2021</p>
             </footer>
           </div>
           )

           export const query = graphql`
           query {
  file(relativePath: {eq: "topImage.jpg"}){
    childImageSharp {
      fluid (maxWidth: 750){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
