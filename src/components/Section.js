import Data from "../data.json";
import Movies from "./Movies";
import Title from "./Title";

const Section = (props) => {
  return (
    <main>
      {Data.map((category, index) => {
        return (
          <section className="container">
            <div className="category" key={index}>
              <Title title={category.category} />
            </div>
            <div className="pictures">
              {category.images.map((pictures, index) => {
                return (
                  <div className="picture">
                    <Movies picture={pictures} />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Section;
