const _ = require("lodash");

function armorModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function weaponModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function specializationTalentModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function specializationModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function careerModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function specialAbilityModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function characteristicsModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function defenseModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function speciesModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function strainThresholdModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function woundsThresholdModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function woundsOrStrainModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function skillModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function skillsModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

function characterModel(){
    Object.getOwnPropertyNames(this.__proto__.definition).forEach((property)=>{
        const propertyDef = this.__proto__.definition[property];
        if(property.startsWith("@")){
            const symbol = Symbol(property);
            this[symbol] = propertyDef[property];
        } else {
            if(propertyDef.default !== undefined) {
                this[property] = propertyDef.default;
            } else if (propertyDef.type.match(/\[.*\]/)){
                this[property] = [];
            } else {
                this[property] = new module.exports[propertyDef.type]();
            }
            if (_.isArray(this[property])){
                // TODO: Add always present values perhaps?
            } else if (_.isObject(this[property])) {
                this[property] = {...this[property], ...propertyDef.value};
            }
        }
    });
}

module.exports = {
        armor:armorModel,
	weapon:weaponModel,
	specializationTalent:specializationTalentModel,
	specialization:specializationModel,
	career:careerModel,
	specialAbility:specialAbilityModel,
	characteristics:characteristicsModel,
	defense:defenseModel,
	species:speciesModel,
	strainThreshold:strainThresholdModel,
	woundsThreshold:woundsThresholdModel,
	woundsOrStrain:woundsOrStrainModel,
	skill:skillModel,
	skills:skillsModel,
	character:characterModel
    }
armorModel.prototype.definition = JSON.parse(`{"rarity":{"type":"number","default":0},"isRestricted":{"type":"boolean","default":false},"hardpoints":{"type":"number","default":0},"encumbrance":{"type":"number","default":0},"price":{"type":"number","default":0},"soak":{"type":"number","default":0},"defense":{"type":"number","default":0},"name":{"type":"string","default":""}}`);


weaponModel.prototype.definition = JSON.parse(`{"special":{"type":"[string]"},"rarity":{"type":"number","default":0},"isRestricted":{"type":"boolean","default":false},"price":{"type":"number","default":0},"hardpoints":{"type":"number","default":0},"encumbrance":{"type":"number","default":0},"range":{"type":"string","default":""},"criticalRating":{"type":"number","default":0},"damage":{"type":"number","default":0},"skill":{"type":"string","default":""},"name":{"type":"string","default":""}}`);


specializationTalentModel.prototype.definition = JSON.parse(`{"requires":{"type":"[string]"},"tier":{"type":"number","default":0},"id":{"type":"string","default":""}}`);


specializationModel.prototype.definition = JSON.parse(`{"talents":{"type":"[specializationTalent]"},"careerSkills":{"type":"[skill]"},"name":{"type":"string","default":""}}`);


careerModel.prototype.definition = JSON.parse(`{"specializations":{"type":"[specialization]"},"careerSkills":{"type":"[string]"},"name":{"type":"string","default":""}}`);


specialAbilityModel.prototype.definition = JSON.parse(`{"description":{"type":"string","default":""},"name":{"type":"string","default":""}}`);


characteristicsModel.prototype.definition = JSON.parse(`{"presence":{"type":"number","default":0,"derivedFrom":["# $state.character.species.baseCharacteristics.presence"]},"willpower":{"type":"number","default":0,"derivedFrom":["# $state.character.species.baseCharacteristics.willpower"]},"cunning":{"type":"number","default":0,"derivedFrom":["# $state.character.species.baseCharacteristics.cunning"]},"intellect":{"type":"number","default":0,"derivedFrom":["# $state.character.species.baseCharacteristics.intellect"]},"agility":{"type":"number","default":0,"derivedFrom":["# $state.character.species.baseCharacteristics.agility"]},"brawn":{"type":"number","default":0,"derivedFrom":["# $state.character.species.baseCharacteristics.brawn"]}}`);


defenseModel.prototype.definition = JSON.parse(`{"melee":{"type":"number","default":0,"derivedFrom":["# $state.character.armor.map(a => a.defense).reduce((a,b)=>a+b, 0)"]},"ranged":{"type":"number","default":0,"derivedFrom":["# $state.character.armor.map(a => a.defense).reduce((a,b)=>a+b, 0)"]}}`);


speciesModel.prototype.definition = JSON.parse(`{"specialAbilities":{"type":"[specialAbility]"},"firstSpecialtyTrainedSkills":{"type":"number","default":3},"startingCareerSkillChoices":{"type":"number","default":4},"careerSkills":{"type":"[skill]"},"startingTalents":{"type":"[talent]"},"startingSkills":{"type":"[string]"},"startingExperience":{"type":"number","default":0},"strainThreshold":{"type":"strainThreshold"},"woundsThreshold":{"type":"woundsThreshold"},"baseCharacteristics":{"type":"characteristics"},"source":{"type":"string","default":""},"plural":{"type":"string","default":""},"name":{"type":"string","default":""}}`);


strainThresholdModel.prototype.definition = JSON.parse(`{"characteristic":{"type":"string","default":"willpower"},"base":{"type":"number","default":0}}`);


woundsThresholdModel.prototype.definition = JSON.parse(`{"characteristic":{"type":"string","default":"brawn"},"base":{"type":"number","default":0}}`);


woundsOrStrainModel.prototype.definition = JSON.parse(`{"threshold":{"type":"number","default":0},"current":{"type":"number","default":0}}`);


skillModel.prototype.definition = JSON.parse(`{"rank":{"type":"number","default":0},"characteristic":{"type":"string","default":""},"isCareerSkill":{"type":"boolean","default":false,"derivedFrom":["# $state.character.career && $state.character.career.careerSkills.includes($this.ancestors[0].name)","# $this.accumulator || ($state.character.career.specializations.map(s => s.careerSkills).includes($this.ancestors[0].name))","# $this.accumulator || ($state.character.species && $state.character.species.careerSkills.includes($this.ancestors[0].name))"]},"name":{"type":"string","default":""}}`);


