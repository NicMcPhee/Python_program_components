$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

//

$(document).ready(function() {
    ['keyword', 'functionDefinition', 'functionName', 'argument', 'functionName', 'functionCall', 'assignment', 'variable', 'numericConstant', 'generatingExpression', 'indexVariable'].forEach(function(name) {
        thisId = "#" + name + "s";
        $(thisId).clicktoggle(
            function() {
                thisId = "#" + name + "s";
                thisClass = "." + name;
                $(thisClass).css({
                    'backgroundColor': '#DDDDFF',
                    'text-decoration': 'underline'
                });
            },
            function() {
                thisId = "#" + name + "s";
                thisClass = "." + name;
                $(thisClass).css({
                    'backgroundColor': '#FFFFFF',
                    'text-decoration': 'none'
                })
            }
        );
    });
})
