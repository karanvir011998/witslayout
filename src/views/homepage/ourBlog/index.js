import {
  Head,
  Heading,
  HeadBlog,
  Paragraph,
  Para,
  Arrows,
  Leftimage,
  Rightimage,
  AllImgs,
  Blockchain,
  CommercialImage,
  WilBlog,
  Content,
  HeadingWits,
  ParaWits,
  HeadingBlock,
  Blog,
  Commercial,
} from "styles/views/homepage/ourBlog";
import leftarrow from "assets/images/leftarrow.png";
import rightarrow from "assets/images/rightarrow.png";
import wilblog from "assets/images/wilblog.png";
import blockchain from "assets/images/blockchain.png";
import commercial from "assets/images/commercial.png";

const OurBlog = () => {
  return (
    <Blog>
      <Head>
        <Heading>Our Thoughts in</Heading>
        <HeadBlog>Our Blog</HeadBlog>
        <Paragraph>
          <Para>
            We're here to make your thoughts on tech a little more… thought-ful.
          </Para>
          <Arrows>
            <Leftimage src={leftarrow} alt="leftarrow" />
            <Rightimage src={rightarrow} alt="leftarrow" />
          </Arrows>
        </Paragraph>
      </Head>
      <AllImgs>
        <WilBlog src={wilblog} alt="wilblog" />
        <Content>
          <HeadingWits>WIL Blog</HeadingWits>
          <ParaWits>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat
          </ParaWits>
        </Content>
        <Blockchain src={blockchain} alt="wilblog" />
        <HeadingBlock>Block Chain</HeadingBlock>
        <CommercialImage src={commercial} alt="wilblog" />
        <Commercial>Commercial</Commercial>
      </AllImgs>
    </Blog>
  );
};

export default OurBlog;
