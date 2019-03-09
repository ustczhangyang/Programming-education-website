var stepButton = document.getElementById('stepButton');
var myInterpreter = null;

function initApi(interpreter, scope) {
    // Add an API function for the alert() block, generated for "text_print" blocks.
    interpreter.setProperty(scope, 'alert',
        interpreter.createNativeFunction(function (text) {
            text = text ? text.toString() : '';
            outputArea.value += '\n' + text;
        }));

    // Add an API function for the prompt() block.
    var wrapper = function (text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(prompt(text));
    };
    interpreter.setProperty(scope, 'prompt',
        interpreter.createNativeFunction(wrapper));

    // Add an API function for highlighting blocks.
    var wrapper = function (id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
        interpreter.createNativeFunction(wrapper));
}

var highlightPause = false;
var latestCode = '';

function highlightBlock(id) {
    workspace.highlightBlock(id);
    highlightPause = true;
}

function resetStepUi(clearOutput) {
    workspace.highlightBlock(null);
    highlightPause = false;

    if (clearOutput) {
        outputArea.value = 'Program output:\n=================';
    }
}

function generateCodeAndLoadIntoInterpreter() {
    // Generate JavaScript code and parse it.
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    latestCode = Blockly.JavaScript.workspaceToCode(workspace);
    resetStepUi(true);
}

function stepCode() {
    if (!myInterpreter) {
        // First statement of this code.
        // Clear the program output.
        resetStepUi(true);
        myInterpreter = new Interpreter(latestCode, initApi);

        // And then show generated code in an alert.
        // In a timeout to allow the outputArea.value to reset first.
        setTimeout(function () {
            alert('Ready to execute the following code\n' +
                '===================================\n' + latestCode);
            highlightPause = true;
            stepCode();
        }, 1);
        return;
    }
    highlightPause = false;
    do {
        try {
            var hasMoreCode = myInterpreter.step();
        } finally {
            if (!hasMoreCode) {
                // Program complete, no more code to execute.
                outputArea.value += '\n\n<< Program complete >>';

                myInterpreter = null;
                resetStepUi(false);

                // Cool down, to discourage accidentally restarting the program.
                stepButton.disabled = 'disabled';
                setTimeout(function () {
                    stepButton.disabled = '';
                }, 2000);

                return;
            }
        }
        // Keep executing until a highlight statement is reached,
        // or the code completes or errors.
    } while (hasMoreCode && !highlightPause);
}

// Load the interpreter now, and upon future changes.
generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function (event) {
    if (!(event instanceof Blockly.Events.Ui)) {
        // Something changed. Parser needs to be reloaded.
        generateCodeAndLoadIntoInterpreter();
    }
});