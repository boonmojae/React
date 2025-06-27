import styled from 'styled-components';
import { Container } from '../Container.styles';

export const Size = styled.div`
    /* 기본값: 큰 화면에서는 원래 크기 */
    transform: scale(1);
    transform-origin: center top;
    
    /* 화면 높이가 800px 이하일 때만 축소 */
    @media (max-height: 800px) {
        transform: scale(0.8);
    }
    
    /* 화면 높이가 700px 이하일 때 더 축소 */
    @media (max-height: 700px) {
        transform: scale(0.7);
    }
`;

export const HomeWrapper = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const BackGroundGradient = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea, #764ba2 50%, #f093fb 100%);
    z-index: initial;
`;

export const MainContent = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: start;
`;

export const WeatherSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
`;

export const InfoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
`;

export const ForecastSection = styled.div`
    margin-bottom: 40px;
`;
