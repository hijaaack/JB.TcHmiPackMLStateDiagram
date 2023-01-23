/*
 * Generated 1/4/2023 10:17:05 AM
 * Copyright (C) 2023
 */
// @ts-nocheck
module TcHmi {
    export module Controls {
        export module TcHmiPackMLStateDiagram {          
            export class TcHmiPackMLStateDiagramControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                //HTML-Elements
                protected __elementTemplateRoot!: JQuery;
                protected __elementMainBackground!: JQuery;
                protected __elementOuterLayer!: JQuery;
                protected __elementInnerLayer!: JQuery;

                protected __elementArrowGroup!: JQuery;
                protected __elementStateWaitingGroup!: JQuery;
                protected __elementStateActingGroup!: JQuery;
                protected __elementStateExecuteGroup!: JQuery;
                protected __elementStateWaitingTextGroup!: JQuery;
                protected __elementStateActingTextGroup!: JQuery;
                protected __elementStateExecuteTextGroup!: JQuery;
                protected __elementStateGroups!: JQuery;

                protected __elementHeldGroup!: JQuery;
                protected __elementHoldingGroup!: JQuery;
                protected __elementUnholdingGroup!: JQuery;

                protected __elementSuspendGroup!: JQuery;
                protected __elementSuspendingGroup!: JQuery;
                protected __elementUnsuspendGroup!: JQuery;

                protected __elementCompleteGroup!: JQuery;
                protected __elementCompletingGroup!: JQuery;

                protected __elementAbortingGroup!: JQuery;
                protected __elementAbortedGroup!: JQuery;

                protected __elementStoppingGroup!: JQuery;
                protected __elementStoppedGroup!: JQuery;

                protected __elementExecuteGroup!: JQuery;
                protected __elementIdleGroup!: JQuery;
                protected __elementStartingGroup!: JQuery;
                protected __elementClearingGroup!: JQuery;
                protected __elementResettingGroup!: JQuery;

                protected __elementActiveState!: JQuery;

                protected __elementCommandTextGroup!: JQuery;
                protected __elementCommandTextBackgroundGroup!: JQuery;

                protected __elementStateCompleteTextGroup!: JQuery;
                protected __elementStateCompleteTextBackgroundGroup!: JQuery;

                //Colors
                protected __colorOuterLayer: TcHmi.SolidColor;
                protected __colorInnerLayer: TcHmi.SolidColor;
                protected __colorExecuteState: TcHmi.SolidColor;
                protected __colorWaitingState: TcHmi.SolidColor;
                protected __colorActingState: TcHmi.SolidColor;
                protected __colorExecuteStateText: TcHmi.SolidColor;
                protected __colorWaitingStateText: TcHmi.SolidColor;
                protected __colorActingStateText: TcHmi.SolidColor;
                protected __colorArrow: TcHmi.SolidColor;
                protected __colorActiveState: TcHmi.SolidColor;
                protected __colorCommandText: TcHmi.SolidColor;
                protected __colorCommandTextBackground: TcHmi.SolidColor;
                protected __colorStateCompleteText: TcHmi.SolidColor;
                protected __colorStateCompleteTextBackground: TcHmi.SolidColor;

                //Vars
                protected __stateCurrent: Number | null;
                protected __unitModeCurrent: Number | null;
                protected __activeStateAnimation: Boolean | null;
                protected __hideStateCompleteTexts: Boolean | null;
                protected __hideCommandTexts: Boolean | null;
                protected __unitModeConfig: Object | null;

                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiPackMLStateDiagram_TcHmiPackMLStateDiagramControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Fetch Layers
                    this.__elementMainBackground = this.__elementTemplateRoot.find('.packml-base-background');
                    this.__elementOuterLayer = this.__elementMainBackground.find('.packml-outer-layer');
                    this.__elementInnerLayer = this.__elementMainBackground.find('.packml-inner-layer');

