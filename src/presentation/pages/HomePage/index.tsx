import React, {FC} from "react";
import {HomePageProps} from "./types";
import * as Styled from "./styled";
import {useTheme} from "@emotion/react";
import {Link} from "react-router-dom";

import Bell from "../../../assets/icons/Bell.svg";
import ArrowDown from "../../../assets/icons/ArrowDown.svg";
import PartyPopper from "../../../assets/icons/PartyPopper.svg";
import VerificationIcon from "../../../assets/icons/VerificationIcon.svg";
import RedEllipse from "../../../assets/icons/RedEllipse.svg";
import AccordionWrapper from "../../components/Accordion";

export * from "./types";

/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
export const HomePage: FC<HomePageProps> = (props) => {
    const {announcements, profile} = props;
    const theme = useTheme();

    return (
        <Styled.PageWrapper>
            <Styled.HeaderContainer>
                <Link to="/" style={{textDecoration: "none", color: "#20253F"}}>
                    <Styled.Logo>
                        My Tipaw
                    </Styled.Logo>
                </Link>
                <Styled.HeaderRightSection>
                    <Styled.SpansWrapper>
                        <Styled.SpansWrapperItem>Fr</Styled.SpansWrapperItem>
                        <Styled.SpansWrapperItem>•</Styled.SpansWrapperItem>
                        <Styled.SpansWrapperItem style={{color: theme.color.medium.shade}}>Nl</Styled.SpansWrapperItem>
                    </Styled.SpansWrapper>
                    <Styled.PageIcon src={Bell} width="24px" alt="Bell Icon"/>
                    <Styled.ProfileImage src={profile.avatar} alt="Some guy with a dog"/>
                    <Styled.ProfileInfoWrapper>
                        <Styled.ProfileName>
                            {profile.name}
                        </Styled.ProfileName>
                        <Styled.PageIcon src={ArrowDown} alt="Arrow Down Icon"/>
                    </Styled.ProfileInfoWrapper>
                </Styled.HeaderRightSection>
            </Styled.HeaderContainer>
            <Styled.Section>
                <Styled.ProfileCompletionWrapper>
                    <Styled.ProfileCompletionInfo>
                        <Styled.ProfileCompletionInfoItem>
                            <Styled.PageSubtitle>
                                You successfully complete your profile at Tipaw
                            </Styled.PageSubtitle>
                            <Styled.Description>
                                Now you can use Tipaw for 100% <img src={PartyPopper} width="22px"
                                                                    alt="PartyPopper Icon"/>
                            </Styled.Description>
                        </Styled.ProfileCompletionInfoItem>
                        <Styled.ProfileCompletionInfoItem>
                            <Styled.ProfileCompletionStatus>
                                <p style={{margin: "0"}}>Profile completed</p>
                                <p style={{color: theme.color.green.default, fontSize: "14px", margin: "0"}}>100%</p>
                            </Styled.ProfileCompletionStatus>
                            <Styled.ProfileCompletionBar>
                                <Styled.ProfileCompletionBarItem/>
                                <Styled.ProfileCompletionBarItem/>
                                <Styled.ProfileCompletionBarItem/>
                                <Styled.ProfileCompletionBarItem/>
                                <Styled.ProfileCompletionBarItem/>
                            </Styled.ProfileCompletionBar>
                        </Styled.ProfileCompletionInfoItem>
                    </Styled.ProfileCompletionInfo>
                    <Styled.ProgressContainer>
                        <Styled.ProgressItem>
                            <Styled.PageIcon src={VerificationIcon} alt="Verification Icon"/>
                            <Styled.ProgressItemTitle>
                                Verification
                            </Styled.ProgressItemTitle>
                            <Styled.ProgressItemSubtitle>
                                You verified your account
                            </Styled.ProgressItemSubtitle>
                        </Styled.ProgressItem>
                        <Styled.ProgressItem>
                            <Styled.PageIcon src={VerificationIcon} alt="Verification Icon"/>
                            <Styled.ProgressItemTitle>
                                Profile picture
                            </Styled.ProgressItemTitle>
                            <Styled.ProgressItemSubtitle>
                                You added your profile picture
                            </Styled.ProgressItemSubtitle>
                        </Styled.ProgressItem>
                        <Styled.ProgressItem>
                            <Styled.PageIcon src={VerificationIcon} alt="Verification Icon"/>
                            <Styled.ProgressItemTitle>
                                Parents
                            </Styled.ProgressItemTitle>
                            <Styled.ProgressItemSubtitle>
                                You added the parents
                            </Styled.ProgressItemSubtitle>
                        </Styled.ProgressItem>
                        <Styled.ProgressItem>
                            <Styled.PageIcon src={VerificationIcon} alt="Verification Icon"/>
                            <Styled.ProgressItemTitle>
                                Litter
                            </Styled.ProgressItemTitle>
                            <Styled.ProgressItemSubtitle>
                                Your created the litter
                            </Styled.ProgressItemSubtitle>
                        </Styled.ProgressItem>
                    </Styled.ProgressContainer>
                </Styled.ProfileCompletionWrapper>
            </Styled.Section>
            <Styled.Section>
                <Styled.AnnouncementsWrapper>
                    <Styled.PageSubtitle>
                        Announcements from TIPAW <img src={RedEllipse} width="10px" alt="RedEllipse"/>
                    </Styled.PageSubtitle>
                    <AccordionWrapper announcements={announcements} />
                </Styled.AnnouncementsWrapper>
            </Styled.Section>
        </Styled.PageWrapper>
    );
};
