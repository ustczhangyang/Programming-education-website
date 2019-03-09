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
			"type": "movepx",
			"lastDummyAlign0": "RIGHT",
			"message0": "%1 %2 %3 像素",
			"args0": [
			{
			"type": "field_dropdown",
			"name": "moveDirection",
			"options": [
			[
				"向前移动",
				"  moveForward"
			],
			[
				"向后移动",
				"moveBackwards"
			]
			]
			},
			{
			"type": "input_dummy"
			},
			{
			"type": "field_input",
			"name": "pixelNumber",
			"text": "100"
			}
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 230,
			"tooltip": "",
			"helpUrl": ""
		},
			{
			"type": "movepx2",
			"message0": "%1 %2 %3 像素",
			"args0": [
				{
					"type": "field_dropdown",
					"name": "moveDirection",
					"options": [
						[
							"向前移动",
							"  moveForward"
						],
						[
							"向后移动",
							"moveBackwards"
						]
					]
				},
				{
					"type": "input_dummy"
				},
				{
					"type": "input_value",
					"name": "pixelNumber"
				}
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 230,
			"tooltip": "",
			"helpUrl": ""
		},
	
		{
			"type": "turn",
			"message0": "%1 %2 %3 度",
			"args0": [
			{
				"type": "field_dropdown",
				"name": "direction",
				"options": [
				[
					"向左转",
					"turnLeft"
				],
				[
					"向右转",
					"turnRight"
				]
				]
			},
			{
				"type": "input_dummy"
			},
			{
				"type": "field_input",
				"name": "degree",
				"text": "90"
			}
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 230,
			"tooltip": "",
			"helpUrl": ""
		},
		{
			  "type": "turn2",
			  "message0": "%1 %2 %3 度",
			  "args0": [
				{
				  "type": "field_dropdown",
				  "name": "direction",
				  "options": [
					[
					  "向左转",
					  "turnLeft"
					],
					[
					  "向右转",
					  "turnRight"
					]
				  ]
				},
				{
				  "type": "input_dummy"
				},
				{
				  "type": "input_value",
				  "name": "degree"
				  
				}
			  ],
			  "inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": 230,
			  "tooltip": "",
			  "helpUrl": ""
			},

{
  "type": "random_colors",
  "message0": "随机颜色",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_colour",
  "message0": "设置颜色 %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "colour",
      "check": "colour"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "width",
  "message0": "width",
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_width",
  "message0": "设置width至 %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "set_sides",
  "message0": "设置sides至 %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sides",
  "message0": "sides",
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
	 ]
);
Blockly.JavaScript['start_block'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};
Blockly.JavaScript['movepx'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
		var move_direction=block.getFieldValue('moveDirection');
		var pixel_number=block.getFieldValue('pixelNumber');
    var code ="movepx(\""+move_direction+"\","+pixel_number+");\n";
		//var code='movepx("move_direction",pixel_number);\n';
    return code;
};
Blockly.JavaScript['movepx2'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
		var move_direction=block.getFieldValue('moveDirection');
		var pixel_number=block.getFieldValue('pixelNumber');
    var code ="movepx2(\""+move_direction+"\","+pixel_number+");\n";
		//var code='movepx("move_direction",pixel_number);\n';
    return code;
};
Blockly.JavaScript['turn'] = function (block) {
    var dropdown_turndire = block.getFieldValue('direction');
    var dropdown_turnangle = block.getFieldValue('degree');
    // TODO: Assemble JavaScript into code variable.
    var code = "turn(\"" + dropdown_turndire + "\" ," + dropdown_turnangle + ");\n";
    return code;
};
Blockly.JavaScript['turn2'] = function (block) {
    var dropdown_turndire = block.getFieldValue('direction');
    var dropdown_turnangle = block.getFieldValue('degree');
    // TODO: Assemble JavaScript into code variable.
    var code = "turn2(\"" + dropdown_turndire + "\" ," + dropdown_turnangle + ");\n";
    return code;
};
