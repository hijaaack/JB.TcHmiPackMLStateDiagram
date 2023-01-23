/*
 * Generated 1/4/2023 10:17:05 AM
 * Copyright (C) 2023
 */
// @ts-nocheck
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let TcHmiPackMLStateDiagram;
        (function (TcHmiPackMLStateDiagram) {
            class TcHmiPackMLStateDiagramControl extends TcHmi.Controls.System.TcHmiControl {
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
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
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
                __init() {
                    super.__init();
                }
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
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
                destroy() {
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
                getOuterLayerColor() {
                    return this.__colorOuterLayer;
                }
                setOuterLayerColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorOuterLayer = this.getAttributeDefaultValueInternal("OuterLayerColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorOuterLayer = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getOuterLayerColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementOuterLayer).css("fill", this.__colorOuterLayer);
                }
                getInnerLayerColor() {
                    return this.__colorInnerLayer;
                }
                setInnerLayerColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorInnerLayer = this.getAttributeDefaultValueInternal("InnerLayerColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorInnerLayer = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getInnerLayerColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementInnerLayer).css("fill", this.__colorInnerLayer);
                }
                getStateExecuteColor() {
                    return this.__colorExecuteState;
                }
                setStateExecuteColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorExecuteState = this.getAttributeDefaultValueInternal("StateExecuteColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorExecuteState = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateExecuteColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateExecuteGroup).css("fill", this.__colorExecuteState);
                }
                getStateWaitingColor() {
                    return this.__colorWaitingState;
                }
                setStateWaitingColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorWaitingState = this.getAttributeDefaultValueInternal("StateWaitingColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorWaitingState = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateWaitingColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateWaitingGroup).css("fill", this.__colorWaitingState);
                }
                getStateActingColor() {
                    return this.__colorActingState;
                }
                setStateActingColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorActingState = this.getAttributeDefaultValueInternal("StateActingColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorActingState = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateActingColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateActingGroup).css("fill", this.__colorActingState);
                }
                getStateExecuteTextColor() {
                    return this.__colorExecuteStateText;
                }
                setStateExecuteTextColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorExecuteStateText = this.getAttributeDefaultValueInternal("StateExecuteTextColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorExecuteStateText = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateExecuteTextColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateExecuteTextGroup).css("fill", this.__colorExecuteStateText);
                }
                getStateWaitingTextColor() {
                    return this.__colorWaitingStateText;
                }
                setStateWaitingTextColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorWaitingStateText = this.getAttributeDefaultValueInternal("StateWaitingTextColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorWaitingStateText = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateWaitingTextColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateWaitingTextGroup).css("fill", this.__colorWaitingStateText);
                }
                getStateActingTextColor() {
                    return this.__colorActingStateText;
                }
                setStateActingTextColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorActingStateText = this.getAttributeDefaultValueInternal("StateActingTextColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorActingStateText = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateActingTextColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateActingTextGroup).css("fill", this.__colorActingStateText);
                }
                getArrowColor() {
                    return this.__colorArrow;
                }
                setArrowColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorArrow = this.getAttributeDefaultValueInternal("ArrowColor");
                    }
                    else {
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
                getActiveBorderColor() {
                    return this.__colorActiveState;
                }
                setActiveBorderColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorActiveState = this.getAttributeDefaultValueInternal("ActiveBorderColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorActiveState = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getActiveBorderColor"]);
                    //Update color for active state
                    this.processStateCurrent();
                }
                getCommandTextColor() {
                    return this.__colorCommandText;
                }
                setCommandTextColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorCommandText = this.getAttributeDefaultValueInternal("CommandTextColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorCommandText = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getCommandTextColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementCommandTextGroup).css("fill", this.__colorCommandText);
                }
                getCommandTextBackgroundColor() {
                    return this.__colorCommandTextBackground;
                }
                setCommandTextBackgroundColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorCommandTextBackground = this.getAttributeDefaultValueInternal("CommandTextBackgroundColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorCommandTextBackground = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getCommandTextBackgroundColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementCommandTextBackgroundGroup).css("fill", this.__colorCommandTextBackground);
                }
                getStateCompleteTextColor() {
                    return this.__colorStateCompleteText;
                }
                setStateCompleteTextColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorStateCompleteText = this.getAttributeDefaultValueInternal("StateCompleteTextColor");
                    }
                    else {
                        // @ts-ignore
                        this.__colorStateCompleteText = convertedValue.color;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateCompleteTextColor"]);
                    //Process Color
                    // @ts-ignore
                    $(this.__elementStateCompleteTextGroup).css("fill", this.__colorStateCompleteText);
                }
                getStateCompleteTextBackgroundColor() {
                    return this.__colorStateCompleteTextBackground;
                }
                setStateCompleteTextBackgroundColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        // @ts-ignore
                        this.__colorStateCompleteTextBackground = this.getAttributeDefaultValueInternal("StateCompleteTextBackgroundColor");
                    }
                    else {
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
                getActiveStateAnimation() {
                    return this.__activeStateAnimation;
                }
                setActiveStateAnimation(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__activeStateAnimation = this.getAttributeDefaultValueInternal("ActiveStateAnimation");
                    }
                    else {
                        // @ts-ignore
                        this.__activeStateAnimation = convertedValue;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getActiveStateAnimation"]);
                    //Set animation if any state is active
                    this.processStateCurrent();
                }
                // Hide Labels
                getHideStateCompleteTexts() {
                    return this.__hideStateCompleteTexts;
                }
                setHideStateCompleteTexts(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__hideStateCompleteTexts = this.getAttributeDefaultValueInternal("HideStateCompleteTexts");
                    }
                    else {
                        // @ts-ignore
                        this.__hideStateCompleteTexts = convertedValue;
                    }
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getHideStateCompleteTexts"]);
                    //Set visibility style
                    this.processHideStateCompleteTexts();
                    this.processUnitModeCurrent();
                }
                getHideCommandTexts() {
                    return this.__hideCommandTexts;
                }
                setHideCommandTexts(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__hideCommandTexts = this.getAttributeDefaultValueInternal("HideCommandTexts");
                    }
                    else {
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
                getUnitModeConfiguration() {
                    return this.__unitModeConfig;
                }
                setUnitModeConfiguration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue == null)
                        return;
                    this.__unitModeConfig = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getUnitModeConfiguration"]);
                    console.log(convertedValue);
                    //Update visibility if data was changed
                    this.processUnitModeCurrent();
                }
                getUnitModeCurrent() {
                    return this.__unitModeCurrent;
                }
                setUnitModeCurrent(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__unitModeCurrent = this.getAttributeDefaultValueInternal("UnitModeCurrent");
                    }
                    else {
                        this.__unitModeCurrent = convertedValue;
                    }
                    if (this.__unitModeCurrent == null)
                        return;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getUnitModeCurrent"]);
                    this.processUnitModeCurrent();
                }
                getStateCurrent() {
                    return this.__stateCurrent;
                }
                setStateCurrent(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue == null) {
                        this.__stateCurrent = this.getAttributeDefaultValueInternal("StateCurrent");
                    }
                    else {
                        this.__stateCurrent = convertedValue;
                    }
                    if (this.__stateCurrent == null)
                        return;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getStateCurrent"]);
                    this.processStateCurrent();
                }
                //Methods
                processHideCommandTexts() {
                    if (this.__hideCommandTexts) {
                        $(this.__elementCommandTextGroup).css("visibility", "hidden");
                        $(this.__elementCommandTextBackgroundGroup).css("visibility", "hidden");
                    }
                    else {
                        $(this.__elementCommandTextGroup).css("visibility", "visible");
                        $(this.__elementCommandTextBackgroundGroup).css("visibility", "visible");
                    }
                }
                processHideStateCompleteTexts() {
                    if (this.__hideStateCompleteTexts) {
                        $(this.__elementStateCompleteTextGroup).css("visibility", "hidden");
                        $(this.__elementStateCompleteTextBackgroundGroup).css("visibility", "hidden");
                    }
                    else {
                        $(this.__elementStateCompleteTextGroup).css("visibility", "visible");
                        $(this.__elementStateCompleteTextBackgroundGroup).css("visibility", "visible");
                    }
                }
                processUnitModeCurrent() {
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
                    }
                    else {
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
                processStateCurrent() {
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
            TcHmiPackMLStateDiagram.TcHmiPackMLStateDiagramControl = TcHmiPackMLStateDiagramControl;
        })(TcHmiPackMLStateDiagram = Controls.TcHmiPackMLStateDiagram || (Controls.TcHmiPackMLStateDiagram = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiPackMLStateDiagramControl', 'TcHmi.Controls.TcHmiPackMLStateDiagram', TcHmi.Controls.TcHmiPackMLStateDiagram.TcHmiPackMLStateDiagramControl);
//# sourceMappingURL=TcHmiPackMLStateDiagramControl.js.map