                    // Fetch States
                    this.__elementStateWaitingGroup = this.__elementMainBackground.find('.state-waiting');
                    this.__elementStateActingGroup = this.__elementMainBackground.find('.state-acting');
                    this.__elementStateExecuteGroup = this.__elementMainBackground.find('.state-execute');

                    // Fetch State group
                    this.__elementStateGroups = this.__elementMainBackground.find('.packml-state-groups');

                    // Fetch State and Arrow groups
                    this.__elementHeldGroup = this.__elementMainBackground.find('.packml-state-held');
                    this.__elementHoldingGroup = this.__elementMainBackground.find('.packml-state-holding');
                    this.__elementUnholdingGroup = this.__elementMainBackground.find('.packml-state-unholding');

                    this.__elementSuspendGroup = this.__elementMainBackground.find('.packml-state-suspended');
                    this.__elementSuspendingGroup = this.__elementMainBackground.find('.packml-state-suspending');
                    this.__elementUnsuspendGroup = this.__elementMainBackground.find('.packml-state-unsuspending');

                    this.__elementCompleteGroup = this.__elementMainBackground.find('.packml-state-complete');
                    this.__elementCompletingGroup = this.__elementMainBackground.find('.packml-state-completing');

                    this.__elementResettingGroup = this.__elementMainBackground.find('.packml-state-groups');

                    this.__elementAbortingGroup = this.__elementMainBackground.find('.packml-state-groups');
                    this.__elementAbortedGroup = this.__elementMainBackground.find('.packml-state-groups');

                    this.__elementStoppingGroup = this.__elementMainBackground.find('.packml-state-groups');
                    this.__elementStoppedGroup = this.__elementMainBackground.find('.packml-state-groups');

                    this.__elementExecuteGroup = this.__elementMainBackground.find('.packml-state-groups');
                    this.__elementIdleGroup = this.__elementMainBackground.find('.packml-state-groups');
                    this.__elementStartingGroup = this.__elementMainBackground.find('.packml-state-groups');
                    this.__elementClearingGroup = this.__elementMainBackground.find('.packml-state-groups');

                    // Fetch Texts
                    this.__elementStateWaitingTextGroup = this.__elementMainBackground.find('.state-text-waiting');
                    this.__elementStateActingTextGroup = this.__elementMainBackground.find('.state-text-acting');
                    this.__elementStateExecuteTextGroup = this.__elementMainBackground.find('.state-text-execute');

                    // Fetch Arrows
                    this.__elementArrowGroup = this.__elementMainBackground.find('.state-arrow-transition');

                    // Fetch Command groups
                    this.__elementCommandTextGroup = this.__elementMainBackground.find('.packml-text-cmd');
                    this.__elementCommandTextBackgroundGroup = this.__elementMainBackground.find('.packml-rect-cmd');

                    // Fetch StateComplete groups
                    this.__elementStateCompleteTextGroup = this.__elementMainBackground.find('.packml-text-sc');
                    this.__elementStateCompleteTextBackgroundGroup = this.__elementMainBackground.find('.packml-rect-sc');

                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }

                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                //Color Properties
                getOuterLayerColor(): TcHmi.SolidColor {
                    return this.__colorOuterLayer;
                }

