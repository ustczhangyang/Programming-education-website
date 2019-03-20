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
            "type": "turn_dire_angle",
            "message0": "%1 %2 度 %3",
            "previousStatement": null,
            "nextStatement": null,
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "转向",
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
                    "name": "角度",
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
                },
                {
                    "type": "input_value",
                    "name": "enter",
                    "check": "String"
                }
            ],
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },
          
          {
            "type": "zrg_saysomething",
            "message0": "某人 %1 %2 说 %3 %4 ，持续时间为 %5 %6",
            "args0": [
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "someone"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "something"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "time",
                "check": "Number"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          },

          {
            "type": "zrg_someonemove",
            "message0": "某人 %1 向 %2 %3 %4 移动 %5 像素",
            "args0": [
              {
                "type": "input_value",
                "name": "somenoe"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "field_dropdown",
                "name": "direction",
                "options": [
                  [
                    "右",
                    "right"
                  ],
                  [
                    "左",
                    "left"
                  ],
                  [
                    "上",
                    "top"
                  ],
                  [
                    "下",
                    "down"
                  ]
                ]
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "distance",
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
            "type": "zrg_wait_then_do",
            "message0": "等待 %1 秒，然后 %2 %3",
            "args0": [
              {
                "type": "input_value",
                "name": "time"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_statement",
                "name": "codes"
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
            "type": "zrg_wait",
            "message0": "等待 %1 秒",
            "args0": [
              {
                "type": "input_value",
                "name": "times"
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
            "type": "zrg_disappear",
            "message0": "让演员 %1 %2 ",
            "args0": [
              {
                "type": "input_value",
                "name": "actorname"
              },
              {
                "type": "field_dropdown",
                "name": "dropdown_name",
                "options": [
                  [
                    "什么也不做",
                    "-1"
                  ],
                  [
                    "消失",
                    "0"
                  ],
                  [
                    "出现",
                    "1"
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
            "type": "zrg_put_someone",
            "message0": "把某人 %1 放到 %2",
            "args0": [
              {
                "type": "input_value",
                "name": "someone"
              },
              {
                "type": "field_dropdown",
                "name": "location",
                "options": [
                  [
                    "随机位置",
                    "0"
                  ],
                  [
                    "左上角",
                    "1"
                  ],
                  [
                    "右上角",
                    "2"
                  ],
                  [
                    "左下角",
                    "3"
                  ],
                  [
                    "右下角",
                    "4"
                  ],
                  [
                    "中间",
                    "5"
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
            "type": "zrg_message",
            "message0": "设置提示信息 %1 显示文本： %2 其他内容： %3",
            "args0": [
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "message1"
              },
              {
                "type": "input_statement",
                "name": "message2"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          },
          {
            "type": "zrg_score",
            "message0": "您的得分为： %1",
            "args0": [
              {
                "type": "input_value",
                "name": "score",
                "check": "Number"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          },


          {
            "type": "zrg_get_score",
            "message0": "得分",
            "previousStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          },
          {
            "type": "zrg_when_click",
            "message0": "当点击时 %1",
            "args0": [
              {
                "type": "input_statement",
                "name": "zrg_input"
              }
            ],
            "colour": 20,
            "tooltip": "",
            "helpUrl": ""
          },


        ]
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

Blockly.JavaScript['turn_dire_angle'] = function(block) {
    var turn_dire = block.getFieldValue('转向');
    var turn_angle = block.getFieldValue('角度');
    var value_enter = Blockly.JavaScript.valueToCode(block, 'enter', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    //alert(turn_dire);
    var code = "turnDireAngle(\""+turn_dire+"\" ,\""+turn_angle+"\");";
    return code;
};

  

  
  Blockly.JavaScript['zrg_saysomething'] = function(block) {
    var someone = Blockly.JavaScript.valueToCode(block, 'someone', Blockly.JavaScript.ORDER_ATOMIC);
    var something = Blockly.JavaScript.valueToCode(block, 'something', Blockly.JavaScript.ORDER_ATOMIC);
    var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var arrs = new Array(someone,something,time);
    var code = 'saysomething('+someone+','+something+','+time+');\n';
    return code;
  };

  Blockly.JavaScript['zrg_someonemove'] = function(block) {
    var value_somenoe = Blockly.JavaScript.valueToCode(block, 'somenoe', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =  'someoneMove('+value_somenoe+',"'+dropdown_direction+'",'+value_distance+');\n';
    return code;
  };

  
  Blockly.JavaScript['zrg_wait_then_do'] = function(block) {
    var time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    var codes = Blockly.JavaScript.statementToCode(block, 'codes');
    time = time.parseFloat();
    codes = codes.substring(0,codes.length-2);
    time = time*1000;
    // TODO: Assemble JavaScript into code variable.
    var code = 'setTimeout('+codes+','+time+');\n';
    return code;
  };


  Blockly.JavaScript['zrg_wait'] = function(block) {
    var delay = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
    var fun = "function sleep(delay) { var start = (new Date()).getTime(); while ((new Date()).getTime() - start < delay) {continue;}}";
    // TODO: Assemble JavaScript into code variable.
    // var code = ''+fun+';\n'+'sleep('+delay+');\n';  //实现1：让系统繁忙执行循环。缺点：无法异步完成其他事情
    var code = 'myTimeout('+delay+');\n';              //实现2：在对应的课程文件里通过setTimeout的累加完成该功能.(设置一个flag，和总的计时间隔)
    return code;
  };



  Blockly.JavaScript['zrg_disappear'] = function(block) {
    var actorname = Blockly.JavaScript.valueToCode(block, 'actorname', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('dropdown_name');
    // TODO: Assemble JavaScript into code variable.
    var code = 'actorAppearControl('+actorname+','+dropdown_name+');\n';
    return code;
  };


  Blockly.JavaScript['zrg_put_someone'] = function(block) {
    var value_someone = Blockly.JavaScript.valueToCode(block, 'someone', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_location = block.getFieldValue('location');
    // TODO: Assemble JavaScript into code variable.
    var code = 'putSomeoneAt('+value_someone+','+dropdown_location+');\n';
    return code;
  };


  Blockly.JavaScript['zrg_message'] = function(block) {
    //设置提示信息-显示文本：
    var value_message1 = Blockly.JavaScript.valueToCode(block, 'message1', Blockly.JavaScript.ORDER_ATOMIC);
    //设置提示信息-其他内容：
    var statements_message2 = Blockly.JavaScript.statementToCode(block, 'message2');
    // TODO: Assemble JavaScript into code variable.
    var code = 'showMessage('+value_message1+',"'+statements_message2+'");\n';
    return code;
  };  

Blockly.JavaScript['zrg_score'] = function(block) {
  var value_score = Blockly.JavaScript.valueToCode(block, 'score', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // var code = '您的得分为：'+value_score+'';
  var code = '';
  return code;
};

Blockly.JavaScript['zrg_when_click'] = function(block) {
  var statements_input = Blockly.JavaScript.statementToCode(block, 'zrg_input');
  statements_input = statements_input.substring(0,statements_input.length-2);
  // TODO: Assemble JavaScript into code variable.
  var code = 'whenClick('+ statements_input  +');\n';
  return code;
};


Blockly.JavaScript['zrg_get_score'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'getScore();\n';
  return code;
};