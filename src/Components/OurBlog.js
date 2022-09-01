import {
  Headings,
  SmallHeading,
  MainHeading,
  Border,
  PeraDiv,
  Pera,
  ArrowImgs,
  Lefting,
  Righting,
  AllImgs,
  Blockchain,
  Commercial,
  WilBlog,
  Content,
  HeadingWits,
  PeraWits,
  HeadingBlock,
  HeadingCommerce,
  Blog,
} from "./OurBlogStyle";
function OurBlog() {
  return (
    <Blog>
      <Headings>
        <SmallHeading>Our Thoughts in</SmallHeading>
        <MainHeading>Our Blog</MainHeading>
        <Border></Border>

        <PeraDiv>
          <Pera>
            We're here to make your thoughts on tech a little more… thought-ful.
          </Pera>
          <ArrowImgs>
            <Lefting src="./images/leftarrow.png" alt="leftarrow" />
            <Righting src="./images/rightarrow.png" alt="leftarrow" />
          </ArrowImgs>
        </PeraDiv>
      </Headings>
      <AllImgs>
        <WilBlog src="./images/wilblog.png" alt="wilblog" />
        <Content>
          <HeadingWits>WIL Blog</HeadingWits>
          <PeraWits>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat
          </PeraWits>
        </Content>
        <Blockchain src="./images/blockchain.png" alt="wilblog" />
        <HeadingBlock>Block Chain</HeadingBlock>
        <Commercial src="./images/commercial.png" alt="wilblog" />
        <HeadingCommerce>Commercial</HeadingCommerce>
      </AllImgs>
    </Blog>
  );
}

export default OurBlog;