skillsModel.prototype.definition = JSON.parse(`{"astrogation":{"type":"skill","value":{"name":"Astrogation","characteristic":"Intellect"}},"athletics":{"type":"skill","value":{"name":"Athletics","characteristic":"Brawn"}},"charm":{"type":"skill","value":{"name":"Charm","characteristics":"Presence"}},"coercion":{"type":"skill","value":{"name":"Coercion","characteristics":"Willpower"}},"computers":{"type":"skill","value":{"name":"Computers","characteristics":"Intellect"}},"cool":{"type":"skill","value":{"name":"Cool","characteristic":"Presence"}},"coordination":{"type":"skill","value":{"name":"Coordination","characteristic":"Agility"}},"deception":{"type":"skill","value":{"name":"Deception","characteristic":"Cunning"}},"discipline":{"type":"skill","value":{"name":"Discipline","characteristic":"Willpower"}},"leadership":{"type":"skill","value":{"name":"Leadership","characteristic":"Presence"}},"mechanics":{"type":"skill","value":{"name":"Mechanics","characteristic":"Intellect"}},"medicine":{"type":"skill","value":{"name":"Medicine","characteristic":"Intellect"}},"negotiation":{"type":"skill","value":{"name":"Negotiation","characteristic":"Presence"}},"perception":{"type":"skill","value":{"name":"Perception","characteristic":"Cunning"}},"pilotingPlanetary":{"type":"skill","value":{"name":"Piloting - Planetary ","characteristic":"Agility"}},"pilotingSpace":{"type":"skill","value":{"name":"Piloting - Space","characteristic":"Agility"}},"resilience":{"type":"skill","value":{"name":"Resilience","characteristic":"Brawn"}},"skulduggery":{"type":"skill","value":{"name":"Skulduggery","characteristic":"Cunning"}},"stealth":{"type":"skill","value":{"name":"Stealth","characteristic":"Agility"}},"streetwise":{"type":"skill","value":{"name":"Streetwise","characteristic":"Cunning"}},"survival":{"type":"skill","value":{"name":"Survival","characteristic":"Cunning"}},"vigilance":{"type":"skill","value":{"name":"Vigilance","characteristic":"Willpower"}},"brawl":{"type":"skill","value":{"name":"Brawl","characteristic":"Brawn"}},"gunnery":{"type":"skill","value":{"name":"Gunnery","characteristic":"Agility"}},"melee":{"type":"skill","value":{"name":"Melee","characteristic":"Brawn"}},"rangedLight":{"type":"skill","value":{"name":"Cool","characteristic":"Agility"}},"rangedHeavy":{"type":"skill","value":{"name":"Cool","characteristic":"Agility"}},"knowledgeCoreWorlds":{"type":"skill","value":{"name":"Cool","characteristic":"Intellect"}},"knowledgeEducation":{"type":"skill","value":{"name":"Knowledge - Education","characteristic":"Intellect"}},"knowledgeLore":{"type":"skill","value":{"name":"Cool","characteristic":"Intellect"}},"knowledgeOuterRim":{"type":"skill","value":{"name":"Knowledge - Outer Rim","characteristic":"Intellect"}},"knowledgeUnderworld":{"type":"skill","value":{"name":"Knowledge - Underworld","characteristic":"Intellect"}},"knowledgeXenology":{"type":"skill","value":{"name":"Knowledge - Xenology","characteristic":"Intellect"}},"knowledgeOther":{"type":"skill","value":{"name":"Knowledge - Other","characteristic":"Intellect"}}}`);


characterModel.prototype.definition = JSON.parse(`{"motivations":{"type":"[string]","default":[""]},"otherItems":{"type":"[string]"},"credits":{"type":"number","default":0},"armor":{"type":"[armor]"},"weapons":{"type":"[weapon]"},"advancements":{"type":"[advancement]"},"skills":{"type":"skills"},"characteristics":{"type":"characteristics"},"strain":{"type":"strainThreshold"},"wounds":{"type":"woundsThreshold"},"totalExperience":{"type":"number","default":0,"baseValue":["# $state.character.species.startingExperience"]},"availableExperience":{"type":"number","default":0,"derivedFrom":["# $state.character.advancements.map(a => a.cost).reduce((x, y)=> x-y, $state.character.totalExperience)"]},"soak":{"type":"number","default":0,"derivedFrom":["# $state.character.characteristics.brawn;","# $state.character.armor.map(a => a.soak).reduce((a, b) => a+b, $this.accumulator);"]},"specializationTalents":{"type":"[specializationTalent]"},"specializations":{"type":"[specialization]"},"career":{"type":"career"},"defense":{"type":"defense"},"species":{"type":"species"},"name":{"type":"string","default":""}}`);


armorModel.values = JSON.parse(`[{"name":"Adverse Environment Gear","defense":0,"soak":1,"price":500,"encumbrance":2,"hardpoints":1,"rarity":1},{"name":"Armored Clothing","defense":1,"soak":1,"price":1000,"encumbrance":3,"hardpoints":1,"rarity":6},{"name":"Heavy Battle Armor","defense":1,"soak":2,"price":5000,"encumbrance":6,"hardpoints":4,"rarity":7},{"name":"Heavy Clothing","defense":0,"soak":1,"price":50,"encumbrance":1,"hardpoints":0,"rarity":0},{"name":"Laminate","defense":0,"soak":2,"price":2500,"encumbrance":4,"hardpoints":3,"rarity":5},{"name":"Personal Deflector Shield","defense":2,"soak":0,"price":2500,"encumbrance":3,"hardpoints":0,"rarity":8},{"name":"Padded Armor","defense":0,"soak":2,"price":500,"encumbrance":2,"hardpoints":0,"rarity":1}]`).map(parsed => {
    return {...new armorModel(), ...parsed}
});

