import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import pallete from '../styles/pallete';

const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  position: fixed;
  /* bottom: 0; */
  border-top: 1px solid ${pallete.gray};
  text-align: center;
  .footer-button {
    font-size: 1rem;
    width: 30px;
    height: 30px;
    margin: 10px 0;
    background-color: white;
    border: 1px solid ${pallete.deep_gray};
    border-radius: 5px;
    cursor: pointer;
    line-height: 0; // vertical align of inner text
  }
`;

export const Footer: React.FC = () => {
  const router = useRouter();
  const isMain = router.pathname === '/';

  const handlerAddPage = (isMain) => {
    if (isMain) {
      return router.push('/todo/add');
    }
    if (!isMain) {
      return router.push('/');
    }
    return 0;
  };

  return (
    <Container>
      <button
        type='button'
        className='footer-button'
        onClick={() => handlerAddPage(isMain)}
      >
        {isMain ? '+' : '-'}
      </button>
    </Container>
  );
};
