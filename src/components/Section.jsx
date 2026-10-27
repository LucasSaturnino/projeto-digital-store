import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-bottom: 40px;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$align === 'center' ? 'center' : 'space-between')};
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    color: var(--dark-gray-2, #474747);
  }

  a {
    font-size: 18px;
    color: var(--primary, #C92071);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <Container>
      <HeaderBox $align={titleAlign}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </HeaderBox>
      <div>{children}</div>
    </Container>
  );
};

export default Section;