weaponModel.values = JSON.parse(`[{"name":"Holdout Blaster","skill":"Ranged (Light)","damage":5,"criticalRating":4,"range":"Short","encumbrance":1,"hardpoints":1,"price":200,"rarity":4,"special":["Stun setting"]},{"name":"Light Blaster Pistol","skill":"Ranged (Light)","damage":5,"criticalRating":4,"range":"Medium","encumbrance":1,"hardpoints":2,"price":300,"rarity":4,"special":["Stun setting"]},{"name":"Blaster Pistol","skill":"Ranged (Light)","damage":6,"criticalRating":3,"range":"Medium","encumbrance":1,"hardpoints":3,"price":400,"rarity":4,"special":["Stun setting"]},{"name":"Heavy Blaster Pistol","skill":"Ranged (Light)","damage":7,"criticalRating":3,"range":"Medium","encumbrance":2,"hardpoints":3,"price":700,"rarity":6,"special":["Stun setting"]},{"name":"Blaster Carbine","skill":"Ranged (Heavy)","damage":9,"criticalRating":3,"range":"Medium","encumbrance":3,"hardpoints":4,"price":850,"rarity":5,"special":["Stun setting"]},{"name":"Blaster Rifle","skill":"Ranged (Heavy)","damage":9,"criticalRating":3,"range":"Long","encumbrance":4,"hardpoints":4,"price":900,"rarity":5,"special":["Stun setting"]},{"name":"Heavy Blaster Rifle","skill":"Ranged (Heavy)","damage":10,"criticalRating":3,"range":"Long","encumbrance":6,"hardpoints":4,"price":1500,"rarity":6,"special":["Auto-fire","Cumbersome 3"]},{"name":"Light Repeating Blaster","skill":"Ranged (Heavy)","damage":11,"criticalRating":3,"range":"Long","encumbrance":7,"hardpoints":4,"price":2250,"isRestricted":true,"rarity":7,"special":["Auto-fire","Cumbersome 4","Pierce 1"]},{"name":"Heavy Repeating Rifle","skill":"Gunnery","damage":15,"criticalRating":2,"range":"Long","encumbrance":9,"hardpoints":4,"price":6000,"isRestricted":true,"rarity":8,"special":["Auto-fire","Cumbersome 5","Pierce 2","Vicious 1"]},{"name":"Bowcaster","skill":"Ranged (Heavy)","damage":10,"criticalRating":3,"range":"Medium","encumbrance":5,"hardpoints":2,"price":1250,"rarity":7,"special":["Cumbersome 3","Knockdown"]},{"name":"Ionization Blaster","skill":"Ranged (Light)","damage":10,"criticalRating":5,"range":"Short","encumbrance":3,"hardpoints":3,"price":250,"rarity":3,"special":["Disorient 5","Stun Damage (Droid Only)"]},{"name":"Disruptor Pistol","skill":"Ranged (Light)","damage":10,"criticalRating":2,"range":"Short","encumbrance":2,"hardpoints":2,"price":3000,"isRestricted":true,"rarity":6,"special":["Vicious 6"]},{"name":"Disruptor Rifle","skill":"Ranged (Heavy)","damage":10,"criticalRating":2,"range":"Long","encumbrance":5,"hardpoints":4,"price":5000,"isRestricted":true,"rarity":6,"special":["Vicious 5","Cumbersome"]},{"name":"Slugthrower Pistol","skill":"Ranged (Light)","damage":4,"criticalRating":5,"range":"Short","encumbrance":1,"hardpoints":0,"price":100,"rarity":3},{"name":"Slugthrower Rifle","skill":"Ranged (Heavy)","damage":7,"criticalRating":5,"range":"Medium","encumbrance":5,"hardpoints":1,"price":250,"rarity":3,"special":["Cumbersome 2"]},{"name":"Bola / Net","skill":"Ranged (Light)","damage":2,"criticalRating":0,"range":"Short","encumbrance":0.3,"hardpoints":2,"price":20,"rarity":2,"special":["Ensnare 3","Knockdown","Limited Ammo 1"]},{"name":"Flame Projector","skill":"Ranged (Heavy)","damage":8,"criticalRating":2,"range":"Short","encumbrance":6,"hardpoints":2,"price":1000,"rarity":6,"special":["Burn 3","Blast 8"]},{"name":"Missile Tube","skill":"Gunnery","damage":20,"criticalRating":2,"range":"Extreme","encumbrance":7,"hardpoints":4,"price":7500,"isRestricted":true,"rarity":8,"special":["Blast 10","Cumbersome 3","Guided 3","Breach 1","Prepare 1","Limited Ammo 6"]},{"name":"Frag Grenade","skill":"Ranged (Light)","damage":8,"criticalRating":4,"range":"Short","encumbrance":1,"hardpoints":0,"price":50,"rarity":5,"special":["Blast 6","Limited Ammo 1"]},{"name":"Stun Grenade","skill":"Ranged (Light)","damage":8,"criticalRating":0,"range":"Short","encumbrance":1,"hardpoints":0,"price":1500,"rarity":6,"special":["Disorient 3","Stun Damage","Blast 8","Limited Ammo 1"]},{"name":"Thermal Detonator","skill":"Ranged (Light)","damage":20,"criticalRating":2,"range":"Short","encumbrance":1,"hardpoints":0,"price":2000,"isRestricted":true,"rarity":6,"special":["Blast 15","Breach 1","Vicious 4","Limited Ammo 1"]},{"name":"Brass Knuckles","skill":"Brawl","damage":1,"criticalRating":4,"range":"Engaged","encumbrance":1,"hardpoints":0,"price":25,"rarity":0,"special":["Disorient 3"]},{"name":"Shock Gloves","skill":"Brawl","damage":0,"criticalRating":5,"range":"Engaged","encumbrance":0,"hardpoints":1,"price":300,"rarity":2,"special":["Stun 3"]},{"name":"Combat Knife","skill":"Melee","damage":1,"criticalRating":3,"range":"Engaged","encumbrance":1,"hardpoints":0,"price":25,"rarity":1,"special":[]},{"name":"Gaffi Stick","skill":"Melee","damage":2,"criticalRating":3,"range":"Engaged","encumbrance":3,"hardpoints":0,"price":100,"rarity":2,"special":["Defensive 1","Disorient 3"]},{"name":"Force Pike","skill":"Melee","damage":3,"criticalRating":2,"range":"Engaged","encumbrance":3,"hardpoints":3,"price":500,"rarity":4,"special":["Pierce 2","Stun Setting"]},{"name":"Lightsaber","skill":"Lightsaber","damage":10,"criticalRating":1,"range":"Engaged","encumbrance":1,"hardpoints":0,"price":10000,"isRestricted":true,"rarity":10,"special":["Breach 1","Sunder","Vicious 2"]},{"name":"Truncheon","skill":"Melee","damage":2,"criticalRating":5,"range":"Engaged","encumbrance":2,"hardpoints":0,"price":15,"rarity":1,"special":["Disorient 2"]},{"name":"Vibro-Ax","skill":"Melee","damage":3,"criticalRating":2,"range":"Engaged","encumbrance":4,"hardpoints":3,"price":750,"rarity":5,"special":["Pierce 2","Sunder","Vicious 3"]},{"name":"Vibroknife","skill":"Melee","damage":1,"criticalRating":2,"range":"Engaged","encumbrance":1,"hardpoints":2,"price":250,"rarity":3,"special":["Pierce 2","Vicious 1"]},{"name":"Vibrosword","skill":"Melee","damage":2,"criticalRating":2,"range":"Engaged","encumbrance":3,"hardpoints":3,"price":750,"rarity":5,"special":["Pierce 2","Vicious 1","Defensive 1"]}]`).map(parsed => {
    return {...new weaponModel(), ...parsed}
});

specializationTalentModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new specializationTalentModel(), ...parsed}
});

specializationModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new specializationModel(), ...parsed}
});

