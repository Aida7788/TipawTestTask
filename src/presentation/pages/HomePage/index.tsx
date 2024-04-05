import React, {FC} from "react";
import {HomePageProps} from "./types";
import * as Styled from "./styled";
import {useTheme} from "@emotion/react";
import {Link} from "react-router-dom";

import Bell from "../../../assets/icons/Bell.svg";
import ArrowDown from "../../../assets/icons/ArrowDown.svg";
import RedEllipse from "../../../assets/icons/RedEllipse.svg";
import AccordionWrapper from "../../components/Accordion";
import ProfileCompletion from "../../components/ProfileCompletion";
import Progress from "../../components/Progress";

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
                    <ProfileCompletion />
                    <Progress />
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
