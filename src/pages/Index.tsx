import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