careerModel.values = JSON.parse(`[{"name":"Bounty Hunter","careerSkills":["Athletics","Brawl","Perception","Piloting - Planetary","Piloting - Space","Ranged - Heavy","Streetwise","Streetwise","Vigilance"],"specializations":[{"name":"Assassin","careerSkills":["Melee","Ranged - Heavy","Skulduggery","Stealth"],"talents":[{"name":"Grit","tier":1},{"name":"Lethal Blows","tier":1},{"name":"Stalker","tier":1},{"name":"Dodge","tier":1},{"name":"Precise Aim","tier":2,"requires":[0,5,8]},{"name":"Jump Up","tier":2,"requires":[1,4,6,9]},{"name":"Quick Strike","tier":2,"requires":[2,5,7,10]},{"name":"Quick Draw","tier":2,"requires":[3,6,11]},{"name":"Targeted Blow","tier":3,"requires":[4,12]},{"name":"Stalker","tier":3,"requires":[5,10,13]},{"name":"Lethal Blows","tier":3,"requires":[6,9,14]},{"name":"Anatomy Lessons","tier":3,"requires":[7,15]},{"name":"Stalker","tier":4,"requires":[8,13]},{"name":"Sniper Shot","tier":4,"requires":[9,12]},{"name":"Dodge","tier":4,"requires":[10]},{"name":"Lethal Blows","tier":4,"requires":[11]},{"name":"Precise Aim","tier":5,"requires":[12]},{"name":"Deadly Accuracy","tier":5,"requires":[13]},{"name":"Dedication","tier":5,"requires":[14]},{"name":"Master of Shadows","tier":4,"requires":[15]}]},{"name":"Gadgeteer","careerSkills":["Brawl","Coercion","Mechanics","Ranged - Light"],"talents":[{"name":"Brace","tier":1},{"name":"Toughened","tier":1},{"name":"Intimidating","tier":1},{"name":"Defensive Stance","tier":1},{"name":"Spare Clip","tier":2,"requires":[5]},{"name":"Jury Rigged","tier":2,"requires":[1]},{"name":"Point Blank","tier":2,"requires":[5]},{"name":"Disorient","tier":2,"requires":[3]},{"name":"Toughened","tier":3,"requires":[9]},{"name":"Armor Master","tier":3,"requires":[5]},{"name":"Natural Enforcer","tier":3,"requires":[9]},{"name":"Stunning Blow","tier":3,"requires":[7]},{"name":"Jury Rigged","tier":4,"requires":[13]},{"name":"Tinkerer","tier":4,"requires":[9]},{"name":"Deadly Accuracy","tier":4,"requires":[13]},{"name":"Stunning Blow (Improved)","tier":4,"requires":[11]},{"name":"Intimidating","tier":5,"requires":[17]},{"name":"Dedication","tier":5,"requires":[13]},{"name":"Armor Master (Improved)","tier":5,"requires":[17]},{"name":"Crippling Blow","tier":5,"requires":[15]}]},{"name":"Survivalist","careerSkills":["Knowledge - Xenology","Perception","Resilience","Survival"],"talents":[{"name":"Forager","tier":1},{"name":"Stalker","tier":1},{"name":"Outdoorsman","tier":1},{"name":"Expert Tracker","tier":1},{"name":"Outdoorsman","tier":2,"requires":[0]},{"name":"Swift","tier":2,"requires":[1,4,6]},{"name":"Hunter","tier":2,"requires":[2,5]},{"name":"Soft Spot","tier":2,"requires":[6]},{"name":"Toughened","tier":3,"requires":[4]},{"name":"Expert Tracker","tier":3,"requires":[5]},{"name":"Stalker","tier":3,"requires":[6,9]},{"name":"Natural Outdoorsman","tier":3,"requires":[7,10]},{"name":"Toughened","tier":4,"requires":[8]},{"name":"Hunter","tier":4,"requires":[9]},{"name":"Expert Tracker","tier":4,"requires":[10]},{"name":"Blooded","tier":4,"requires":[11]},{"name":"Enduring","tier":5,"requires":[12,17]},{"name":"Dedication","tier":5,"requires":[16,18]},{"name":"Grit","tier":5,"requires":[14]},{"name":"Heroic Fortitude","tier":5,"requires":[15]}]}]},{"name":"Colonist","careerSkills":["Charm","Deception","Knowledge - Core Worlds","Knowledge - Education","Knowledge - Lore","Leadership","Negotiation","Streetwise"],"specializations":[{"name":"Doctor","careerSkills":["Cool","Knowledge - Education","Medicine","Resilience"],"talents":[{"name":"Surgeon","tier":1},{"name":"Bacta Specialist","tier":1},{"name":"Grit","tier":1},{"name":"Resolve","tier":1},{"name":"Stim Application","tier":2,"requires":[0,5]},{"name":"Grit","tier":2,"requires":[4,6]},{"name":"Surgeon","tier":2,"requires":[2,5,7]},{"name":"Resolve","tier":2,"requires":[6]},{"name":"Surgeon","tier":3,"requires":[4,9]},{"name":"Grit","tier":3,"requires":[8,10]},{"name":"Bacta Specialist","tier":3,"requires":[6,9]},{"name":"Pressure Point","tier":3,"requires":[7]},{"name":"Stim Application (Improved)","tier":4,"requires":[8]},{"name":"Natural Doctor","tier":4,"requires":[9]},{"name":"Toughened","tier":4,"requires":[10]},{"name":"Anatomy Lessons","tier":4,"requires":[11]},{"name":"Stim Application (Supreme)","tier":5,"requires":[12,17]},{"name":"Master Doctor","tier":5,"requires":[13,16,18]},{"name":"Dedication","tier":5,"requires":[14,17]},{"name":"Dodge","tier":5,"requires":[15]}]},{"name":"Politico","careerSkills":["Charm","Coercion","Deception","Knowledge - Core Worlds"],"talents":[{"name":"Kill With Kindness","tier":1},{"name":"Grit","tier":1},{"name":"Plausible Deniability","tier":1},{"name":"Toughened","tier":1},{"name":"Inspiring Rhetoric","tier":2,"requires":[0,5]},{"name":"Kill With Kindness","tier":2,"requires":[1,4]},{"name":"Scathing Tirade","tier":2,"requires":[2,7]},{"name":"Plausible Deniability","tier":2,"requires":[3,6]},{"name":"Dodge","tier":3,"requires":[4]},{"name":"Inspiring Rhetoric (Improved)","tier":3,"requires":[8]},{"name":"Scathing Tirade (Improved)","tier":3,"requires":[11]},{"name":"Well Rounded","tier":3,"requires":[7]},{"name":"Grit","tier":4,"requires":[8]},{"name":"Inspiring Rhetoric (Supreme)","tier":4,"requires":[9]},{"name":"Scathing Tirade (Supreme)","tier":4,"requires":[10]},{"name":"Nobody's Fool","tier":4,"requires":[11]},{"name":"Steely Nerves","tier":5,"requires":[12]},{"name":"Dedication","tier":5,"requires":[16,18]},{"name":"Natural Charmer","tier":5,"requires":[17,19]},{"name":"Intense Presence","tier":5,"requires":[15]}]},{"name":"Scholar","careerSkills":["Knowledge - Outer Rim","Knowledge - Underworld","Knowledge - Xenology","Perception"],"talents":[{"name":"Respected Scholar","tier":1},{"name":"Speaks Binary","tier":1},{"name":"Grit","tier":1},{"name":"Brace","tier":1},{"name":"Researcher","tier":2,"requires":[0,5]},{"name":"Respected Scholar","tier":2,"requires":[1,4]},{"name":"Resolve","tier":2,"requires":[2,7]},{"name":"Researcher","tier":2,"requires":[3,6]},{"name":"Codebreaker","tier":3,"requires":[4,9]},{"name":"Knowledge Specialization","tier":3,"requires":[8]},{"name":"Natural Scholar","tier":3,"requires":[11]},{"name":"Well Rounded","tier":3,"requires":[7]},{"name":"Knowledge Specialization","tier":4,"requires":[13]},{"name":"Intense Focus","tier":4,"requires":[9]},{"name":"Confidence","tier":4,"requires":[10]},{"name":"Resolve","tier":4,"requires":[14]},{"name":"Stroke of Genius","tier":5,"requires":[12]},{"name":"Mental Fortress","tier":5,"requires":[16,18]},{"name":"Dedication","tier":5,"requires":[17,19]},{"name":"Toughened","tier":4,"requires":[18,15]}]}]},{"name":"Explorer","careerSkills":["Astrogation","Cool","Knowledge - Lore","Knowledge - Outer Rim","Knowledge - Xenology","Perception","Piloting - Space","Survival"],"specializations":[{"name":"Fringer","careerSkills":["Astrogation","Coordination","Negotiation","Streetwise"],"talents":[{"name":"Galaxy Mapper","tier":1},{"name":"Street Smarts","tier":1},{"name":"Rapid Recovery","tier":1},{"name":"Street Smarts","tier":1},{"name":"Skilled Jockey","tier":2,"requires":[0,5]},{"name":"Galaxy Mapper","tier":2,"requires":[4]},{"name":"Grit","tier":2,"requires":[2,7]},{"name":"Toughened","tier":2,"requires":[3,6]},{"name":"Master Starhopper","tier":3,"requires":[4,9]},{"name":"Defensive Driving","tier":3,"requires":[5,8]},{"name":"Rapid Recovery","tier":3,"requires":[6]},{"name":"Durable","tier":3,"requires":[7]},{"name":"Rapid Recovery","tier":4,"requires":[13]},{"name":"Jump Up","tier":4,"requires":[12,14]},{"name":"Grit","tier":4,"requires":[10]},{"name":"Knockdown","tier":4,"requires":[11]},{"name":"Dedication","tier":5,"requires":[12,17]},{"name":"Toughened","tier":5,"requires":[13,16]},{"name":"Dodge","tier":5,"requires":[19]},{"name":"Dodge","tier":5,"requires":[15]}]},{"name":"Scout","careerSkills":["Athletics","Medicine","Piloting - Planetary","Survival"],"talents":[{"name":"Rapid Recovery","tier":1},{"name":"Stalker","tier":1},{"name":"Grit","tier":1},{"name":"Shortcut","tier":1},{"name":"Forager","tier":2,"requires":[0,5]},{"name":"Quick Strike","tier":2,"requires":[1,4,6]},{"name":"Let's Ride","tier":2,"requires":[2,5,7]},{"name":"Disorient","tier":2,"requires":[3,6]},{"name":"Rapid Recovery","tier":3,"requires":[4]},{"name":"Natural Hunter","tier":3,"requires":[5]},{"name":"Familiar Suns","tier":3,"requires":[6]},{"name":"Shortcut","tier":3,"requires":[7]},{"name":"Grit","tier":4,"requires":[8]},{"name":"Heightened Awareness","tier":4,"requires":[9]},{"name":"Toughened","tier":4,"requires":[10]},{"name":"Quick Strike","tier":4,"requires":[11]},{"name":"Utility Belt","tier":5,"requires":[12,17]},{"name":"Dedication","tier":5,"requires":[16,18]},{"name":"Stalker","tier":5,"requires":[14,17]},{"name":"Disorient","tier":5,"requires":[15]}]},{"name":"Trader","careerSkills":["Deception","Knowledge - Core Worlds","Knowledge - Underworld","Negotiation"],"talents":[{"name":"Know Somebody","tier":1},{"name":"Convincing Demeanor","tier":1},{"name":"Wheel and Deal","tier":1},{"name":"Smooth Talker","tier":1},{"name":"Wheel and Deal","tier":2,"requires":[0,5]},{"name":"Grit","tier":2,"requires":[4]},{"name":"Spare Clip","tier":2,"requires":[5]},{"name":"Toughened","tier":2,"requires":[6]},{"name":"Know Somebody","tier":3,"requires":[4]},{"name":"Nobody's Fool","tier":3,"requires":[8]},{"name":"Smooth Talker","tier":3,"requires":[9]},{"name":"Nobody's Fool","tier":3,"requires":[10]},{"name":"Wheel and Deal","tier":4,"requires":[8]},{"name":"Steely Nerves","tier":4,"requires":[12]},{"name":"Black Market Contacts","tier":4,"requires":[13]},{"name":"Black Market Contacts","tier":4,"requires":[14]},{"name":"Know Somebody","tier":5,"requires":[12,17]},{"name":"Natural Negotiator","tier":5,"requires":[16,18]},{"name":"Dedication","tier":5,"requires":[17,19]},{"name":"Master Merchant","tier":5,"requires":[15,18]}]}]},{"name":"Hired Gun","careerSkills":["Athletics","Brawl","Discipline","Melee","Piloting - Planetary","Ranged - Light","Resilience","Vigilance"],"specializations":[{"name":"Bodyguard","careerSkills":["Gunnery","Perception","Piloting - Planetary","Ranged - Heavy"],"talents":[{"name":"Toughened","tier":1},{"name":"Barrage","tier":1},{"name":"Durable","tier":1},{"name":"Grit","tier":1},{"name":"Body Guard","tier":2,"requires":[5]},{"name":"Hard Headed","tier":2,"requires":[1,6]},{"name":"Barrage","tier":2,"requires":[2,5]},{"name":"Brace","tier":2,"requires":[6]},{"name":"Body Guard","tier":3,"requires":[4]},{"name":"Side Step","tier":3,"requires":[5,10]},{"name":"Defensive Stance","tier":3,"requires":[6,9]},{"name":"Brace","tier":3,"requires":[7]},{"name":"Enduring","tier":4,"requires":[8]},{"name":"Side Step","tier":4,"requires":[9,14]},{"name":"Defensive Stance","tier":4,"requires":[10,13]},{"name":"Hard Headed","tier":4,"requires":[14]},{"name":"Dedication","tier":5,"requires":[17]},{"name":"Barrage","tier":5,"requires":[13,16]},{"name":"Toughened","tier":5,"requires":[14,17]},{"name":"Hard Headed (Improved)","tier":5,"requires":[15]}]},{"name":"Marauder","careerSkills":["Coercion","Melee","Resilience","Survival"],"talents":[{"name":"Toughened","tier":1},{"name":"Frenzied Attack","tier":1},{"name":"Feral Strength","tier":1},{"name":"Lethal Blows","tier":1},{"name":"Feral Strength","tier":2,"requires":[0,5]},{"name":"Toughened","tier":2,"requires":[1,4,6]},{"name":"Heroic Fortitude","tier":2,"requires":[2,5,7]},{"name":"Knockdown","tier":2,"requires":[3,6]},{"name":"Enduring","tier":3,"requires":[9]},{"name":"Lethal Blows","tier":3,"requires":[5,10]},{"name":"Toughened","tier":3,"requires":[6,9]},{"name":"Frenzied Attack","tier":3,"requires":[10]},{"name":"Toughened","tier":4,"requires":[8,13]},{"name":"Feral Strength","tier":4,"requires":[12,14]},{"name":"Natural Brawler","tier":4,"requires":[13,15]},{"name":"Lethal Blows","tier":4,"requires":[11,14]},{"name":"Frenzied Attack","tier":5,"requires":[17]},{"name":"Enduring","tier":5,"requires":[13,18]},{"name":"Defensive Stance","tier":5,"requires":[14,17]},{"name":"Dedication","tier":5,"requires":[18]}]},{"name":"Mercenary Soldier","careerSkills":["Discipline","Gunnery","Leadership","Ranged - Heavy"],"talents":[{"name":"Command","tier":1},{"name":"Second Wind","tier":1},{"name":"Point Blank","tier":1},{"name":"Side Step","tier":1},{"name":"Second Wind","tier":2,"requires":[0,5]},{"name":"Confidence","tier":2,"requires":[1,4]},{"name":"Strong Arm","tier":2,"requires":[2,7]},{"name":"Point Blank","tier":2,"requires":[3,6]},{"name":"Field Commander","tier":3,"requires":[4,9]},{"name":"Command","tier":3,"requires":[5,8,10]},{"name":"Natural Marksman","tier":3,"requires":[6,9]},{"name":"Sniper Shot","tier":3,"requires":[10]},{"name":"Field Commander (Improved)","tier":4,"requires":[8]},{"name":"Grit","tier":4,"requires":[9]},{"name":"Toughened","tier":4,"requires":[10,15]},{"name":"Lethal Blows","tier":4,"requires":[11,14]},{"name":"Deadly Accuracy","tier":5,"requires":[17]},{"name":"True Aim","tier":5,"requires":[13,18]},{"name":"Dedication","tier":5,"requires":[17,19]},{"name":"True Aim","tier":5,"requires":[15,18]}]}]},{"name":"Smuggler","careerSkills":["Coordination","Deception","Knowledge - Underworld","Perception","Piloting - Space","Skulduggery","Streetwise","Vigilance"],"specializations":[{"name":"Pilot","careerSkills":["Astrogation","Gunnery","Piloting - Planetary","Piloting - Space"],"talents":[{"name":"Full Throttle","tier":1},{"name":"Skilled Jockey","tier":1},{"name":"Galaxy Mapper","tier":1},{"name":"Let's Ride","tier":1},{"name":"Skilled Jockey","tier":2,"requires":[0,5]},{"name":"Dead to Rights","tier":2,"requires":[1,4]},{"name":"Galaxy Mapper","tier":2,"requires":[2,7]},{"name":"Rapid Recovery","tier":2,"requires":[3,6]},{"name":"Full Throttle (Improved)","tier":3,"requires":[4]},{"name":"Dead to Rights (Improved)","tier":3,"requires":[5]},{"name":"Grit","tier":3,"requires":[6,11]},{"name":"Natural Pilot","tier":3,"requires":[7,10]},{"name":"Grit","tier":4,"requires":[8,13]},{"name":"Full Throttle (Supreme)","tier":4,"requires":[12]},{"name":"Tricky Target","tier":4,"requires":[10]},{"name":"Defensive Driving","tier":4,"requires":[11]},{"name":"Master Pilot","tier":5,"requires":[12,17]},{"name":"Dedication","tier":5,"requires":[16,18]},{"name":"Toughened","tier":5,"requires":[14,17]},{"name":"Brilliant Evasion","tier":5,"requires":[15,18]}]},{"name":"Scoundrel","careerSkills":["Charm","Cool","Deception","Ranged - Light"],"talents":[{"name":"Black Market Contacts","tier":1},{"name":"Convincing Demeanor","tier":1},{"name":"Quick Draw","tier":1},{"name":"Rapid Reaction","tier":1},{"name":"Convincing Demeanor","tier":2,"requires":[0]},{"name":"Black Market Contacts","tier":2,"requires":[1,6]},{"name":"Convincing Demeanor","tier":2,"requires":[5,7]},{"name":"Quick Strike","tier":2,"requires":[3]},{"name":"Hidden Storage","tier":3,"requires":[4]},{"name":"Toughened","tier":3,"requires":[5,10]},{"name":"Black Market Contacts","tier":3,"requires":[6,9]},{"name":"Side Step","tier":3,"requires":[7]},{"name":"Toughened","tier":4,"requires":[8]},{"name":"Rapid Reaction","tier":4,"requires":[9,14]},{"name":"Hidden Storage","tier":4,"requires":[10,13]},{"name":"Side Step","tier":4,"requires":[11]},{"name":"Dedication","tier":5,"requires":[12]},{"name":"Natural Charmer","tier":5,"requires":[13,16,18]},{"name":"Soft Spot","tier":5,"requires":[14,17,19]},{"name":"Quick Strike","tier":5,"requires":[15,18]}]},{"name":"Thief","careerSkills":["Computers","Skulduggery","Stealth","Vigilance"],"talents":[{"name":"Street Smarts","tier":1},{"name":"Black Market Contacts","tier":1},{"name":"Indistinguishable","tier":1},{"name":"Bypass Security","tier":1},{"name":"Black Market Contacts","tier":2,"requires":[0,5]},{"name":"Dodge","tier":2,"requires":[1,4,6]},{"name":"Grit","tier":2,"requires":[5,7]},{"name":"Hidden Storage","tier":2,"requires":[3,6]},{"name":"Stalker","tier":3,"requires":[4,9]},{"name":"Grit","tier":3,"requires":[5,8,10]},{"name":"Rapid Reaction","tier":3,"requires":[6,9,11]},{"name":"Shortcut","tier":3,"requires":[10]},{"name":"Bypass Security","tier":4,"requires":[8]},{"name":"Natural Rogue","tier":4,"requires":[9,14]},{"name":"Street Smarts","tier":4,"requires":[10,13,15]},{"name":"Jump Up","tier":4,"requires":[11,14]},{"name":"Master of Shadows","tier":5,"requires":[12]},{"name":"Dodge","tier":5,"requires":[13,18]},{"name":"Indistinguishable","tier":5,"requires":[14,17]},{"name":"Dedication","tier":5,"requires":[15]}]}]},{"name":"Technician","careerSkills":["Astrogation","Computers","Coordination","Discipline","Knowledge - Outer Rim","Mechanics","Perception","Piloting - Planetary"],"specializations":[{"name":"Mechanic","careerSkills":["Brawl","Mechanics","Piloting - Space","Skulduggery"],"talents":[{"name":"Gearhead","tier":1},{"name":"Toughened","tier":1},{"name":"Fine Tuning","tier":1},{"name":"Solid Repairs","tier":1},{"name":"Redundant Systems","tier":2,"requires":[0,5]},{"name":"Solid Repairs","tier":2,"requires":[1,4,6]},{"name":"Gearhead","tier":2,"requires":[2,5,7]},{"name":"Grit","tier":2,"requires":[3,6]},{"name":"Solid Repairs","tier":3,"requires":[4,9]},{"name":"Enduring","tier":3,"requires":[5,8,10]},{"name":"Bad Motivator","tier":3,"requires":[6,9,11]},{"name":"Toughened","tier":3,"requires":[7,10]},{"name":"Contraption","tier":4,"requires":[8,13]},{"name":"Solid Repairs","tier":4,"requires":[9,12,14]},{"name":"Fine Tuning","tier":4,"requires":[10,13]},{"name":"Hard Headed","tier":4,"requires":[11]},{"name":"Natural Tinkerer","tier":5,"requires":[12]},{"name":"Hold Together","tier":5,"requires":[13]},{"name":"Dedication","tier":5,"requires":[14]},{"name":"Hard Headed (Improved)","tier":5,"requires":[15]}]},{"name":"Outlaw Tech","careerSkills":["Knowledge - Education","Knowledge - Underworld","Mechanics","Streetwise"],"talents":[{"name":"Tinkerer","tier":1},{"name":"Utinni!","tier":1},{"name":"Speaks Binary","tier":1},{"name":"Tinkerer","tier":1},{"name":"Solid Repairs","tier":2,"requires":[0,5]},{"name":"Grit","tier":2,"requires":[1,4,6]},{"name":"Utinni!","tier":2,"requires":[2,5,7]},{"name":"Toughened","tier":2,"requires":[3,6]},{"name":"Utility Belt","tier":3,"requires":[4,9]},{"name":"Side Step","tier":3,"requires":[5,8,10]},{"name":"Brace","tier":3,"requires":[6,9,11]},{"name":"Defensive Stance","tier":3,"requires":[7,10]},{"name":"Jury Rigged","tier":4,"requires":[8,13]},{"name":"Speaks Binary","tier":4,"requires":[9,12,14]},{"name":"Inventor","tier":4,"requires":[10,13]},{"name":"Jury Rigged","tier":4,"requires":[11]},{"name":"Inventor","tier":5,"requires":[12,17]},{"name":"Dedication","tier":5,"requires":[16]},{"name":"Known Schematic","tier":5,"requires":[14,19]},{"name":"Brace","tier":5,"requires":[15,18]}]},{"name":"Slicer","careerSkills":["Computers","Skulduggery","Stealth","Vigilance"],"talents":[{"name":"Codebreaker","tier":1},{"name":"Grit","tier":1},{"name":"Technical Aptitude","tier":1},{"name":"Bypass Security","tier":1},{"name":"Defensive Slicing","tier":2,"requires":[0,5]},{"name":"Technical Aptitude","tier":2,"requires":[6]},{"name":"Grit","tier":2,"requires":[5,7]},{"name":"Bypass Security","tier":2,"requires":[6]},{"name":"Natural Programmer","tier":3,"requires":[4]},{"name":"Bypass Security","tier":3,"requires":[5,10]},{"name":"Defensive Slicing","tier":3,"requires":[6,9,11]},{"name":"Grit","tier":3,"requires":[7,10]},{"name":"Defensive Slicing","tier":4,"requires":[8,13]},{"name":"Defensive Slicing (Improved)","tier":4,"requires":[9,12,14]},{"name":"Codebreaker","tier":4,"requires":[10,13,15]},{"name":"Resolve","tier":4,"requires":[11,14]},{"name":"Skilled Slicer","tier":5,"requires":[12,17]},{"name":"Master Slicer","tier":5,"requires":[13,16,18]},{"name":"Mental Fortress","tier":5,"requires":[14,17,19]},{"name":"Dedication","tier":5,"requires":[15,18]}]}]}]`).map(parsed => {
    return {...new careerModel(), ...parsed}
});

specialAbilityModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new specialAbilityModel(), ...parsed}
});

characteristicsModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new characteristicsModel(), ...parsed}
});

defenseModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new defenseModel(), ...parsed}
});

speciesModel.values = JSON.parse(`[{"name":"Bothan","plural":"Bothans","source":"core","baseCharacteristics":{"brawn":1,"agility":2,"intellect":2,"cunning":3,"willpower":2,"presence":2},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":11,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Streetwise"],"startingTalents":["Convincing Demeanor"],"specialAbilities":[{"name":"Streetwise","description":"Bothans begin the game with one rank in Streetwise. They still may not train Streetwise above rank 2 during character creation. They also start with one rank in the Convincing Demeanor talent."}]},{"name":"Droid","plural":"Droids","source":"core","baseCharacteristics":{"brawn":1,"agility":1,"intellect":1,"cunning":1,"willpower":1,"presence":1},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":175,"startingCareerSkillChoices":6,"firstspecialtytrainedskills":4,"specialAbilities":[{"name":"Droid","description":"Droids do not need to east, sleep or breath and are unaffected by toxins or poisons. Droids have a cybernetic implant cap of 6 instead of their Brawn."},{"name":"Inorganic","description":"Since droids are inorganic, they do not gain the benefits of recovering with bacta tank, stimpack or Medicine care."},{"name":"Mechanical Being","description":"Droids cannot become force sensitive, nor acquire a Force Rating by any means. Droids cannot use Force Powers and also cannot be affected by mind altering powers."}]},{"name":"Gand - Lunged","plural":"Gand","source":"core","baseCharacteristics":{"brawn":2,"agility":2,"intellect":2,"cunning":2,"willpower":3,"presence":1},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":110,"startingSkills":["Discipline"],"specialAbilities":[{"name":"Lunged Gand","description":"Gand with lungs breathe an ammonia mixture. They start with 10xp, breathing apparatus and treat oxygen as a dangerous atmosphere with rating 8."}]},{"name":"Gand - Lungless","plural":"Gand","source":"core","baseCharacteristics":{"brawn":2,"agility":2,"intellect":2,"cunning":2,"willpower":3,"presence":1},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Discipline"],"specialAbilities":[{"name":"Lungless Gand","description":"Gand without lungs gain all metabolic requirements from food. They cannot suffocate but suffer the normal effects from exposure to vacuum."}]},{"name":"Human","plural":"Humans","source":"core","baseCharacteristics":{"brawn":2,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":110,"startingnoniscareerskillchoices":2,"specialAbilities":[{"name":"Starting Skills","description":"Humans start the game with one rank in two non-career skills of their choice."}]},{"name":"Rodian","plural":"Rodians","source":"source","baseCharacteristics":{"brawn":2,"agility":3,"intellect":2,"cunning":2,"willpower":1,"presence":2},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Survival"],"specialAbilities":[{"name":"Survival Training","description":"Rodians begin with 1 rank of Survival"}]},{"name":"Trandoshan","plural":"Trandoshans","source":"core","baseCharacteristics":{"brawn":3,"agility":1,"intellect":2,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":12,"characteristic":"brawn"},"strainThreshold":{"base":9,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Perception"],"specialAbilities":[{"name":"Regeneration","description":"Whenever a Trandoshan would recover one or more wounds from natural healing or bacta tank treatment, they recover one additional Wound. They do not gain any additional wounds when receiving first aid or medical care from a character or when using a stimpack. Trandoshans may regrow lost limbs though it may take up to a month for the limb to be usable again."},{"name":"Claws","description":"When a Trandoshan makes Brawl checks to deal damage to an opponent, they deal +1 damage and have a critical range of 3."}]},{"name":"Twi'Lek","plural":"Twi'Leks","source":"core","baseCharacteristics":{"brawn":1,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":3},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":11,"characteristic":"willpower"},"startingExperience":100,"startingSkills":[{"options":["Charm","Deception"],"choices":1}],"specialAbilities":[{"name":"Twi'Lek","description":"When making skill checks, Twi'leks may remove ■ due to arid or hot conditions."}]},{"name":"Wookie","plural":"Wookies","source":"core","baseCharacteristics":{"brawn":3,"agility":2,"intellect":2,"cunning":2,"willpower":1,"presence":2},"woundsThreshold":{"base":14,"characteristic":"brawn"},"strainThreshold":{"base":8,"characteristic":"willpower"},"startingExperience":90,"startingSkills":["Brawl"],"specialAbilities":[{"name":"Wookie Rage","description":"When a Wookie has suffered any wounds, they deal +1 damage with Brawl and Melee attacks"}]},{"name":"Aqualish - Aquala","plural":"Aqualish","source":"dangerous-covenants","baseCharacteristics":{"brawn":3,"agility":2,"intellect":1,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":8,"characteristic":"willpower"},"startingExperience":90,"startingSkills":["Brawl","Resilience"],"specialAbilities":[{"name":"Aquala","description":"Aquala may remove ■ due to any cold or wet condititions."}]},{"name":"Aqualish -  Ualaq","plural":"Aqualish","source":"dangerous-covenants","baseCharacteristics":{"brawn":3,"agility":2,"intellect":1,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":8,"characteristic":"willpower"},"startingExperience":90,"startingSkills":["Brawl",{"options":["Survival","Perception"],"choices":1}],"specialAbilities":[{"name":"Ualaq","description":"Aquala may remove ■ due to dark condititions but suffer ■ in brightly lit environments."}]},{"name":"Aqualish - Quara","plural":"Aqualish","source":"dangerous-covenants","baseCharacteristics":{"brawn":3,"agility":2,"intellect":1,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":8,"characteristic":"willpower"},"startingExperience":90,"startingSkills":["Brawl",{"options":["Athletics","Coercion"],"choices":1}],"specialAbilities":[{"name":"Quara","description":"Quara may remove ■ when attempting to track through a natural environment."}]},{"name":"Klatoonian","plural":"Klatoonian","source":"dangerous-covenants","baseCharacteristics":{"brawn":2,"agility":3,"intellect":2,"cunning":2,"willpower":1,"presence":2},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":[{"options":["Brawl","Ranged - Heavy","Ranged - Light"],"choices":1}],"startingnoniscareerskillchoices":1,"specialAbilities":[]},{"name":"Weequay","plural":"Weequay","source":"dangerous-covenants","baseCharacteristics":{"brawn":3,"agility":2,"intellect":1,"cunning":3,"willpower":2,"presence":1},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":9,"characteristic":"willpower"},"startingExperience":90,"startingSkills":[{"options":["Resilience","Athletics"],"choices":1}],"specialAbilities":[{"name":"Pheromones","description":"Weequay can communicate with each other using pheremones. This is completely non-verbal and undetectable to any other species. Weequays can only communicate like this if they are within short range of each other."}]},{"name":"Chiss","plural":"Chiss","source":"enter-the-unknown","baseCharacteristics":{"brawn":2,"agility":2,"intellect":3,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Cool"],"specialAbilities":[{"name":"Infravision","description":"Chiss have adapted to be able to see in both the infrared and normal visible spectrum. Chiss remove up to ■ added to checks by lighting connections."}]},{"name":"Duro","plural":"Duros","source":"enter-the-unknown","baseCharacteristics":{"brawn":1,"agility":2,"intellect":3,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Piloting - Space"],"specialAbilities":[{"name":"Infravision","description":"Chiss have adapted to be able to see in both the infrared and normal visible spectrum. Chiss remove up to ■ added to checks by lighting connections."}]},{"name":"Toydarian","plural":"Toydarians","source":"enter-the-unknown","baseCharacteristics":{"brawn":1,"agility":1,"intellect":2,"cunning":2,"willpower":3,"presence":3},"woundsThreshold":{"base":9,"characteristic":"brawn"},"strainThreshold":{"base":12,"characteristic":"willpower"},"startingExperience":100,"specialAbilities":[{"name":"Small","description":"Toydarians are smaller than average and count as silhouette 1."},{"name":"Hover","description":"Toydarians have wings that allow them to hover slightly off the ground. Toydarians do not have to spend additional maneuvers when navigating difficult terrain."}]},{"name":"Arcona","plural":"Arcona","source":"far-horizons","baseCharacteristics":{"brawn":1,"agility":2,"intellect":2,"cunning":2,"willpower":3,"presence":2},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Vigilance"],"specialAbilities":[{"name":"Arcona","description":"Arcona may remove ■ due to arid or hot environmental conditions."},{"name":"Mood Readers","description":"Arcona add [Triumph] to any Charm or Negotiation checks they make."}]},{"name":"Chevin","plural":"Chevin","source":"far-horizons","baseCharacteristics":{"brawn":3,"agility":1,"intellect":2,"cunning":3,"willpower":2,"presence":1},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":11,"characteristic":"willpower"},"startingExperience":80,"startingSkills":["Negotiation"],"startingTalents":["Durable"],"specialAbilities":[{"name":"Advanced Olfaction","description":"A Chevin's keen sense of smell adds □ to Perception checks involving the sense of smell."}]},{"name":"Gran","plural":"Gran","source":"far-horizons","baseCharacteristics":{"brawn":2,"agility":2,"intellect":2,"cunning":1,"willpower":2,"presence":3},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":9,"characteristic":"willpower"},"startingExperience":100,"startingSkills":[{"options":["Charm","Negotiation"],"choices":1}],"specialAbilities":[{"name":"Enhanced Vision","description":"When making ranged combat or Perception checks, Gran remove up to ■ ■ due to environmental conditions or concealment, but not defense."}]},{"name":"Faleen","plural":"Faleen","source":"fly-casual","baseCharacteristics":{"brawn":1,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":3},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":12,"characteristic":"willpower"},"startingExperience":90,"startingSkills":["Charm"],"specialAbilities":[{"name":"Beguiling Pheromones","description":"Once per check as an incidental, a Faleen may suffer 2 strain to upgrade the ability of a Charm, Deception or Negotiation check against a living sentient being within a short range once. This ability has no effect on targets wearing breath masks or without respiratory systems."}]},{"name":"Gotal","plural":"Gotals","source":"fly-casual","baseCharacteristics":{"brawn":2,"agility":2,"intellect":2,"cunning":3,"willpower":2,"presence":1},"woundsThreshold":{"base":9,"characteristic":"brawn"},"strainThreshold":{"base":8,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Perception"],"specialAbilities":[{"name":"Energy Sensitivity","description":"The head cones of a Gotal are finely tuned sensory organs used to detect almost the entirety of the electromagnetic spectrum. Once per encounter as a maneuver, a Gotal may sense and current emotional states of all living things within short range of himself."}]},{"name":"Quarren","plural":"Quarren","source":"fly-casual","baseCharacteristics":{"brawn":2,"agility":2,"intellect":1,"cunning":2,"willpower":3,"presence":2},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":8,"characteristic":"willpower"},"startingExperience":95,"startingSkills":["Negotiation"],"specialAbilities":[{"name":"Amphibious","description":"Quarren can breathe underwater without penalty and never suffer movement penalties for traveling through water."},{"name":"Ink Spray","description":"Quarren can spit ink from a specialized sac within their gills that disperses in water, creating a brief murk. Once per counter, as an out-of-turn incidental, a Quarren may suffer 2 strain to add ■  to a combat check made by a character within short range (under water, it adds ■ ■ ■ to the combat check instead.)"}]},{"name":"Hutt","plural":"Hutts","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":3,"agility":1,"intellect":2,"cunning":2,"willpower":3,"presence":2},"woundsThreshold":{"base":13,"characteristic":"brawn"},"strainThreshold":{"base":11,"characteristic":"willpower"},"startingExperience":70,"startingSkills":[{"options":["Coercion","Discipline"],"choices":1}],"startingTalents":["Enduring","Nobody's Fool"],"specialAbilities":[{"name":"Ponderous","description":"A Hutt can never spend more than one maneuver moving per turn."}]},{"name":"Gank","plural":"Ganks","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":2,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":10,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":110,"startingSkills":[{"options":["Coercion","Vigilance"],"choices":1}],"specialAbilities":[{"name":"Cyborg","description":"All Ganks are cyborgs and each one often possesses several different cybernetic implants. A Gank beings play with up to two cybernetics that cost a total of up to 5,000 credits. If the character taks on additonal Obligation for credits at character creation, he may apply these extra funds to the 5,000 credit budgest to purchase cybernetics. Ganks have a cybernetic implant cap of 3 plus Brawn rating."}]},{"name":"Nikto - Red","plural":"Niktos","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":3,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"specialAbilities":[{"name":"Red Nikto","description":"When making skill checks, Red Niktos may remove ■ due to arid or hot environmental conditions."}],"startingSkills":["Resilience"]},{"name":"Nikto - Green","plural":"Niktos","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":3,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Coordination"],"specialAbilities":[{"name":"Green Nikto","description":"Green Niktos gain □ to Atheltics checks made to climb trees and other surfaces their claws can pierce."},{"name":"Claws","description":"When a Green Nikto makes Brawl checks to deal damage to an opponent, they deal +1 damage and have a Critical Rating of 3."}]},{"name":"Nikto - Mountain","plural":"Niktos","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":3,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Survival"],"startingTalents":["Natural Outdoorsman"],"specialAbilities":[]},{"name":"Nikto - Pale","plural":"Niktos","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":3,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Athletics"],"specialAbilities":[{"name":"Swimmer","description":"A Pale Nikto never suffers movement penalties for travelling through water and can hold their breath for a number of rounds = to twice their Brawn rating before beginning to drown."}]},{"name":"Nikto - Southern","plural":"Niktos","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":3,"agility":2,"intellect":2,"cunning":2,"willpower":2,"presence":1},"woundsThreshold":{"base":11,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingExperience":100,"startingSkills":["Athletics"],"specialAbilities":[{"name":"Perceptive","description":"Southern Niktos may add □ to Perception and Vigilance checks to detect sounds."}]},{"name":"Sakiyan","plural":"Sakiyans","source":"lords-of-nal-hutta","baseCharacteristics":{"brawn":2,"agility":2,"intellect":3,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"base":8,"characteristic":"brawn"},"strainThreshold":{"base":10,"characteristic":"willpower"},"startingSkills":[{"options":["Perception","Vigilance"],"choices":1}],"startingExperience":80,"startingTalents":["Expert Tracker"],"specialAbilities":[]},{"name":"Drall","plural":"Drall","source":"loads-of-nal-hutta","baseCharacteristics":{"brawn":1,"agility":1,"intellect":4,"cunning":2,"willpower":2,"presence":2},"woundsThreshold":{"characteristic":"brawn","base":8},"strainThreshold":{"characteristic":"willpower","base":12},"startingExperience":90,"startingSkills":["Knowledge - Education"],"specialAbilities":[{"name":"Drall","description":"Drall have a mind for problems and their solutions. In addition to using his skill or characteristic rating, a Drall adds □ to the dicepool when providing skilled assistance."}]}]`).map(parsed => {
    return {...new speciesModel(), ...parsed}
});

strainThresholdModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new strainThresholdModel(), ...parsed}
});

woundsThresholdModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new woundsThresholdModel(), ...parsed}
});

woundsOrStrainModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new woundsOrStrainModel(), ...parsed}
});

skillModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new skillModel(), ...parsed}
});

skillsModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new skillsModel(), ...parsed}
});

characterModel.values = JSON.parse(`[]`).map(parsed => {
    return {...new characterModel(), ...parsed}
});

