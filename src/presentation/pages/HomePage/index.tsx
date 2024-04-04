import React, { FC } from "react";
import { HomePageProps } from "./types";
import * as Styled from "./styled";
import { FaCheck } from "react-icons/fa";
import { useTheme } from "@emotion/react";

export * from "./types";

/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
export const HomePage: FC<HomePageProps> = (props) => {
  const { announcements, profile } = props;
  const theme = useTheme();

  return (
    <Styled.PageWrapper>
      <Styled.HeaderContainer>
        My Tipaw
        <div>Fr - Nl</div>
        <img src={profile.avatar} width="50px" alt="some guy with a dog" />
        {profile.name}
      </Styled.HeaderContainer>
      Profile Completed {profile.globalProgress}% Verification
      <Styled.ProgressContainer>
        <Styled.ProgressItem>
          Verification : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Profile picture : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Parents : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Litter : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
      </Styled.ProgressContainer>
      <Styled.AnnouncementsContainer>
        Announcements from TIPAW
        {announcements.map((announcement, index) => (
          <Styled.AnnouncementsContainer key={announcement.id}>
            <div>{announcement.title}</div>
            <div>{announcement.content}</div>
            <div>{announcement.date}</div>
          </Styled.AnnouncementsContainer>
        ))}
      </Styled.AnnouncementsContainer>
    </Styled.PageWrapper>
  );
};