                public setOuterLayerColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorOuterLayer = this.getAttributeDefaultValueInternal("OuterLayerColor");
                    } else {
                        // @ts-ignore
                        this.__colorOuterLayer = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getOuterLayerColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementOuterLayer).css("fill", this.__colorOuterLayer);
                }

                getInnerLayerColor(): TcHmi.SolidColor {
                    return this.__colorInnerLayer;
                }

                public setInnerLayerColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorInnerLayer = this.getAttributeDefaultValueInternal("InnerLayerColor");
                    } else {
                        // @ts-ignore
                        this.__colorInnerLayer = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getInnerLayerColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementInnerLayer).css("fill", this.__colorInnerLayer);
                }

                getStateExecuteColor(): TcHmi.SolidColor {
                    return this.__colorExecuteState;
                }

                public setStateExecuteColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorExecuteState = this.getAttributeDefaultValueInternal("StateExecuteColor");
                    } else {
                        // @ts-ignore
                        this.__colorExecuteState = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateExecuteColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateExecuteGroup).css("fill", this.__colorExecuteState);
                }

                getStateWaitingColor(): TcHmi.SolidColor {
                    return this.__colorWaitingState;
                }

                public setStateWaitingColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorWaitingState = this.getAttributeDefaultValueInternal("StateWaitingColor");
                    } else {
                        // @ts-ignore
                        this.__colorWaitingState = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateWaitingColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateWaitingGroup).css("fill", this.__colorWaitingState);
                }

                getStateActingColor(): TcHmi.SolidColor {
                    return this.__colorActingState;
                }

                public setStateActingColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorActingState = this.getAttributeDefaultValueInternal("StateActingColor");
                    } else {
                        // @ts-ignore
                        this.__colorActingState = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateActingColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateActingGroup).css("fill", this.__colorActingState);
                }

                getStateExecuteTextColor(): TcHmi.SolidColor {
                    return this.__colorExecuteStateText;
                }

                public setStateExecuteTextColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorExecuteStateText = this.getAttributeDefaultValueInternal("StateExecuteTextColor");
                    } else {
                        // @ts-ignore
                        this.__colorExecuteStateText = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateExecuteTextColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateExecuteTextGroup).css("fill", this.__colorExecuteStateText);
                }

                getStateWaitingTextColor(): TcHmi.SolidColor {
                    return this.__colorWaitingStateText;
                }

                public setStateWaitingTextColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorWaitingStateText = this.getAttributeDefaultValueInternal("StateWaitingTextColor");
                    } else {
                        // @ts-ignore
                        this.__colorWaitingStateText = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateWaitingTextColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateWaitingTextGroup).css("fill", this.__colorWaitingStateText);
                }

                getStateActingTextColor(): TcHmi.SolidColor {
                    return this.__colorActingStateText;
                }

                public setStateActingTextColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorActingStateText = this.getAttributeDefaultValueInternal("StateActingTextColor");
                    } else {
                        // @ts-ignore
                        this.__colorActingStateText = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateActingTextColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateActingTextGroup).css("fill", this.__colorActingStateText);
                }

                getArrowColor(): TcHmi.SolidColor {
                    return this.__colorArrow;
                }

                public setArrowColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorArrow = this.getAttributeDefaultValueInternal("ArrowColor");
                    } else {
                        // @ts-ignore
                        this.__colorArrow = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getArrowColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementArrowGroup).css("fill", this.__colorArrow);
                    // @ts-ignore
                    $(this.__elementArrowGroup).css("stroke", this.__colorArrow);
                }

                getActiveBorderColor(): TcHmi.SolidColor {
                    return this.__colorActiveState;
                }

                public setActiveBorderColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorActiveState = this.getAttributeDefaultValueInternal("ActiveBorderColor");
                    } else {
                        // @ts-ignore
                        this.__colorActiveState = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getActiveBorderColor"]);

                    //Update color for active state
                    this.processStateCurrent();
                }

                getCommandTextColor(): TcHmi.SolidColor {
                    return this.__colorCommandText;
                }

                public setCommandTextColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorCommandText = this.getAttributeDefaultValueInternal("CommandTextColor");
                    } else {
                        // @ts-ignore
                        this.__colorCommandText = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getCommandTextColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementCommandTextGroup).css("fill", this.__colorCommandText);
                }

                getCommandTextBackgroundColor(): TcHmi.SolidColor {
                    return this.__colorCommandTextBackground;
                }

                public setCommandTextBackgroundColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorCommandTextBackground = this.getAttributeDefaultValueInternal("CommandTextBackgroundColor");
                    } else {
                        // @ts-ignore
                        this.__colorCommandTextBackground = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getCommandTextBackgroundColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementCommandTextBackgroundGroup).css("fill", this.__colorCommandTextBackground);
                }

                getStateCompleteTextColor(): TcHmi.SolidColor {
                    return this.__colorStateCompleteText;
                }

                public setStateCompleteTextColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorStateCompleteText = this.getAttributeDefaultValueInternal("StateCompleteTextColor");
                    } else {
                        // @ts-ignore
                        this.__colorStateCompleteText = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateCompleteTextColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateCompleteTextGroup).css("fill", this.__colorStateCompleteText);
                }

                getStateCompleteTextBackgroundColor(): TcHmi.SolidColor {
                    return this.__colorStateCompleteTextBackground;
                }

                public setStateCompleteTextBackgroundColor(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorStateCompleteTextBackground = this.getAttributeDefaultValueInternal("StateCompleteTextBackgroundColor");
                    } else {
                        // @ts-ignore
                        this.__colorStateCompleteTextBackground = convertedValue.color;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateCompleteTextBackgroundColor"]);

                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateCompleteTextBackgroundGroup).css("fill", this.__colorStateCompleteTextBackground);
                }

                //Animation 
                getActiveStateAnimation(): Boolean | null {
                    return this.__activeStateAnimation;
                }

                public setActiveStateAnimation(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__activeStateAnimation = this.getAttributeDefaultValueInternal("ActiveStateAnimation");
                    } else {
                        // @ts-ignore
                        this.__activeStateAnimation = convertedValue;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getActiveStateAnimation"]);

                    //Set animation if any state is active
                    this.processStateCurrent();
                }

                // Hide Labels
                getHideStateCompleteTexts(): Boolean | null {
                    return this.__hideStateCompleteTexts;
                }

                public setHideStateCompleteTexts(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__hideStateCompleteTexts = this.getAttributeDefaultValueInternal("HideStateCompleteTexts");
                    } else {
                        // @ts-ignore
                        this.__hideStateCompleteTexts = convertedValue;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getHideStateCompleteTexts"]);

                    //Set visibility style
                    this.processHideStateCompleteTexts();
                    this.processUnitModeCurrent();
                }

                getHideCommandTexts(): Boolean | null {
                    return this.__hideCommandTexts;
                }

                public setHideCommandTexts(valueNew: TcHmi.SolidColor) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__hideCommandTexts = this.getAttributeDefaultValueInternal("HideCommandTexts");
                    } else {
                        // @ts-ignore
                        this.__hideCommandTexts = convertedValue;
                    }

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getHideCommandTexts"]);

                    //Set visibility style
                    this.processHideCommandTexts();
                    this.processUnitModeCurrent();
                }

                //PackML Properties

                getUnitModeConfiguration(): Object | null {
                    return this.__unitModeConfig;
                }

                public setUnitModeConfiguration(valueNew: Object | null) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);

                    if (convertedValue == null) return;

                    this.__unitModeConfig = convertedValue;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getUnitModeConfiguration"]);

                    console.log(convertedValue);

                    //Update visibility if data was changed
                    this.processUnitModeCurrent();
                }

                getUnitModeCurrent(): Number | null {
                    return this.__unitModeCurrent;
                }

                public setUnitModeCurrent(valueNew: Number | null) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__unitModeCurrent = this.getAttributeDefaultValueInternal("UnitModeCurrent");
                    } else {
                        this.__unitModeCurrent = convertedValue;
                    }

                    if (this.__unitModeCurrent == null) return;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getUnitModeCurrent"]);

                    this.processUnitModeCurrent();
                }

                getStateCurrent(): Number | null {
                    return this.__stateCurrent;
                }

                public setStateCurrent(valueNew: Number | null) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__stateCurrent = this.getAttributeDefaultValueInternal("StateCurrent");
                    } else {
                        this.__stateCurrent = convertedValue;
                    }

                    if (this.__stateCurrent == null) return;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateCurrent"]);

                    this.processStateCurrent();
                }

                //Methods
                protected processHideCommandTexts() {
                    if (this.__hideCommandTexts) {
                        $(this.__elementCommandTextGroup).css("visibility", "hidden");
                        $(this.__elementCommandTextBackgroundGroup).css("visibility", "hidden");
                    } else {
                        $(this.__elementCommandTextGroup).css("visibility", "visible");
                        $(this.__elementCommandTextBackgroundGroup).css("visibility", "visible");
                    }
                }

                protected processHideStateCompleteTexts() {
                    if (this.__hideStateCompleteTexts) {
                        $(this.__elementStateCompleteTextGroup).css("visibility", "hidden");
                        $(this.__elementStateCompleteTextBackgroundGroup).css("visibility", "hidden");
                    } else {
                        $(this.__elementStateCompleteTextGroup).css("visibility", "visible");
                        $(this.__elementStateCompleteTextBackgroundGroup).css("visibility", "visible");
                    }
                }

                protected processUnitModeCurrent() {
                    //Set Visibility for the active mode

                    if (this.__unitModeConfig != null) {
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[1] ? $(this.__elementClearingGroup).css("visibility", "hidden") : $(this.__elementClearingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[2] ? $(this.__elementStoppedGroup).css("visibility", "hidden") : $(this.__elementStoppedGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[3] ? $(this.__elementStartingGroup).css("visibility", "hidden") : $(this.__elementStartingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[4] ? $(this.__elementIdleGroup).css("visibility", "hidden") : $(this.__elementIdleGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[5] ? $(this.__elementSuspendGroup).css("visibility", "hidden") : $(this.__elementSuspendGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[6] ? $(this.__elementExecuteGroup).css("visibility", "hidden") : $(this.__elementExecuteGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[7] ? $(this.__elementStoppingGroup).css("visibility", "hidden") : $(this.__elementStoppingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[8] ? $(this.__elementAbortingGroup).css("visibility", "hidden") : $(this.__elementAbortingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[9] ? $(this.__elementAbortedGroup).css("visibility", "hidden") : $(this.__elementAbortedGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[10] ? $(this.__elementHoldingGroup).css("visibility", "hidden") : $(this.__elementHoldingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[11] ? $(this.__elementHeldGroup).css("visibility", "hidden") : $(this.__elementHeldGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[12] ? $(this.__elementUnholdingGroup).css("visibility", "hidden") : $(this.__elementUnholdingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[13] ? $(this.__elementSuspendingGroup).css("visibility", "hidden") : $(this.__elementSuspendingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[14] ? $(this.__elementUnsuspendGroup).css("visibility", "hidden") : $(this.__elementUnsuspendGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[15] ? $(this.__elementResettingGroup).css("visibility", "hidden") : $(this.__elementResettingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[16] ? $(this.__elementCompletingGroup).css("visibility", "hidden") : $(this.__elementCompletingGroup).css("visibility", "visible");
                        this.__unitModeConfig[this.__unitModeCurrent].aStateDisabled[17] ? $(this.__elementCompleteGroup).css("visibility", "hidden") : $(this.__elementCompleteGroup).css("visibility", "visible");
                    } else {
                        //If unitModeConfig is not used, use "default" settings
                        switch (this.__unitModeCurrent) {

                            case 1: //PRODUCTION
                                //Everything Visible
                                $(this.__elementHeldGroup).css("visibility", "visible");
                                $(this.__elementHoldingGroup).css("visibility", "visible");
                                $(this.__elementUnholdingGroup).css("visibility", "visible");

                                $(this.__elementSuspendGroup).css("visibility", "visible");
                                $(this.__elementSuspendingGroup).css("visibility", "visible");
                                $(this.__elementUnsuspendGroup).css("visibility", "visible");

                                $(this.__elementCompleteGroup).css("visibility", "visible");
                                $(this.__elementCompletingGroup).css("visibility", "visible");
                                break;

                            case 2: //MAINTENANCE
                                //Show Held-states
                                $(this.__elementHeldGroup).css("visibility", "visible");
                                $(this.__elementHoldingGroup).css("visibility", "visible");
                                $(this.__elementUnholdingGroup).css("visibility", "visible");

                                //Hide Suspend and Complete-states
                                $(this.__elementSuspendGroup).css("visibility", "hidden");
                                $(this.__elementSuspendingGroup).css("visibility", "hidden");
                                $(this.__elementUnsuspendGroup).css("visibility", "hidden");

                                $(this.__elementCompleteGroup).css("visibility", "hidden");
                                $(this.__elementCompletingGroup).css("visibility", "hidden");
                                break;

                            case 3: //MANUAL
                                //Hide Held, Suspend and Complete-states
                                $(this.__elementHeldGroup).css("visibility", "hidden");
                                $(this.__elementHoldingGroup).css("visibility", "hidden");
                                $(this.__elementUnholdingGroup).css("visibility", "hidden");

                                $(this.__elementSuspendGroup).css("visibility", "hidden");
                                $(this.__elementSuspendingGroup).css("visibility", "hidden");
                                $(this.__elementUnsuspendGroup).css("visibility", "hidden");

                                $(this.__elementCompleteGroup).css("visibility", "hidden");
                                $(this.__elementCompletingGroup).css("visibility", "hidden");
                                break;

                            default:
                                $(this.__elementHeldGroup).css("visibility", "visible");
                                $(this.__elementHoldingGroup).css("visibility", "visible");
                                $(this.__elementUnholdingGroup).css("visibility", "visible");

                                $(this.__elementSuspendGroup).css("visibility", "visible");
                                $(this.__elementSuspendingGroup).css("visibility", "visible");
                                $(this.__elementUnsuspendGroup).css("visibility", "visible");

                                $(this.__elementCompleteGroup).css("visibility", "visible");
                                $(this.__elementCompletingGroup).css("visibility", "visible");
                                break;
                        }
                    }
                }

                protected processStateCurrent() {

                    //Remove active state classes for previous state 
                    $(this.__elementActiveState).removeClass("active-state");
                    $(this.__elementActiveState).removeClass("active-state-animation");
                    // @ts-ignore
                    $(this.__elementActiveState).css("stroke", ""); //remove property
                    //set default stroke color for previous state
                    $(this.__elementActiveState).addClass("normal-state");

                    //Set border class for the active state
                    switch (this.__stateCurrent) {

                        case 1: //CLEARING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-clearing');
                            break;
                        case 2: //STOPPED
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-stopped');
                            break;
                        case 3: //STARTING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-starting');
                            break;
                        case 4: //IDLE
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-idle');
                            break;
                        case 5: //SUSPENDED
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-suspended');
                            break;
                        case 6: //EXECUTE
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-execute');
                            break;
                        case 7: //STOPPING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-stopping');
                            break;
                        case 8: //ABORTING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-aborting');
                            break;
                        case 9: //ABORTED
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-aborted');
                            break;
                        case 10: //HOLDING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-holding');
                            break;
                        case 11: //HELD
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-held');
                            break;
                        case 12: //UNHOLDING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-unholding');
                            break;
                        case 13: //SUSPENDING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-suspending');
                            break;
                        case 14: //UNSUSPENDING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-unsuspending');
                            break;
                        case 15: //RESETTING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-resetting');
                            break;
                        case 16: //COMPLETING
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-completing');
                            break;
                        case 17: //COMPLETE
                            this.__elementActiveState = this.__elementStateGroups.find('.packml-state-complete');
                            break;
                    }

                    //Set Border
                    $(this.__elementActiveState).removeClass("normal-state");
                    $(this.__elementActiveState).addClass('active-state');

                    //Set animation if used
                    if (this.__activeStateAnimation) {
                        $(this.__elementActiveState).addClass('active-state-animation');
                    }

                    //Set Stroke Color
                    // @ts-ignore
                    $(this.__elementActiveState).css("stroke", this.__colorActiveState);

                }

            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiPackMLStateDiagramControl', 'TcHmi.Controls.TcHmiPackMLStateDiagram', TcHmi.Controls.TcHmiPackMLStateDiagram.TcHmiPackMLStateDiagramControl);