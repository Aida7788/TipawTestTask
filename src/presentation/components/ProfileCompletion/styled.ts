import styled from "@emotion/styled";

export const ProfileCompletionInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 40px;
    border-bottom: 1px solid ${({theme}) => theme.color.light.shadeLighter};

    @media (max-width: 940px) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`;

export const ProfileCompletionInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    text-align: left;

    @media (max-width: 940px) {
        align-items: center;
        text-align: center;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({theme}) => theme.color.dark.shade};

    @media (max-width: 440px) {
        font-size: 12px;
    }
`;

export const ProfileCompletionStatus = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    font-size: 18px;
`;

export const ProfileCompletionBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 15px;
`;

export const ProfileCompletionBarItem = styled.div`
    width: 64px;
    height: 8px;
    border: none;
    border-radius: 2px;
    background-color: ${({theme}) => theme.color.green.default};

    @media (max-width: 440px) {
        width: 50px;
    }
`;