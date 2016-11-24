import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero';
import ContentWrapper from './../components/ContentWrapper';
import Service from './../components/Service';

import './Dienste.scss';

const Dienste = ({data}) => {


  //const faqs = (!data.sogehts.faqlist)? null : data.sogehts.faqlist.map( (faq, i) => {
  //  return <Faq faq={faq} key={`faq${i}`} />
  //});

  const html = (markup) => {
    return {__html: markup};
  } 


  return (
    <div className="dienste">

      <ContentWrapper className="dienste_dienste">
        <h1 className="title--underlined">
          Telekom Dienste
        </h1>
        <ul className="services dienste">
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </ul>
      </ContentWrapper>

      <ContentWrapper className="dienste_dienste">
        <h1 className="title--underlined">
          Partner Dienste
        </h1>
        <ul className="services dienste">
          <Service />
          <Service />
          <Service />
        </ul>
      </ContentWrapper>



    </div>
  )

};

export default Dienste;
