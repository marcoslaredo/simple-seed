var seed = require('./constructor.js');
var componentMixin = require('./componentMixin')

const Seed = new seed({
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

Seed.imports.ComponentMixin = componentMixin(Seed);
export default Seed;