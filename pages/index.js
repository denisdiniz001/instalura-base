import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Menu/>
      <Footer/>
    </HomeWrapper>
  )
}
