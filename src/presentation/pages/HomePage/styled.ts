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