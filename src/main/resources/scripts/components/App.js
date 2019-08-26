import React from "react";
import * as _ from "lodash";
import models from "../models";
import interpreter from "../interpreter";
import SummaryView from "./SummaryView"
import SpeciesView from "./SpeciesView"
import CareerView from "./CareerView"
import AdvancementsView from "./AdvancementsView"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Component = (props) => (
    <div id="Star_Wars_Edge_Of_The_Empire-app">
    <Tabs>
        <TabList>
            <Tab>
Summary
</Tab>
<Tab>
Species
</Tab>
<Tab>
Career
</Tab>
<Tab>
Advancements
</Tab>
        </TabList>
        <TabPanel>
<SummaryView/>
</TabPanel>
<TabPanel>
<SpeciesView/>
</TabPanel>
<TabPanel>
<CareerView/>
</TabPanel>
<TabPanel>
<AdvancementsView/>
</TabPanel>
    </Tabs>
    </div>
)
export default Component;