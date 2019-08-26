import React from "react";
import * as _ from "lodash";
import models from "../models";
import interpreter from "../interpreter";
import Checkbox from "@material-ui/core/Checkbox";
import Textfield from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AvailableExperienceAdvancementTextfield from './AvailableExperienceAdvancementTextfield';
import CharacteristicAdvancementContainerContainer from './CharacteristicAdvancementContainerContainer';
import SkillAdvancementContainerContainer from './SkillAdvancementContainerContainer';
import TalentAdvancementContainerContainer from './TalentAdvancementContainerContainer';
import PurchasedAdvancementsList from './PurchasedAdvancementsList';

class Component extends React.Component {
    render(){
        return (<div id="Advancements">
                    <AvailableExperienceAdvancementTextfield />
<CharacteristicAdvancementContainerContainer />
<SkillAdvancementContainerContainer />
<TalentAdvancementContainerContainer />
<PurchasedAdvancementsList />
                </div>)
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;