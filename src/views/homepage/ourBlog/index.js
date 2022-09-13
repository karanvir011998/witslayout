import {
  HeadingWrapper,
  Heading,
  HeadingBlog,
  ContentWrapper,
  Content,
  Arrows,
  LeftArrow,
  RightArrow,
  ImagesWrapper,
  BlockchainImage,
  CommercialImage,
  WilBlogImage,
  Contents,
  HeadingWilBlog,
  ParaWits,
  HeadingBlockchain,
  OurBlogContainer,
  HeadingCommercial,
} from "styles/views/homepage/ourBlog";
import leftarrow from "assets/images/leftarrow.png";
import rightarrow from "assets/images/rightarrow.png";
import wilblog from "assets/images/wilblog.png";
import blockchain from "assets/images/blockchain.png";
import commercial from "assets/images/commercial.png";

const OurBlog = () => (
  <OurBlogContainer>
    <HeadingWrapper>
      <Heading>Our Thoughts in</Heading>
      <HeadingBlog>Our Blog</HeadingBlog>
      <ContentWrapper>
        <Content>
          We're here to make your thoughts on tech a little more… thought-ful.
        </Content>
        <Arrows>
          <LeftArrow src={leftarrow} alt="leftarrow" />
          <RightArrow src={rightarrow} alt="leftarrow" />
        </Arrows>
      </ContentWrapper>
    </HeadingWrapper>
    <ImagesWrapper>
      <WilBlogImage src={wilblog} alt="wilblog" />
      <Contents>
        <HeadingWilBlog>WIL Blog</HeadingWilBlog>
        <ParaWits>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat
        </ParaWits>
      </Contents>
      <BlockchainImage src={blockchain} alt="wilblog" />
      <HeadingBlockchain>Block Chain</HeadingBlockchain>
      <CommercialImage src={commercial} alt="wilblog" />
      <HeadingCommercial>Commercial</HeadingCommercial>
    </ImagesWrapper>
  </OurBlogContainer>
);

export default OurBlog;
