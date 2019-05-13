var seed = require('./constructor.js');
var componentMixin = require('./componentMixin')

const SimpleSeed = new seed({
    plugins: [
        require('./seedPlugins/request'),
        require('./seedPlugins/Tree'),
        require('./seedPlugins/SimpleEmit'),
        require('./seedPlugins/access'),
    ],
    extend: {
        extendSelf: 'simple',
        simple: (a,b)=>{
            console.log(a,b);
        }
    }
});

SimpleSeed.imports.ComponentMixin = componentMixin(SimpleSeed);
export default SimpleSeed;