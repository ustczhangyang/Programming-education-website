Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "start_block",
            "message0": "当运行时",
            "nextStatement": null,
            "colour": 0,
            "tooltip": "",
            "helpUrl": ""
        },
        {
            "type": "turnleft",
            "message0": "向左转",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },
        {
            "type": "turnright",
            "message0": "向右转",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },
        {
            "type": "move",
            "message0": "向前移动",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },
        {
            "type": "turn_angle",
            "message0": "%1 %2 度",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "turndire",
                    "options": [
                        [
                            "向右转",
                            "right"
                        ],
                        [
                            "向左转",
                            "left"
                        ]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "turnangle",
                    "options": [
                        [
                            "45",
                            "45"
                        ],
                        [
                            "60",
                            "60"
                        ],
                        [
                            "90",
                            "90"
                        ]
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },
        {
            "type": "move_step",
            "message0": "%1 %2 像素",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "move",
                    "options": [
                        [
                            "向前移动",
                            "moveforward"
                        ],
                        [
                            "向后移动",
                            "movebackward"
                        ]
                    ]
                },
                {
                    "type": "field_number",
                    "name": "step",
                    "value": 100,
                    "precision": 100
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        }]
);
Blockly.JavaScript['start_block'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};
Blockly.JavaScript['turnleft'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'turnleft();\n';
    return code;
};
Blockly.JavaScript['turnright'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'turnright();\n';
    return code;
};
Blockly.JavaScript['move'] = function (block) {
    // TODO: Assemble JavaScript into code variable.

    // TODO: Assemble JavaScript into code variable.
    var code = 'move();\n';
    return code;
};

//人物转向和角度块
//var code = "turnDireAngle(\"" + turn_dire + "\" ,\"" + turn_angle + "\");";
Blockly.JavaScript['turn_angle'] = function(block) {
    var dropdown_turndire = block.getFieldValue('turndire');
    var dropdown_turnangle = block.getFieldValue('turnangle');
    // TODO: Assemble JavaScript into code variable.
    var code = "turnDireAngle(\"" + dropdown_turndire + "\" ,\"" + dropdown_turnangle + "\");";
    return code;
};

//向前或向后移动
Blockly.JavaScript['move_step'] = function(block) {
    var dropdown_move = block.getFieldValue('move');
    var number_step = block.getFieldValue('step');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "moveStep(\""+dropdown_move+"\","+number_step+");";
    return code;
};