import { Form, FormControl, Button } from "react-bootstrap";

import UserNav from "../shared/user-nav/UserNav";

import "./Freelancer.scss";

const Freelancer = () => {
  return (
    <div className="feed-container">
      <UserNav></UserNav>
      <div className="container">
        <header className="feed-header">
          <h1 className="feed-header__heading">Find Work</h1>
          <Form inline className="feed-header__form">
            <FormControl
              type="text"
              placeholder="Search Jobs..."
              className="mr-sm-2 feed-header__input"
            />
            <Button className="mr-sm-2 primary" variant="outline-light">
              Search
            </Button>
          </Form>
        </header>

        <div className="feed">
          <div className="feed-left">
            <header className="feed-left__heading">My Feed</header>
            <div className="feed-left__search">
              <ul className="feed-left__search__list">
                <li className="feed-left__search__list-item">Angular</li>
                <li className="feed-left__search__list-item">Nodejs</li>
                <li className="feed-left__search__list-item">MongoDB</li>
                <li className="feed-left__search__list-item">Express.js</li>
                <li className="feed-left__search__list-item">Html</li>
                <li className="feed-left__search__list-item">css</li>
                <li className="feed-left__search__list-item">scss</li>
              </ul>
            </div>

            <div className="feed-left__search">
              <header className="feed-left__heading">Recent Search</header>

              <ul className="feed-left__search__list">
                <li className="feed-left__search__list-item">Angular</li>
                <li className="feed-left__search__list-item">Nodejs</li>
              </ul>
            </div>
            <div className="feed-left__search">
              <header className="feed-left__heading">My Categories</header>

              <ul className="feed-left__search__list">
                <li className="feed-left__search__list-item">Angular</li>
                <li className="feed-left__search__list-item">Nodejs</li>
              </ul>
            </div>
          </div>
          <div className="feed-middle">
            <h1 className="feed-middle__heading">My Feed</h1>
            <div className="feed-middle__list">
              <div className="feed-middle__list__item">
                <header className="feed-middle__list__item-header">
                  <div className="feed-middle__list__item-name">
                    Project Angular job
                  </div>
                  <Button className="feed-middle__list__item-name">Save</Button>
                </header>

                <div className="feed-middle__list__item-conditions">
                  Hourly:$30.00-$60.00 - Intermediate - Est. Time: Less than 1
                  month, Less than 30 hrs/week - Posted 1 hour ago
                </div>

                <div className="feed-middle__list__item-description">
                  sldkflsakdfjlsdkfjlsakjflksdjflksdjflksdjflksdjflkdsj
                  flksdjlkjdlfkjsdlkfjsldkflksdflksdflksdfksdflksdlfkjsdlkfjkl
                </div>

                <div className="feed-middle__list__item-skills">
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                </div>
              </div>

              <div className="feed-middle__list__item">
                <header className="feed-middle__list__item-header">
                  <div className="feed-middle__list__item-name">
                    Project Angular job
                  </div>
                  <Button className="feed-middle__list__item-name">Save</Button>
                </header>

                <div className="feed-middle__list__item-conditions">
                  Hourly:$30.00-$60.00 - Intermediate - Est. Time: Less than 1
                  month, Less than 30 hrs/week - Posted 1 hour ago
                </div>

                <div className="feed-middle__list__item-description">
                  sldkflsakdfjlsdkfjlsakjflksdjflksdjflksdjflksdjflkdsj
                  flksdjlkjdlfkjsdlkfjsldkflksdflksdflksdfksdflksdlfkjsdlkfjkl
                </div>

                <div className="feed-middle__list__item-skills">
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                </div>
              </div>

              <div className="feed-middle__list__item">
                <header className="feed-middle__list__item-header">
                  <div className="feed-middle__list__item-name">
                    Project Angular job
                  </div>
                  <Button className="feed-middle__list__item-name">Save</Button>
                </header>

                <div className="feed-middle__list__item-conditions">
                  Hourly:$30.00-$60.00 - Intermediate - Est. Time: Less than 1
                  month, Less than 30 hrs/week - Posted 1 hour ago
                </div>

                <div className="feed-middle__list__item-description">
                  sldkflsakdfjlsdkfjlsakjflksdjflksdjflksdjflksdjflkdsj
                  flksdjlkjdlfkjsdlkfjsldkflksdflksdflksdfksdflksdlfkjsdlkfjkl
                </div>

                <div className="feed-middle__list__item-skills">
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                </div>
              </div>

              <div className="feed-middle__list__item">
                <header className="feed-middle__list__item-header">
                  <div className="feed-middle__list__item-name">
                    Project Angular job
                  </div>
                  <Button className="feed-middle__list__item-name">Save</Button>
                </header>

                <div className="feed-middle__list__item-conditions">
                  Hourly:$30.00-$60.00 - Intermediate - Est. Time: Less than 1
                  month, Less than 30 hrs/week - Posted 1 hour ago
                </div>

                <div className="feed-middle__list__item-description">
                  sldkflsakdfjlsdkfjlsakjflksdjflksdjflksdjflksdjflkdsj
                  flksdjlkjdlfkjsdlkfjsldkflksdflksdflksdfksdflksdlfkjsdlkfjkl
                </div>

                <div className="feed-middle__list__item-skills">
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                </div>
              </div>

              <div className="feed-middle__list__item">
                <header className="feed-middle__list__item-header">
                  <div className="feed-middle__list__item-name">
                    Project Angular job
                  </div>
                  <Button className="feed-middle__list__item-name">Save</Button>
                </header>

                <div className="feed-middle__list__item-conditions">
                  Hourly:$30.00-$60.00 - Intermediate - Est. Time: Less than 1
                  month, Less than 30 hrs/week - Posted 1 hour ago
                </div>

                <div className="feed-middle__list__item-description">
                  sldkflsakdfjlsdkfjlsakjflksdjflksdjflksdjflksdjflkdsj
                  flksdjlkjdlfkjsdlkfjsldkflksdflksdflksdfksdflksdlfkjsdlkfjkl
                </div>

                <div className="feed-middle__list__item-skills">
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                  <Button>Angular</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="feed-right">
            <h2 className="feed-right__heading">My Profile</h2>
            <span className="feed-right__view-profile">View Profile</span>
            <div className="feed-right__visibility">
              <h2 className="feed-right__heading">Visibility</h2>
              <i></i>
              <span className="feed-right__visibility-type">Public</span>
            </div>

            <div className="feed-right__visibility">
              <h2 className="feed-right__heading">Awailability</h2>
              <i></i>
              <span className="feed-right__visibility-type">As per needed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
