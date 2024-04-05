import styled from "@emotion/styled";

// Feel free to change / add / remove components however you wish

export const PageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: ${({theme}) => theme.font.default};
    background-color: ${({theme}) => theme.color.light.tint};
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 30px;
    margin-top: 10px;
`;

export const PageSubtitle = styled.p`
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
    color: ${({theme}) => theme.color.blue.default};
`;

export const PageIcon = styled.img`
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    background-color: ${({theme}) => theme.color.light.default};
`;

export const Logo = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
`;

export const HeaderRightSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const SpansWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px;
`;

export const SpansWrapperItem = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: ${({theme}) => theme.color.blue.default};
    cursor: pointer;
`;

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`;

export const ProfileInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const ProfileName = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({theme}) => theme.color.medium.shade};

    @media (max-width: 440px) {
        display: none;
    }
`;

export const ProfileCompletionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: center;
    background-color: ${({theme}) => theme.color.light.default};
    border: 1px solid ${({theme}) => theme.color.light.shadeLighter};
    border-radius: 4px;
`;

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

export const AnnouncementsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    background: ${({theme}) => theme.color.light.default};
    border: 1px solid ${({theme}) => theme.color.light.shadeLighter};
    border-radius: 4px;
`;