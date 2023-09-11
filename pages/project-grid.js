import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { projects } from "@/src/data/project";
import Link from "next/link";
import { useState } from "react";

const ProjectGrid = () => {

  const [selectedFilter, setSelectedFilter] = useState('Show All');

  const handleFilterClick = (filterType) => {
    setSelectedFilter(filterType);
  };
  return (
    <Layout>
      <PageBanner pageName={"Project Grid"} />
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>Let’s Insides About Recent Project Best Work Gallery</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae .
                </p>
              </div>
            </div>
          </div>
          <div class="portfolio-area inner-bg-shpes section-padding">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <ul class="portfolio-filter">
                    <li
                      onClick={() => handleFilterClick('Show All')}
                      className={selectedFilter === 'Show All' ? 'active' : ''}
                    >
                      Show All
                    </li>
                    <li
                      onClick={() => handleFilterClick('mobile-app')}
                      className={selectedFilter === 'mobile-app' ? 'active' : ''}
                    >
                      Mobile App
                    </li>
                    <li
                      onClick={() => handleFilterClick('web-design')}
                      className={selectedFilter === 'web-design' ? 'active' : ''}
                    >
                      Website Design
                    </li>
                    <li
                      onClick={() => handleFilterClick('dashboard-design')}
                      className={selectedFilter === 'dashboard-design' ? 'active' : ''}
                    >
                      Dashboard Design
                    </li>
                    <li
                      onClick={() => handleFilterClick('graphics-design')}
                      className={selectedFilter === 'graphics-design' ? 'active' : ''}
                    >
                      Graphics Design
                    </li>
                    <li
                      onClick={() => handleFilterClick('logo-design')}
                      className={selectedFilter === 'logo-design' ? 'active' : ''}
                    >
                      Lago Design
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row portfolio-list">
                {projects.map(x => {
                  if (selectedFilter === 'Show All' || x.type === selectedFilter) {
                    return (
                      <div className="col-md-4 mobile-app">
                        <div className="portfolio-wrap">
                          <div className={`single-portfolio-item lage ${x.image}`}>
                            <div className="portfolio-hover">
                              <div className="portfolio-hover-table">
                                <div className="portfolio-hover-table-cell">
                                  <a href="Ring-Tok.html"><i class="fa fa-eye"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="portfolio-description">
                            <h6>{x.date}</h6>
                            <h3>{x.name}</h3>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          <div className="project-more-btn text-center">
            <Link legacyBehavior href="/project-grid">
              <a className="theme-btn style-two wow fadeInUp delay-0-2s">
                View More Gallery <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
