'use strict';

goog.provide('Blockly.Blocks.ai');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['ai_ask'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.AI_ASK,        
      "args0": [
        {
          "type": "input_value",
          "name": "PROMPT"
        }
      ],
      "category": Blockly.Categories.ai,
      "extensions": ["colours_ai", "shape_statement"]
    });
  }
};

Blockly.Blocks['ai_answer'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.AI_ANSWER,    
      "category": Blockly.Categories.ai,
      "checkboxInFlyout": true,
      "extensions": ["colours_ai", "output_string"]
    });
  }
};

Blockly.Blocks['ai_translate'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.AI_TRANSLATE,  
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "LANGUAGE"
        }
      ],
      "category": Blockly.Categories.ai,
      "extensions": ["colours_ai", "shape_statement"]
    });
  }
};

Blockly.Blocks['ai_isready'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.AI_ISREADY,   
      "category": Blockly.Categories.ai,
      "extensions": ["colours_ai", "output_boolean"]
    });
  }
};