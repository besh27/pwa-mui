import Content from "../components/Content";
import Footer from "../components/Footer";

const Page = ({ content }) => {
  return (
    <>
      <Content content={content} />
      <Footer />
    </>
  );
};

export default Page;
