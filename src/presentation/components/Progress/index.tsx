import React, {FC} from 'react';
import * as Styled from "./styled";
import {PageIcon} from "../../pages/HomePage/styled";

import VerificationIcon from "../../../assets/icons/VerificationIcon.svg";

const Progress: FC = () => {
    return (
        <Styled.ProgressContainer>
            <Styled.ProgressItem>
                <PageIcon src={VerificationIcon} alt="Verification Icon"/>
                <Styled.ProgressItemTitle>
                    Verification
                </Styled.ProgressItemTitle>
                <Styled.ProgressItemSubtitle>
                    You verified your account
                </Styled.ProgressItemSubtitle>
            </Styled.ProgressItem>
            <Styled.ProgressItem>
                <PageIcon src={VerificationIcon} alt="Verification Icon"/>
                <Styled.ProgressItemTitle>
                    Profile picture
                </Styled.ProgressItemTitle>
                <Styled.ProgressItemSubtitle>
                    You added your profile picture
                </Styled.ProgressItemSubtitle>
            </Styled.ProgressItem>
            <Styled.ProgressItem>
                <PageIcon src={VerificationIcon} alt="Verification Icon"/>
                <Styled.ProgressItemTitle>
                    Parents
                </Styled.ProgressItemTitle>
                <Styled.ProgressItemSubtitle>
                    You added the parents
                </Styled.ProgressItemSubtitle>
            </Styled.ProgressItem>
            <Styled.ProgressItem>
                <PageIcon src={VerificationIcon} alt="Verification Icon"/>
                <Styled.ProgressItemTitle>
                    Litter
                </Styled.ProgressItemTitle>
                <Styled.ProgressItemSubtitle>
                    Your created the litter
                </Styled.ProgressItemSubtitle>
            </Styled.ProgressItem>
        </Styled.ProgressContainer>
    );
};

export default Progress;