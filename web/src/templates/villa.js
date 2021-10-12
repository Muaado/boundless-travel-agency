import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import Gallery from "../components/Gallery";
import VillaStyles from "../styles/VillaTemplateStyles";
import Amenities from "../components/Resort/Amenities";
import Activities from "../components/Resort/Activities";
import Reviews from "../components/Resort/Reviews";

export const query = graphql`
  query VillaTemplateQuery($id: String!, $resortId: String!) {
    villa: sanityVilla(_id: { eq: $id }) {
      name

      gallery {
        images {
          ...SanityImage
          alt
        }
        name
        type {
          name
        }
      }
      resort {
        locationAtoll
        locationFull
        numberOfBars
        numberOfRestaurants
        numberOfRooms
        roomVoltage
        timeToAirport
        _rawDescription
        resortTransferType {
          transferType
        }

        reviews {
          name
          _rawDescription
        }
      }
    }
    activities: allSanityActivity(
      filter: { resort: { _id: { eq: $resortId } } }
    ) {
      nodes {
        imageThumb {
          ...SanityImage
          alt
        }
      }
    }
  }
`;

const VilaTemplate = (props) => {
  const { data, errors } = props;
  const villa = data && data.villa;
  const activities = data && data.activities;

  const {
    gallery: galleries,
    // gallery,
  } = villa;

  const {
    locationAtoll,
    numberOfBars,
    numberOfRestaurants,
    numberOfRooms,
    resortTransferType,
    timeToAirport,
    _rawDescription,
    reviews,
  } = villa.resort;

  // console.log(villa);
  return (
    <Layout>
      <Container>
        <VillaStyles>
          <Gallery galleries={galleries} />
          <div className="villa__property-overview">
            <h2>Property Overview</h2>

            <Amenities
              locationAtoll={locationAtoll}
              numberOfBars={numberOfBars}
              numberOfRestaurants={numberOfRestaurants}
              numberOfRooms={numberOfRooms}
              resortTransferType={resortTransferType}
              timeToAirport={timeToAirport}
              _rawDescription={_rawDescription}
            />
          </div>
          <Activities activities={activities} />
          <Reviews reviews={reviews} />
        </VillaStyles>
      </Container>
    </Layout>
  );
};

export default VilaTemplate;
