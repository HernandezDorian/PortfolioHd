import Languages from "../languages/languages";
import PageContainer from "../page-container/page-container";
import pp from "./../../assets/PP.jpg";

export default function AboutMe() {
  return (
    <section className="Aboutme" id="about">
      <PageContainer>
        <div className="Aboutme__int">
          <div className="Aboutme__int__imgZone">
            <img className="Aboutme__int__imgZone__photo" src={pp}></img>
          </div>
          <div className="Aboutme__int__txtZone">
            <h2 className="Aboutme__int__txtZone__title">A PROPOS DE MOI</h2>
            <p className="Aboutme__int__txtZone__info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
              pretium vulputate sapien nec sagittis aliquam. Adipiscing elit
              duis tristique sollicitudin nibh. Dignissim enim sit amet
              venenatis urna cursus. Pellentesque massa placerat duis ultricies
              lacus sed. Eu consequat ac felis donec et. Cras fermentum odio eu
              feugiat pretium nibh ipsum consequat. Lobortis scelerisque
              fermentum dui faucibus in ornare quam. Ipsum nunc aliquet bibendum
              enim facilisis. In ornare quam viverra orci sagittis eu volutpat.
              Nulla at volutpat diam ut venenatis tellus. Lobortis mattis
              aliquam faucibus purus in massa tempor nec. Sit amet massa vitae
              tortor condimentum lacinia quis vel. Suspendisse interdum
              consectetur libero id. Sit amet massa vitae tortor condimentum.
              Enim praesent elementum facilisis leo vel. Amet commodo nulla
              facilisi nullam vehicula ipsum a arcu cursus. Pharetra diam sit
              amet nisl suscipit adipiscing bibendum est. Eu turpis egestas
              pretium aenean pharetra magna ac placerat vestibulum. Dui vivamus
              arcu felis bibendum ut tristique et egestas quis. Pharetra massa
              massa ultricies mi quis hendrerit dolor magna eget. Nisl nunc mi
              ipsum faucibus vitae aliquet nec ullamcorper sit. Tincidunt eget
              nullam non nisi est sit. Leo integer malesuada nunc vel risus
              commodo viverra maecenas accumsan.
            </p>
          </div>
        </div>
        <Languages />
      </PageContainer>
    </section>
  );
}
