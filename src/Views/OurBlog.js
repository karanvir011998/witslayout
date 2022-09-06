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
} from "../styles/OurBlogStyle";
function OurBlog() {
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
            <Leftimage src="./images/leftarrow.png" alt="leftarrow" />
            <Rightimage src="./images/rightarrow.png" alt="leftarrow" />
          </Arrows>
        </Paragraph>
      </Head>
      <AllImgs>
        <WilBlog src="./images/wilblog.png" alt="wilblog" />
        <Content>
          <HeadingWits>WIL Blog</HeadingWits>
          <ParaWits>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat
          </ParaWits>
        </Content>
        <Blockchain src="./images/blockchain.png" alt="wilblog" />
        <HeadingBlock>Block Chain</HeadingBlock>
        <CommercialImage src="./images/commercial.png" alt="wilblog" />
        <Commercial>Commercial</Commercial>
      </AllImgs>
    </Blog>
  );
}

export default OurBlog;
