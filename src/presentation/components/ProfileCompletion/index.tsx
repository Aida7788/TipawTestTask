import React, {FC} from 'react';
import * as Styled from "./styled";
import {PageSubtitle} from "../../pages/HomePage/styled";
import {useTheme} from "@emotion/react";

import PartyPopper from "../../../assets/icons/PartyPopper.svg";

const ProfileCompletion: FC = () => {

    const theme = useTheme();

    return (
            <Styled.ProfileCompletionInfo>
                <Styled.ProfileCompletionInfoItem>
                    <PageSubtitle>
                        You successfully complete your profile at Tipaw
                    </PageSubtitle>
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
    );
};

export default ProfileCompletion;