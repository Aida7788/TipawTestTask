import styled from "@emotion/styled";

export const ProgressContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(244px, 1fr));
    justify-content: space-between;
    gap: 40px;
    padding: 40px;
`;

export const ProgressItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    box-shadow: -1px 3px 16px rgba(149, 157, 165, 0.19);
    border-radius: 4px;
`;

export const ProgressItemTitle = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    margin: 0;
`;

export const ProgressItemSubtitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    margin: 0;
`;