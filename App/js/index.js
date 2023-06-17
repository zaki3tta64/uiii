// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout9")
                .setLeft("15.238095238095237em")
                .setTop("4.571428571428571em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button21")
                .setLeft("16em")
                .setTop("35.80952380952381em")
                .setCaption("Button")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input29")
                .setLeft("20.571428571428573em")
                .setTop("35.80952380952381em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel37")
                .setDock("width")
                .setWidth("auto")
                .setHeight("18em")
                .setPosition("relative")
                .setCaption("Relative Panel")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});