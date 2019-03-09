/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : true, //垃圾桶
	horizontalLayout : false, //水平布局
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, //工具栏在左边显示
	scrollbars : true,//滚动条 
	sounds : true, 
	oneBasedIndex : true
};

/* Inject your workspace */ 
var workspace = Blockly.inject("blocklyDiv", options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
