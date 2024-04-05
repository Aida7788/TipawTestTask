import {FC} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import {AnnouncementData} from "../../pages";

import WhiteArrowDown from "../../../assets/icons/WhiteArrowDown.svg";
import Calendar from "../../../assets/icons/Calendar.svg";

import "./accordion.css";

interface PropTypes {
    announcements: AnnouncementData[];
}

const AccordionWrapper: FC<PropTypes> = ({announcements}) => {

    return (
        <Accordion className="accordionContainer" preExpanded={[announcements[0].id]} allowZeroExpanded>
            {announcements.map((announcement, index) => (
                <AccordionItem key={announcement.id} uuid={announcement.id} className="accordionItem">
                    <AccordionItemState>
                        {({expanded}) => (
                            <>
                                <AccordionItemHeading className={`accordionHeading ${!expanded && "accordionHeadingCollapsed"}`}>
                                    <AccordionItemButton className="accordionItemButton">
                                        <p>{announcement.title}</p>
                                        <img src={WhiteArrowDown} alt="WhiteArrowDown Icon"/>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="accordionItemPanel">
                                    <div className="date">
                                        <img src={Calendar} alt="Calendar"/>
                                        {announcement.date}
                                    </div>
                                    <p>{announcement.content}</p>
                                </AccordionItemPanel>
                            </>
                        )}
                    </AccordionItemState>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionWrapper;