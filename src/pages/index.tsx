import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
        <div className="overflow-hidden">
          <div className="container content-space-t-4 content-space-b-3">
            <div className="row justify-content-lg-between align-items-md-center">
              <div className="col-md-6 col-lg-5 mb-7 mb-md-0">
                <div className="mb-5">
                  <span className="text-cap">Who am I?</span>
                  <h1 className="display-4 mb-3">Seun Owoyemi</h1>
                  <p className="lead">I aim to deliver the most outstanding work in every business.</p>
                </div>

                <div className="d-grid d-sm-flex gap-3">
                  <a className="btn btn-primary btn-transition" href="#caseStudies">Contact me</a>
                  <a className="btn btn-link" href="#">Learn more <i className="bi-chevron-right small ms-1"></i></a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="position-relative">
                  <img className="img-fluid rounded-2" src="/assets/svg/components/card-10.svg" alt="Image Description" />
                  <div className="position-absolute top-0 end-0 w-100 h-100 bg-soft-primary rounded-2 zi-n1 mt-5 me-n5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Clients />
        <Portfolio />

        <Footer />
    </Layout>
  );
}
