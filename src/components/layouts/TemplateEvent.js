// @flow
import React from "react";
import Showtimes from "../Showtimes";
import { Button, Container, Row, Column, Spacer } from "react-inky";

const TemplateEvent = (
  obj: LayoutWrapperType
): React$Element<typeof Container> => {
  const { item } = obj;
  return (
    <Container>
      <Row>
        <Column large="6">
          {item.posterurl && (
            <>
              <img alt="Poster thumbnail" src={item.posterurl} />
              <Spacer size="16"></Spacer>
            </>
          )}
          <div dangerouslySetInnerHTML={{ __html: item.htmlquotes }} />
        </Column>
        <Column large="6">
          <h1>{item.content}</h1>
          <div dangerouslySetInnerHTML={{ __html: item.htmldescription }} />
        </Column>
      </Row>
      {Array.isArray(item.showtimes) && item.showtimes.length > 0 && (
        <Row>
          <Column large="12">
            <Showtimes showtimes={item.showtimes} />
            {item.hascta && (
              <Button className="expanded" href={item.ctaurl}>
                {item.ctalabel}
              </Button>
            )}
          </Column>
        </Row>
      )}
    </Container>
  );
};
export default TemplateEvent;
